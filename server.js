require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Permitir CORS simple desde la página estática local
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Read-receipt bridge for GitHub is running' });
});

app.post('/api/read', async (req, res) => {
  const { day, reader } = req.body || {};
  if (!day) return res.status(400).json({ error: 'day is required' });

  const repo = process.env.GITHUB_REPO; // formato: owner/repo
  const token = process.env.GITHUB_TOKEN;

  if (!repo || !token) {
    return res.status(500).json({ error: 'Server not configured. Set GITHUB_REPO and GITHUB_TOKEN.' });
  }

  const [owner, repoName] = repo.split('/');
  if (!owner || !repoName) {
    return res.status(500).json({ error: 'GITHUB_REPO must be in owner/repo format' });
  }

  const title = `Lectura: Día ${day} leído${reader ? ` por ${reader}` : ''}`;
  const body = `Se registró la lectura del día ${day}.
\nLector: ${reader || 'anónimo'}\nFecha: ${new Date().toISOString()}`;

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
      return res.status(502).json({ error: data });
    }

    return res.json({ ok: true, issue: data.html_url });
  } catch (err) {
    console.error('Error creating GitHub issue:', err);
    return res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Read-receipt server listening on http://localhost:${PORT}`);
});
