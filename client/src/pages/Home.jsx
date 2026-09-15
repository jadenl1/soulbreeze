import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import SocialGallery from "../components/SocialGallery";
import logo from "../assets/soulbreeze-logo.png";
import agaveClassic from "../assets/agave-classic.jpg";
import agavePeach from "../assets/agave-peach.jpg";
import agaveRaspberry from "../assets/agave-raspberry.jpg";
import agaveYellow from "../assets/agave-yellow.jpg";
import canBlue from "../assets/cans/can-blue.webp";
import canPeach from "../assets/cans/can-peach.webp";
import canRaspberry from "../assets/cans/can-raspberry.webp";
import canYellow from "../assets/cans/can-yellow.webp";
import agaveBlue from "../assets/agave-blue-transparent.png";
import cheers from "../assets/gallery-photos/3.webp";
import "../styles/Home.css";

export default function Home() {
	return (
		<>
			<div className="hero">
				<div className="hero-content">
					<img
						src={logo}
						alt="Soulbreeze"
						className="hero-logo"
						data-aos="fade-up"
						data-aos-delay="0"
					/>
					<div className="hero-callouts" data-aos="fade-up" data-aos-delay="100">
						<span>Premium Tequila</span>
						<span className="hero-callout-dot">·</span>
						<span>Brewed Tea</span>
						<span className="hero-callout-dot">·</span>
						<span>No Bubbles</span>
					</div>
					<div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
						<Link to="/locations" className="btn btn-filled">
							<span className="btn-label">
								<span className="btn-label-top">Our Locations</span>
								<span className="btn-label-bottom">Our Locations</span>
							</span>
						</Link>
						<Link to="/ambassador" className="btn btn-outline-bordered">
							<span className="btn-label">
								<span className="btn-label-top">Become an Ambassador</span>
								<span className="btn-label-bottom">Become an Ambassador</span>
							</span>
						</Link>
					</div>
				</div>
				<div className="hero-ribbon" data-aos="fade-up" data-aos-delay="300">
					<div
						className="ribbon-segment ribbon-1"
						style={{ backgroundImage: `url(${agaveClassic})` }}
					>
						<img src={canBlue} alt="" className="ribbon-can" />
					</div>
					<div
						className="ribbon-segment ribbon-2"
						style={{ backgroundImage: `url(${agavePeach})` }}
					>
						<img src={canPeach} alt="" className="ribbon-can" />
					</div>
					<div
						className="ribbon-segment ribbon-3"
						style={{ backgroundImage: `url(${agaveRaspberry})` }}
					>
						<img src={canRaspberry} alt="" className="ribbon-can" />
					</div>
					<div
						className="ribbon-segment ribbon-4"
						style={{ backgroundImage: `url(${agaveYellow})` }}
					>
						<img src={canYellow} alt="" className="ribbon-can" />
					</div>
				</div>
			</div>
			<SocialGallery />
			<section className="feature-grid">
				<div className="feature-row">
					<div
						className="feature-card feature-light"
						style={{ flex: 1.5 }}
						data-aos="fade-up"
						data-aos-delay="0"
					>
						<h2 className="feature-heading feature-heading-dark">Real Tequila</h2>
						<p className="feature-text feature-text-accent">
							Crafted with authentic tequila from Jalisco, Mexico for the smooth,
							refreshing finish that defines every SoulBreeze.
						</p>
					</div>
					<div
						className="feature-card feature-dark"
						style={{ flex: 1 }}
						data-aos="fade-up"
						data-aos-delay="120"
					>
						<div
							className="feature-card-bg"
							style={{ backgroundImage: `url(${agaveBlue})` }}
						/>
						<h2 className="feature-heading feature-heading-accent">Brewed Tea</h2>
						<p className="feature-text feature-text-light">
							Because every great sip starts with great tea.
						</p>
					</div>
				</div>
				<div className="feature-row">
					<div
						className="feature-card feature-dark"
						style={{ flex: 1 }}
						data-aos="fade-up"
						data-aos-delay="0"
					>
						<div
							className="feature-card-bg feature-card-bg-zero"
							style={{ backgroundImage: `url(${agaveBlue})` }}
						/>
						<h2 className="feature-heading feature-heading-accent">Zero Sugar</h2>
						<p className="feature-text feature-text-light">
							All of the flavor, none of the sugar.
						</p>
					</div>
					<div
						className="feature-card feature-light"
						style={{ flex: 2.2 }}
						data-aos="fade-up"
						data-aos-delay="120"
					>
						<h2 className="feature-heading feature-heading-dark">
							Exceptionally Smooth
						</h2>
						<p className="feature-text feature-text-accent">
							No Bubbles by design for a clean, easy drinking experience from the
							first sip to the last.
						</p>
					</div>
					<Link
						to="/products"
						className="feature-card feature-lineup-card"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						<div className="feature-lineup-can-wrap">
							<img src={canBlue} alt="" className="feature-lineup-can" />
						</div>
						<h2 className="feature-heading feature-heading-dark feature-lineup-heading">
							Our Lineup
						</h2>
						<MdArrowOutward className="feature-lineup-arrow" />
					</Link>
				</div>
			</section>
			<hr className="section-divider" />
			<section className="story-section">
				<div className="story-image-wrap" data-aos="fade-up" data-aos-delay="0">
					<img src={cheers} alt="Cheers with Soul Breeze cans" className="story-image" />
				</div>
				<div className="story-content">
					<span className="story-label" data-aos="fade-up" data-aos-delay="0">
						OUR STORY
					</span>
					<h2 className="story-heading" data-aos="fade-up" data-aos-delay="100">
						Created With Soul.
					</h2>
					<p className="story-text" data-aos="fade-up" data-aos-delay="180">
						Tea has always been refreshing. Tequila has always brought people together.
						We believe the two belong together.
					</p>
					<p className="story-text" data-aos="fade-up" data-aos-delay="240">
						So we combined premium tequila crafted in Jalisco, Mexico with freshly
						brewed tea to create a smooth, refreshing cocktail that's incredibly easy to
						drink. No unnecessary ingredients. No compromise. Just a better way to enjoy
						tequila. Whether you're by the pool, relaxing with friends, or celebrating
						life's biggest moments, SoulBreeze is crafted to elevate every occasion.
					</p>
				</div>
			</section>
			<hr className="section-divider" />
			<section className="ambassador-section">
				<span className="ambassador-label" data-aos="fade-up" data-aos-delay="0">
					THE SOULBREEZE CREW
				</span>
				<h2 className="ambassador-heading" data-aos="fade-up" data-aos-delay="100">
					More Than an Ambassador.
				</h2>
				<p className="ambassador-text" data-aos="fade-up" data-aos-delay="180">
					Love SoulBreeze? Join the Crew. Get exclusive merchandise, special giveaways,
					and opportunities available only to our ambassadors.
				</p>
				<div className="ambassador-social" data-aos="fade-up" data-aos-delay="260">
					<a
						href="https://www.instagram.com/drinksoulbreeze/"
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram"
						className="ambassador-icon"
					>
						<FaInstagram />
					</a>
					<a href="#" aria-label="TikTok" className="ambassador-icon">
						<FaTiktok />
					</a>
				</div>
				<div className="ambassador-buttons" data-aos="fade-up" data-aos-delay="340">
					<Link to="/locations" className="btn btn-filled">
						<span className="btn-label">
							<span className="btn-label-top">Our Locations</span>
							<span className="btn-label-bottom">Our Locations</span>
						</span>
					</Link>
					<Link to="/ambassador" className="btn btn-outline-bordered">
						<span className="btn-label">
							<span className="btn-label-top">Become an Ambassador</span>
							<span className="btn-label-bottom">Become an Ambassador</span>
						</span>
					</Link>
				</div>
			</section>
		</>
	);
}
