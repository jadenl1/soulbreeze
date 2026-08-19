import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import "../styles/Contact.css";
import "../styles/Ambassador.css";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

const EMPTY_FORM = {
	firstName: "",
	lastName: "",
	email: "",
	dob: "",
	location: "",
	instagram: "",
	tiktok: "",
	portfolio: "",
	referral: "",
	why: "",
	agreed: false,
	// Honeypot — hidden from people, irresistible to bots. The server discards
	// any submission that fills it in.
	website: "",
};

export default function Ambassador() {
	const [form, setForm] = useState(EMPTY_FORM);
	const [status, setStatus] = useState("idle"); // idle | submitting | success
	const [errors, setErrors] = useState({});
	const [formError, setFormError] = useState("");

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (status === "submitting") return;

		setStatus("submitting");
		setErrors({});
		setFormError("");

		try {
			const res = await fetch(`${API_URL}/api/applications`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			// A cold-started or crashed service can answer with HTML rather than
			// JSON, so parsing has to be allowed to fail without throwing.
			const data = await res.json().catch(() => ({}));

			if (res.ok && data.ok) {
				setStatus("success");
				return;
			}

			if (data.errors) {
				setErrors(data.errors);
				setFormError("Please fix the highlighted fields and try again.");
			} else {
				setFormError(data.error ?? "Something went wrong. Please try again.");
			}
		} catch {
			setFormError("We couldn't reach the server. Check your connection and try again.");
		}

		setStatus("idle");
	};

	const inputClass = (name) => `contact-input${errors[name] ? " contact-input-error" : ""}`;
	const fieldError = (name) =>
		errors[name] ? <p className="amb-error">{errors[name]}</p> : null;

	const submitting = status === "submitting";
	const buttonLabel = submitting ? "Submitting…" : "Submit Application";

	return (
		<div className="contact-page amb-page">
			<div className="contact-left" data-aos="fade-up" data-aos-delay="0">
				<h1 className="contact-heading">Become an<br />Ambassador.</h1>
			</div>

			{status === "success" ? (
				<div className="amb-success" data-aos="fade-up" data-aos-delay="100" role="status">
					<p className="amb-section-label">Application Received</p>
					<h2 className="amb-success-heading">Thanks, {form.firstName}.</h2>
					<p className="amb-success-text">
						Your application is in. We review every one and will reach out at{" "}
						<strong>{form.email}</strong> if you're a great fit.
					</p>
				</div>
			) : (
				<form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="100">

					{/* Personal Info */}
					<p className="amb-section-label">Personal Info</p>

					<div className="contact-row">
						<div className="contact-field">
							<label className="contact-label">First Name <span className="contact-required">*</span></label>
							<input className={inputClass("firstName")} type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jane" required />
							{fieldError("firstName")}
						</div>
						<div className="contact-field">
							<label className="contact-label">Last Name <span className="contact-required">*</span></label>
							<input className={inputClass("lastName")} type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required />
							{fieldError("lastName")}
						</div>
					</div>

					<div className="contact-row">
						<div className="contact-field">
							<label className="contact-label">Email <span className="contact-required">*</span></label>
							<input className={inputClass("email")} type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" required />
							{fieldError("email")}
						</div>
						<div className="contact-field">
							<label className="contact-label">Date of Birth <span className="contact-required">*</span></label>
							<input className={inputClass("dob")} type="date" name="dob" value={form.dob} onChange={handleChange} required />
							{fieldError("dob")}
						</div>
					</div>

					<div className="contact-row">
						<div className="contact-field">
							<label className="contact-label">City & State <span className="contact-required">*</span></label>
							<input className={inputClass("location")} type="text" name="location" value={form.location} onChange={handleChange} placeholder="Miami, FL" required />
							{fieldError("location")}
						</div>
						<div className="contact-field">
							<label className="contact-label">How did you hear about us? <span className="contact-required">*</span></label>
							<select className={`${inputClass("referral")} contact-select`} name="referral" value={form.referral} onChange={handleChange} required>
								<option value="" disabled>Select one</option>
								<option value="instagram">Instagram</option>
								<option value="tiktok">TikTok</option>
								<option value="friend">A Friend</option>
								<option value="store">In a Store</option>
								<option value="other">Other</option>
							</select>
							{fieldError("referral")}
						</div>
					</div>

					{/* Social & Portfolio */}
					<p className="amb-section-label">Social & Portfolio</p>

					<div className="contact-row">
						<div className="contact-field">
							<label className="contact-label">Instagram Handle</label>
							<input className={inputClass("instagram")} type="text" name="instagram" value={form.instagram} onChange={handleChange} placeholder="@yourhandle" />
							{fieldError("instagram")}
						</div>
						<div className="contact-field">
							<label className="contact-label">TikTok Handle</label>
							<input className={inputClass("tiktok")} type="text" name="tiktok" value={form.tiktok} onChange={handleChange} placeholder="@yourhandle" />
							{fieldError("tiktok")}
						</div>
					</div>

					<div className="contact-field contact-field-full">
						<label className="contact-label">Portfolio / Website</label>
						<input className={inputClass("portfolio")} type="url" name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="https://yoursite.com" />
						{fieldError("portfolio")}
					</div>

					{/* Application */}
					<p className="amb-section-label">Your Application</p>

					<div className="contact-field contact-field-full">
						<label className="contact-label">Why do you want to be a Soulbreeze Ambassador? <span className="contact-required">*</span></label>
						<textarea className={`${inputClass("why")} contact-textarea amb-textarea`} name="why" value={form.why} onChange={handleChange} placeholder="Tell us a little about yourself and why you'd be a great fit…" required />
						{fieldError("why")}
					</div>

					{/* Honeypot — visually hidden, never shown to a real applicant */}
					<div className="amb-hp" aria-hidden="true">
						<label htmlFor="amb-website">Website</label>
						<input id="amb-website" type="text" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
					</div>

					{/* Terms */}
					<div className="amb-terms">
						<p className="amb-terms-text">
							By submitting this application you confirm you are 21 or older, that all information provided is accurate, and that you agree to Soulbreeze's ambassador guidelines. Submitting an application does not guarantee acceptance into the program. We review all applications and will reach out if you're a great fit.
						</p>
						<label className="amb-checkbox-label">
							<input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} required className="amb-checkbox" />
							<span>I have read and agree to the terms above. <span className="contact-required">*</span></span>
						</label>
						{fieldError("agreed")}
					</div>

					{formError && (
						<p className="amb-form-error" role="alert">{formError}</p>
					)}

					<button type="submit" className="btn btn-filled contact-submit" disabled={submitting}>
						<span className="btn-label">
							<span className="btn-label-top">{buttonLabel} <MdArrowOutward style={{ marginLeft: 6, fontSize: 13 }} /></span>
							<span className="btn-label-bottom">{buttonLabel} <MdArrowOutward style={{ marginLeft: 6, fontSize: 13 }} /></span>
						</span>
					</button>
				</form>
			)}
		</div>
	);
}
