import { FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

export default function Contact() {
	return (
		<div className="contact-simple-page">
			<div className="contact-simple-content" data-aos="fade-up" data-aos-delay="0">
				<div className="contact-simple-label-row">
					<span className="contact-simple-rule" />
					<span className="contact-simple-label">Get In Touch</span>
					<span className="contact-simple-rule" />
				</div>
				<h1 className="contact-simple-heading">Contact Us.</h1>
				<p className="contact-simple-text">
					Reach out with any questions about retail, wholesale, partnerships, or
					anything else on your mind.
				</p>
				<a href="mailto:info@drinksoulbreeze.com" className="contact-simple-email">
					<FaEnvelope className="contact-simple-email-icon" />
					info@drinksoulbreeze.com
				</a>
				<p className="contact-ambassador-note contact-simple-note">
					Looking for the Ambassador application?{" "}
					<Link to="/ambassador" className="contact-ambassador-link">Apply here →</Link>
				</p>
			</div>
		</div>
	);
}
