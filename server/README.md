# soulbreeze-server

Receives ambassador applications from the client and emails them via Resend.
One route; no database, no sessions, no state.

## Local development

```bash
npm install
cp .env.example .env      # then fill in RESEND_API_KEY
npm run dev               # http://localhost:3001, restarts on save
```

`npm run dev` loads `.env` through Node's built-in `--env-file`, so there is no
`dotenv` dependency.

## Endpoints

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/healthz` | Health check for Render |
| `POST` | `/api/applications` | Accepts an application, sends the email |

### `POST /api/applications`

Body mirrors the form in `client/src/pages/Ambassador.jsx`:

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane@email.com",
  "dob": "2001-04-12",
  "location": "Miami, FL",
  "referral": "instagram",
  "instagram": "@janedoe",
  "tiktok": "",
  "portfolio": "https://janedoe.com",
  "why": "…",
  "agreed": true
}
```

`instagram`, `tiktok`, and `portfolio` are optional. Everything else is
required, `agreed` must be exactly `true`, and `dob` must work out to 21+.
A `website` field is the honeypot — it must be absent or empty.

Responses:

| Status | Body |
| --- | --- |
| `200` | `{ "ok": true }` |
| `400` | `{ "ok": false, "errors": { "email": "…" } }` |
| `429` | `{ "ok": false, "error": "Too many applications…" }` |
| `500` | `{ "ok": false, "error": "…" }` |

Rate limit is 5 submissions per IP per hour.

## Deploying to Render

Create a **Web Service** from this repo:

| Setting | Value |
| --- | --- |
| Root Directory | `server` |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Health Check Path | `/healthz` |

Set `RESEND_API_KEY`, `TO_EMAIL`, `FROM_EMAIL`, and `ALLOWED_ORIGIN` under the
Environment tab. **Do not set `PORT`** — Render injects it.

### Resend sender rules

On an unverified domain you must send *from* `onboarding@resend.dev`, and
Resend will only deliver *to* the address that owns the Resend account. Sign
up with the same address as `TO_EMAIL` or nothing will arrive. Verifying
`drinksoulbreeze.com` lifts both restrictions.

### Free tier

A free Web Service spins down after ~15 minutes idle and takes 30–60s to wake,
so the first application after a quiet period waits on that cold start.
