import "../styles/Policy.css";

export default function PrivacyPolicy() {
	return (
		<div className="policy-page">
			<p className="policy-updated" data-aos="fade-up" data-aos-delay="0">Last updated: June 27, 2026</p>
			<h1 className="policy-heading" data-aos="fade-up" data-aos-delay="80">Privacy Policy.</h1>
			<div className="policy-body" data-aos="fade-up" data-aos-delay="160">
				<div className="policy-section">
					<h2>Who We Are</h2>
					<p>
						Soulbreeze is a premium hard seltzer brand based on the East Coast. This Privacy Policy explains how we handle information collected through our website at soulbreeze.com.
					</p>
				</div>

				<div className="policy-section">
					<h2>Information We Collect</h2>
					<p>We only collect information you voluntarily provide to us through our website:</p>
					<ul>
						<li><strong>Contact form:</strong> First name, last name, email address, your inquiry type, and your message.</li>
						<li><strong>Ambassador application:</strong> First name, last name, email address, date of birth, location, social media handles, portfolio links, and your application responses.</li>
					</ul>
					<p>We do not collect any information automatically beyond standard cookies described in our <a href="/cookies">Cookie Policy</a>.</p>
				</div>

				<div className="policy-section">
					<h2>How We Use Your Information</h2>
					<ul>
						<li>To respond to your contact form inquiries.</li>
						<li>To review and follow up on ambassador applications.</li>
						<li>To verify that applicants meet our age requirement of 21 or older.</li>
					</ul>
					<p>We do not use your information for automated decision-making or profiling.</p>
				</div>

				<div className="policy-section">
					<h2>Data Sharing</h2>
					<p>
						We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who help us operate the website or process applications, and only to the extent necessary to perform those functions.
					</p>
				</div>

				<div className="policy-section">
					<h2>Data Retention</h2>
					<p>
						Contact form submissions are retained only as long as needed to respond to your inquiry. Ambassador applications are retained during the active review period and deleted if an application is not progressed.
					</p>
				</div>

				<div className="policy-section">
					<h2>Your Rights</h2>
					<p>
						Depending on your location, you may have the right to access, correct, or request deletion of your personal data. To make a request, email us at <a href="mailto:hello@soulbreeze.com">hello@soulbreeze.com</a>.
					</p>
				</div>

				<div className="policy-section">
					<h2>Cookies</h2>
					<p>
						We use a small number of essential cookies to operate the site. For full details, see our <a href="/cookies">Cookie Policy</a>.
					</p>
				</div>

				<div className="policy-section">
					<h2>Age Restriction</h2>
					<p>
						This website is intended exclusively for individuals aged 21 or older. We do not knowingly collect information from anyone under the age of 21.
					</p>
				</div>

				<div className="policy-section">
					<h2>Contact</h2>
					<p>
						Questions about this policy? Reach us at <a href="mailto:hello@soulbreeze.com">hello@soulbreeze.com</a> or through our <a href="/contact">Contact page</a>.
					</p>
				</div>
			</div>
		</div>
	);
}
