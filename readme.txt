Yhdessä-web

A multilingual company website for a family friend.

🚀 What’s Done

React (Vite) frontend with Tailwind CSS

Responsive landing page (Finnish, Swedish, English)

Basic routing and layout

Express + MongoDB backend (WIP)

🛠 Tech Stack

Frontend: React, Tailwind CSS

Backend: Node.js, Express, MongoDB

📌 Next Steps

API integration & auth

i18n improvements

More pages (Dashboard, Events, Community)

Deployment (Vercel/Render)

✅ Deployment Setup (Vercel)

Repo now includes a root `vercel.json` configured for this monorepo layout:

- Install command: `npm install --prefix client`
- Build command: `npm run build --prefix client`
- Output directory: `client/dist`
- SPA routing fallback to `index.html`

To deploy:

1. Import the GitHub repo in Vercel.
2. Keep the project root at repository root.
3. Vercel will read `vercel.json` automatically.
4. Deploy and share the generated preview URL.
