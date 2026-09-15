# Soulbreeze

React + Vite website with an Express API for ambassador application emails.

## Structure

```text
📁 soulbreeze/
├── 📁 client/                 Frontend
│   ├── 📁 public/             Static files
│   ├── 📁 src/
│   │   ├── 📁 assets/         Images and logos
│   │   ├── 📁 components/     Shared UI
│   │   ├── 📁 data/           Product data
│   │   ├── 📁 pages/          Page components
│   │   ├── 📁 styles/         CSS
│   │   ├── ⚛️ App.jsx         Layout and routes
│   │   ├── ⚛️ main.jsx        Entry point
│   │   └── 🎨 index.css       Global styles
│   ├── ⚙️ vite.config.js
│   └── 📦 package.json
├── 📁 server/                 API
│   ├── 📁 lib/                Validation and email helpers
│   ├── 📜 server.js           Routes and startup
│   ├── ⚙️ .env.example
│   ├── 📦 package.json
│   └── 📝 README.md           API and deployment details
└── 📝 README.md
```

## Setup

Requires Node.js 22.13+ (22.x) or 24+. Run from the repository root:

```bash
npm --prefix client ci
npm --prefix server ci
```

Set these values in `client/.env`:

```dotenv
VITE_API_URL=http://localhost:3001
VITE_MAPBOX_TOKEN=your_mapbox_public_token
```

If `server/.env` is missing, copy `server/.env.example` to `server/.env`. Fill in `RESEND_API_KEY`, `TO_EMAIL`, and `FROM_EMAIL`; set `ALLOWED_ORIGIN=http://localhost:5173`.

## Start

Run from the repository root in separate terminals:

```bash
# Frontend → http://localhost:5173
npm --prefix client run dev
```

```bash
# API → http://localhost:3001
npm --prefix server run dev
```

Stop with `Ctrl+C`. The frontend works alone; ambassador submissions need the API.

## Other commands

From the repository root:

| Command | Action |
| --- | --- |
| `npm --prefix client run build` | Build to `client/dist/` |
| `npm --prefix client run preview` | Preview after building |
| `npm --prefix client run lint` | Check frontend code |
| `npm --prefix server start` | Start API without watch mode; requires environment variables already set |

See [server/README.md](server/README.md) for API and deployment details.
