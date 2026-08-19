import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

import { validateApplication } from "./lib/validation.js";
import { sendApplicationEmail } from "./lib/email.js";

const REQUIRED_ENV = ["RESEND_API_KEY", "TO_EMAIL", "FROM_EMAIL"];
const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
if (missing.length > 0) {
	console.error(`Missing required environment variables: ${missing.join(", ")}`);
	process.exit(1);
}

const app = express();

// Render terminates TLS at its proxy, so the client IP arrives in
// X-Forwarded-For. Without this the rate limiter keys every request to the
// proxy's address and would throttle all applicants as if they were one.
app.set("trust proxy", 1);

const allowedOrigins = process.env.ALLOWED_ORIGIN
	? process.env.ALLOWED_ORIGIN.split(",").map((origin) => origin.trim())
	: null;

if (!allowedOrigins) {
	console.warn("ALLOWED_ORIGIN is not set — accepting requests from any origin. Set it before deploying.");
}

app.use(
	cors({
		origin: allowedOrigins ?? true,
		methods: ["GET", "POST", "OPTIONS"],
	})
);

// Applications are ~5KB at the 5000-char limit on `why`; anything far larger
// is not a real submission.
app.use(express.json({ limit: "16kb" }));

const applicationLimiter = rateLimit({
	windowMs: 60 * 60 * 1000,
	limit: 5,
	legacyHeaders: false,
	message: {
		ok: false,
		error: "Too many applications from this address. Please try again later.",
	},
});

app.get("/healthz", (req, res) => {
	res.json({ ok: true });
});

app.post("/api/applications", applicationLimiter, async (req, res) => {
	const body = req.body ?? {};

	// Honeypot: a hidden field no human ever fills. Bots populate every input
	// they find. Respond 200 so the bot has no signal it was caught.
	if (typeof body.website === "string" && body.website.trim() !== "") {
		return res.json({ ok: true });
	}

	const { valid, errors, data } = validateApplication(body);
	if (!valid) {
		return res.status(400).json({ ok: false, errors });
	}

	try {
		await sendApplicationEmail(data);
	} catch (err) {
		console.error("[applications] send failed:", err);
		return res.status(500).json({
			ok: false,
			error: "We couldn't submit your application right now. Please try again shortly.",
		});
	}

	console.log(`[applications] received from ${data.email}`);
	return res.json({ ok: true });
});

app.use((req, res) => {
	res.status(404).json({ ok: false, error: "Not found." });
});

app.use((err, req, res, next) => {
	if (err?.type === "entity.parse.failed") {
		return res.status(400).json({ ok: false, error: "Malformed JSON body." });
	}
	if (err?.type === "entity.too.large") {
		return res.status(413).json({ ok: false, error: "Request body too large." });
	}
	console.error("[server] unhandled error:", err);
	return res.status(500).json({ ok: false, error: "Something went wrong." });
});

// Render injects PORT and requires binding on 0.0.0.0 — a hardcoded port or a
// localhost-only bind makes the deploy hang without ever reporting an error.
const port = process.env.PORT || 3001;
app.listen(port, "0.0.0.0", () => {
	console.log(`Soulbreeze application server listening on :${port}`);
});
