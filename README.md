# Bridge local -> GitHub para confirmaciones de lectura

Este pequeño servidor acepta POSTs desde la página estática y crea un issue en el repositorio de GitHub configurado. Así puedes ver en GitHub cuándo se leyó cada carta.

Requisitos:
- Node.js 18+ (usa fetch global)
- Un repo en GitHub donde tengas permisos para crear issues
- Un Personal Access Token (PAT) con scope `repo` o `public_repo`

Instalación y uso:

1. Copia `.env.example` a `.env` y rellena `GITHUB_REPO` (formato owner/repo) y `GITHUB_TOKEN`.

2. Instala dependencias y arranca el servidor:

   npm install
   npm start

3. Sirve la carpeta estática `propuesta` con un servidor HTTP local (evita abrir file:// directamente). Ejemplos:

   python -m http.server 8080
   npx http-server . -p 8080

4. Abre tu navegador en http://localhost:8080/index.html, abre una carta disponible y pulsa "Lo he leído"; el cliente intentará POST a http://localhost:3000/api/read y el servidor creará un issue en tu repo.

Privacidad y seguridad:
- No expongas tu GITHUB_TOKEN públicamente. Úsalo solo en tu entorno local o en un servidor seguro.
