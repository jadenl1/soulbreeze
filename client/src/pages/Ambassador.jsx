import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import "../styles/Contact.css";
import "../styles/Ambassador.css";

export default function Ambassador() {
	const [form, setForm] = useState({
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
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="contact-page amb-page">
			<div className="contact-left" data-aos="fade-up" data-aos-delay="0">
				<h1 className="contact-heading">Become an<br />Ambassador.</h1>
			</div>

			<form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="100">

				{/* Personal Info */}
				<p className="amb-section-label">Personal Info</p>

				<div className="contact-row">
					<div className="contact-field">
						<label className="contact-label">First Name <span className="contact-required">*</span></label>
						<input className="contact-input" type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jane" required />
					</div>
					<div className="contact-field">
						<label className="contact-label">Last Name <span className="contact-required">*</span></label>
						<input className="contact-input" type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" required />
					</div>
				</div>

				<div className="contact-row">
					<div className="contact-field">
						<label className="contact-label">Email <span className="contact-required">*</span></label>
						<input className="contact-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@email.com" required />
					</div>
					<div className="contact-field">
						<label className="contact-label">Date of Birth <span className="contact-required">*</span></label>
						<input className="contact-input" type="date" name="dob" value={form.dob} onChange={handleChange} required />
					</div>
				</div>

				<div className="contact-row">
					<div className="contact-field">
						<label className="contact-label">City & State <span className="contact-required">*</span></label>
						<input className="contact-input" type="text" name="location" value={form.location} onChange={handleChange} placeholder="Miami, FL" required />
					</div>
					<div className="contact-field">
						<label className="contact-label">How did you hear about us? <span className="contact-required">*</span></label>
						<select className="contact-input contact-select" name="referral" value={form.referral} onChange={handleChange} required>
							<option value="" disabled>Select one</option>
							<option value="instagram">Instagram</option>
							<option value="tiktok">TikTok</option>
							<option value="friend">A Friend</option>
							<option value="store">In a Store</option>
							<option value="other">Other</option>
						</select>
					</div>
				</div>

				{/* Social & Portfolio */}
				<p className="amb-section-label">Social & Portfolio</p>

				<div className="contact-row">
					<div className="contact-field">
						<label className="contact-label">Instagram Handle</label>
						<input className="contact-input" type="text" name="instagram" value={form.instagram} onChange={handleChange} placeholder="@yourhandle" />
					</div>
					<div className="contact-field">
						<label className="contact-label">TikTok Handle</label>
						<input className="contact-input" type="text" name="tiktok" value={form.tiktok} onChange={handleChange} placeholder="@yourhandle" />
					</div>
				</div>

				<div className="contact-field contact-field-full">
					<label className="contact-label">Portfolio / Website</label>
					<input className="contact-input" type="url" name="portfolio" value={form.portfolio} onChange={handleChange} placeholder="https://yoursite.com" />
				</div>

				{/* Application */}
				<p className="amb-section-label">Your Application</p>

				<div className="contact-field contact-field-full">
					<label className="contact-label">Why do you want to be a Soulbreeze Ambassador? <span className="contact-required">*</span></label>
					<textarea className="contact-input contact-textarea amb-textarea" name="why" value={form.why} onChange={handleChange} placeholder="Tell us a little about yourself and why you'd be a great fit…" required />
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
				</div>

				<button type="submit" className="btn btn-filled contact-submit">
					<span className="btn-label">
						<span className="btn-label-top">Submit Application <MdArrowOutward style={{ marginLeft: 6, fontSize: 13 }} /></span>
						<span className="btn-label-bottom">Submit Application <MdArrowOutward style={{ marginLeft: 6, fontSize: 13 }} /></span>
					</span>
				</button>
			</form>
		</div>
	);
}
