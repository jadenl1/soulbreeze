// The only file that knows which email provider we use.
// Swapping Resend for something else means rewriting sendApplicationEmail()
// and nothing outside this module.

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const REFERRAL_LABELS = {
	instagram: "Instagram",
	tiktok: "TikTok",
	friend: "A Friend",
	store: "In a Store",
	other: "Other",
};

const EMPTY = "—";

function escapeHtml(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function buildRows(application) {
	const { firstName, lastName, email, dob, age, location, referral, instagram, tiktok, portfolio } = application;

	return [
		["Name", `${firstName} ${lastName}`],
		["Email", email],
		["Age", `${age}  (DOB ${dob})`],
		["Location", location],
		["Heard via", REFERRAL_LABELS[referral] ?? referral],
		["Instagram", instagram || EMPTY],
		["TikTok", tiktok || EMPTY],
		["Portfolio", portfolio || EMPTY],
	];
}

export function renderHtml(application) {
	const rows = buildRows(application)
		.map(
			([label, value]) => `
				<tr>
					<td style="padding:10px 16px;border-bottom:1px solid #e6e6e6;color:#666;font-size:13px;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
					<td style="padding:10px 16px;border-bottom:1px solid #e6e6e6;color:#111;font-size:14px;">${escapeHtml(value)}</td>
				</tr>`
		)
		.join("");

	// `why` is free text: escape it, then turn newlines into <br> so paragraphs survive.
	const why = escapeHtml(application.why).replace(/\r?\n/g, "<br>");

	return `<!doctype html>
<html>
	<body style="margin:0;padding:24px;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
		<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;">
			<tr>
				<td style="padding:20px 16px;background:#111;color:#fff;font-size:16px;font-weight:600;">New Ambassador Application</td>
			</tr>
			${rows}
			<tr>
				<td colspan="2" style="padding:18px 16px 6px;color:#666;font-size:13px;">Why they want to join</td>
			</tr>
			<tr>
				<td colspan="2" style="padding:0 16px 22px;color:#111;font-size:14px;line-height:1.6;">${why}</td>
			</tr>
		</table>
	</body>
</html>`;
}

export function renderText(application) {
	const rows = buildRows(application)
		.map(([label, value]) => `${label.padEnd(12)}${value}`)
		.join("\n");

	return `New Ambassador Application\n\n${rows}\n\nWhy they want to join\n${application.why}\n`;
}

export async function sendApplicationEmail(application) {
	const { firstName, lastName, email, location } = application;

	// Resend resolves rather than throws on API errors, so the `error` field
	// has to be checked explicitly or failures pass silently as success.
	const { data, error } = await resend.emails.send({
		from: process.env.FROM_EMAIL,
		to: process.env.TO_EMAIL,
		replyTo: `${firstName} ${lastName} <${email}>`,
		subject: `Ambassador Application — ${firstName} ${lastName} (${location})`,
		html: renderHtml(application),
		text: renderText(application),
	});

	if (error) {
		throw new Error(`Resend rejected the send: ${error.message ?? JSON.stringify(error)}`);
	}

	return data;
}
