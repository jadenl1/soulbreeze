// Server-side validation for ambassador applications.
// The browser's `required` attributes are advisory only — anything can POST
// directly to this endpoint, so every rule the form claims is re-checked here.

const MIN_AGE = 21;

// Must stay in sync with the <select> options in client/src/pages/Ambassador.jsx
const REFERRAL_OPTIONS = new Set(["instagram", "tiktok", "friend", "store", "other"]);

const LIMITS = {
	firstName: 100,
	lastName: 100,
	email: 254,
	location: 200,
	instagram: 100,
	tiktok: 100,
	portfolio: 2048,
	why: 5000,
};

// Deliberately permissive — the only way to truly verify an address is to mail it.
// This just rejects obvious garbage before we spend a Resend send on it.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value) {
	return typeof value === "string" ? value.trim() : "";
}

// Whole years elapsed, in UTC so the result doesn't drift with server timezone.
export function ageOn(dobString, now = new Date()) {
	const dob = new Date(`${dobString}T00:00:00Z`);
	if (Number.isNaN(dob.getTime())) return null;
	if (dob > now) return null;

	let age = now.getUTCFullYear() - dob.getUTCFullYear();
	const monthDelta = now.getUTCMonth() - dob.getUTCMonth();
	if (monthDelta < 0 || (monthDelta === 0 && now.getUTCDate() < dob.getUTCDate())) {
		age -= 1;
	}
	return age;
}

export function validateApplication(body) {
	const errors = {};
	const data = {};

	for (const field of ["firstName", "lastName", "location", "why"]) {
		const value = asString(body[field]);
		if (!value) {
			errors[field] = "This field is required.";
		} else if (value.length > LIMITS[field]) {
			errors[field] = `Please keep this under ${LIMITS[field]} characters.`;
		} else {
			data[field] = value;
		}
	}

	const email = asString(body.email);
	if (!email) {
		errors.email = "This field is required.";
	} else if (email.length > LIMITS.email || !EMAIL_RE.test(email)) {
		errors.email = "Please enter a valid email address.";
	} else {
		data.email = email;
	}

	const dob = asString(body.dob);
	const age = dob ? ageOn(dob) : null;
	if (!dob) {
		errors.dob = "This field is required.";
	} else if (age === null) {
		errors.dob = "Please enter a valid date of birth.";
	} else if (age < MIN_AGE) {
		errors.dob = `You must be ${MIN_AGE} or older to apply.`;
	} else {
		data.dob = dob;
		data.age = age;
	}

	const referral = asString(body.referral);
	if (!referral) {
		errors.referral = "This field is required.";
	} else if (!REFERRAL_OPTIONS.has(referral)) {
		errors.referral = "Please choose one of the listed options.";
	} else {
		data.referral = referral;
	}

	// Optional text fields — absent is fine, oversized is not.
	for (const field of ["instagram", "tiktok"]) {
		const value = asString(body[field]);
		if (value.length > LIMITS[field]) {
			errors[field] = `Please keep this under ${LIMITS[field]} characters.`;
		} else {
			data[field] = value;
		}
	}

	const portfolio = asString(body.portfolio);
	if (!portfolio) {
		data.portfolio = "";
	} else if (portfolio.length > LIMITS.portfolio || !isHttpUrl(portfolio)) {
		errors.portfolio = "Please enter a valid URL (starting with http:// or https://).";
	} else {
		data.portfolio = portfolio;
	}

	if (body.agreed !== true) {
		errors.agreed = "You must agree to the terms to apply.";
	} else {
		data.agreed = true;
	}

	return { valid: Object.keys(errors).length === 0, errors, data };
}

function isHttpUrl(value) {
	try {
		const url = new URL(value);
		return url.protocol === "http:" || url.protocol === "https:";
	} catch {
		return false;
	}
}
