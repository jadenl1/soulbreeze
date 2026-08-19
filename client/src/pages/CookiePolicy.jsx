import "../styles/Policy.css";

export default function CookiePolicy() {
	return (
		<div className="policy-page">
			<p className="policy-updated" data-aos="fade-up" data-aos-delay="0">Last updated: June 27, 2026</p>
			<h1 className="policy-heading" data-aos="fade-up" data-aos-delay="80">Cookie Policy.</h1>
			<div className="policy-body" data-aos="fade-up" data-aos-delay="160">
				<div className="policy-section">
					<h2>What Are Cookies</h2>
					<p>
						Cookies are small pieces of data stored in your browser when you visit a website. They help the site remember your preferences and provide a consistent experience across visits.
					</p>
				</div>

				<div className="policy-section">
					<h2>Cookies We Use</h2>
					<p>We currently use only essential cookies required to operate the site:</p>
					<ul>
						<li>
							<strong>ageVerified</strong> — Stores whether you have confirmed you are 21 or older during your current browsing session. This is cleared when you close your browser.
						</li>
						<li>
							<strong>cookieConsent</strong> — Stores your preference for accepting or declining cookies so we do not show you the consent prompt on every visit. This persists across sessions.
						</li>
					</ul>
					<p>
						We do not currently use analytics, advertising, or third-party tracking cookies. If this changes in the future, this policy will be updated and you will be prompted to review your consent.
					</p>
				</div>

				<div className="policy-section">
					<h2>Your Choices</h2>
					<p>
						When you first visit the site, you are given the option to accept or decline cookies. Declining will prevent any non-essential cookies from being set. Because we currently only use essential cookies, the site will function the same either way.
					</p>
					<p>
						You can also clear cookies at any time through your browser settings. Clearing cookies will reset your age verification and consent preferences.
					</p>
				</div>

				<div className="policy-section">
					<h2>Managing Cookies in Your Browser</h2>
					<ul>
						<li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
						<li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
						<li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
					</ul>
				</div>

				<div className="policy-section">
					<h2>Contact</h2>
					<p>
						Questions about how we use cookies? Email us at <a href="mailto:hello@soulbreeze.com">hello@soulbreeze.com</a>.
					</p>
				</div>
			</div>
		</div>
	);
}
