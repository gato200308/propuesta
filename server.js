require('dotenv').config();
const fs = require('fs');
const express = require('express');
const path = require('path');
const { createIssueResponse } = require('./issue-utils');

const app = express();
const PORT = process.env.PORT || 3000;
const SKIP_TOKEN_VALIDATION = process.env.SKIP_TOKEN_VALIDATION === 'true';

app.use(express.json());

// Servir archivos estáticos (index.html, app.js, styles.css, etc.) desde la raíz
app.use(express.static(path.join(__dirname, '/')));

// Permitir CORS simple (por si el cliente se sirve desde otro origen)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Ruta raíz sirve el index.html (por compatibilidad)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

async function handleIssueReceipt(req, res, action = 'read') {
  const day = req.body?.day ?? req.body?.dia ?? null;
  const reader = req.body?.reader ?? req.body?.nombre ?? 'anónimo';
  const response = req.body?.response ?? null;

  if (!day) {
    return res.status(400).json(createIssueResponse({ ok: false, action, day, reader, error: 'day is required' }));
  }

  const repo = process.env.GITHUB_REPO; // formato: owner/repo
  const token = process.env.GITHUB_TOKEN;

  if (!repo || !token) {
    return res.status(500).json(createIssueResponse({ ok: false, action, day, reader, error: 'Server not configured. Set GITHUB_REPO and GITHUB_TOKEN.' }));
  }

  const [owner, repoName] = repo.split('/');
  if (!owner || !repoName) {
    return res.status(500).json(createIssueResponse({ ok: false, action, day, reader, error: 'GITHUB_REPO must be in owner/repo format' }));
  }

  const isProposal = action === 'proposal';
  const title = isProposal
    ? `Propuesta: Día ${day} - ${response ? response.toUpperCase() : '?'} - ${reader}`
    : `Lectura: Día ${day} leído${reader ? ` por ${reader}` : ''}`;

  const requesterIp = req.headers['x-forwarded-for'] || req.ip || 'desconocida';
  const userAgent = req.headers['user-agent'] || 'desconocido';
  const body = isProposal
    ? `Se registró la propuesta de ser novios para el día ${day}.\n\nRespuesta: ${response ? response.toUpperCase() : 'SIN RESPUESTA'}\n\nLector: ${reader || 'anónimo'}\nFecha: ${new Date().toISOString()}\n\nMeta:\n- IP: ${requesterIp}\n- User-Agent: ${userAgent}`
    : `Se registró la lectura del día ${day}.\n\nLector: ${reader || 'anónimo'}\nFecha: ${new Date().toISOString()}\n\nMeta:\n- IP: ${requesterIp}\n- User-Agent: ${userAgent}`;

  // Validación opcional de tokens por día. En despliegues donde quieras
  // evitar el proceso manual de crear issues, puedes activar
  // SKIP_TOKEN_VALIDATION=true en las variables de entorno de Render.
  if (!SKIP_TOKEN_VALIDATION) {
    let tokens = {};
    const TOKENS_PATHS = [
      path.join(__dirname, 'tokens.json'),
      path.join('/etc/secrets', 'tokens.json')
    ];
    for (const p of TOKENS_PATHS) {
      try {
        if (fs.existsSync(p)) {
          const raw = fs.readFileSync(p, 'utf8');
          tokens = JSON.parse(raw);
          break;
        }
      } catch (e) {
        // ignore
      }
    }

    const providedKey = req.body.key || req.query.key;
    if (!tokens || !tokens[day]) {
      return res.status(403).json(createIssueResponse({ ok: false, action, day, reader, error: 'No token configured for this day' }));
    }
    if (!providedKey || providedKey !== tokens[day].token) {
      return res.status(403).json(createIssueResponse({ ok: false, action, day, reader, error: 'Invalid or missing token for this day' }));
    }
    if (tokens[day].used) {
      return res.status(409).json(createIssueResponse({ ok: false, action, day, reader, error: 'Token already used' }));
    }

    // Marcar token como usado (si el archivo está en el repo local)
    try {
      tokens[day].used = true;
      const localPath = path.join(__dirname, 'tokens.json');
      if (fs.existsSync(localPath)) {
        fs.writeFileSync(localPath, JSON.stringify(tokens, null, 2));
      }
    } catch (e) {
      console.warn('Could not persist token usage:', e.message);
    }
  } else {
    console.log('SKIP_TOKEN_VALIDATION enabled — accepting public read receipts');
  }

  try {
    const resp = await fetch(`https://api.github.com/repos/${owner}/${repoName}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body, labels: ['read-receipt'] })
    });

    const data = await resp.json();
    if (!resp.ok) {
      return res.status(502).json(createIssueResponse({ ok: false, action, day, reader, error: data }));
    }

    // Intentar actualizar un archivo público en el repo para reflejar el estado
    try {
      const statusPath = 'read-status.json';
      const apiBase = 'https://api.github.com';
      const fileUrl = `${apiBase}/repos/${owner}/${repoName}/contents/${encodeURIComponent(statusPath)}`;

      // Obtener contenido actual (si existe)
      let existing = null;
      const getResp = await fetch(fileUrl, {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      if (getResp.ok) {
        existing = await getResp.json();
      }

      // Construir nuevo estado
      let current = {};
      if (existing && existing.content) {
        try {
          const raw = Buffer.from(existing.content, 'base64').toString('utf8');
          current = JSON.parse(raw || '{}');
        } catch (e) {
          current = {};
        }
      }

      const timestamp = new Date().toISOString();
      current[day] = {
        used: true,
        reader: reader || 'anónimo',
        issue: data.html_url,
        timestamp,
        action
      };

      const newContent = Buffer.from(JSON.stringify(current, null, 2)).toString('base64');

      const putBody = {
        message: `Update read status for day ${day}`,
        content: newContent,
      };
      if (existing && existing.sha) putBody.sha = existing.sha;

      const putResp = await fetch(fileUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(putBody)
      });

      if (!putResp.ok) {
        const err = await putResp.text();
        console.warn('Could not update read-status.json:', err);
      }
    } catch (e) {
      console.warn('Failed updating repo status file:', e.message);
    }

    return res.json(createIssueResponse({ ok: true, action, day, reader, issue: data.html_url }));
  } catch (err) {
    console.error('Error creating GitHub issue:', err);
    return res.status(500).json(createIssueResponse({ ok: false, action, day, reader, error: err.message }));
  }
}

app.post('/api/read', (req, res) => handleIssueReceipt(req, res, 'read'));
app.post('/api/proposal', (req, res) => handleIssueReceipt(req, res, 'proposal'));

app.listen(PORT, () => {
  console.log(`Read-receipt server listening on http://localhost:${PORT}`);
});
