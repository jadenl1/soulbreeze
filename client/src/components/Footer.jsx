import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import logo from "../assets/soulbreeze-logo-light.png";
import agaveBlue from "../assets/agave-blue-transparent.png";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bg" style={{ backgroundImage: `url(${agaveBlue})` }} />
      <div className="footer-content">
        <img src={logo} alt="Soul Breeze" className="footer-logo" />

        <div className="footer-cols">
          <div className="footer-col">
            <span className="footer-col-title">EXPLORE</span>
            <Link to="/products" className="footer-link">Our Lineup</Link>
            <Link to="/locations" className="footer-link">Locations</Link>
            <Link to="/ambassador" className="footer-link">Become an Ambassador</Link>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">SUPPORT</span>
            <Link to="/contact" className="footer-link">Contact Us</Link>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">LEGAL</span>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <Link to="/cookies" className="footer-link">Cookie Policy</Link>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">SOCIAL</span>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/drinksoulbreeze/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="footer-icon"
              >
                <FaInstagram />
              </a>
              <a href="#" aria-label="TikTok" className="footer-icon">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-meta">
          <span>© 2026 Soul Breeze</span>
          <span>Drink Responsibly.</span>
        </div>
      </div>
    </footer>
  );
}
