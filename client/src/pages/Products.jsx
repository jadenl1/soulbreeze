import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { PRODUCTS, VARIETY_PACKS } from "../data/products";
import "../styles/Products.css";

// The hero row runs off both edges of the screen rather than ending inside
// it, so there are more cans here than any one viewport shows — the hero
// clips the rest. Enough to still reach both edges at 2560px wide.
const HERO_CAN_COUNT = 29;

export default function Products() {
	return (
		<>
			<section className="products-hero">
				<div className="products-hero-content">
					<div className="products-hero-label-row" data-aos="fade-up" data-aos-delay="0">
						<span className="products-hero-rule" />
						<span className="products-hero-label">The Lineup</span>
						<span className="products-hero-rule" />
					</div>
					<h1 className="products-hero-heading" data-aos="fade-up" data-aos-delay="100">
						Feel the
						<br />
						Breeze.
					</h1>
					<div className="products-hero-callouts" data-aos="fade-up" data-aos-delay="200">
						<span className="products-hero-callout">4.5% Alc/Vol</span>
						<span className="products-hero-callout">000 Cal</span>
						<span className="products-hero-callout">Gluten Free</span>
						<span className="products-hero-callout">Zero Sugar</span>
						<span className="products-hero-callout">No Bubbles</span>
					</div>
				</div>
				<div className="products-hero-cans">
					{Array.from({ length: HERO_CAN_COUNT }, (_, i) => (
						<img
							key={i}
							src={PRODUCTS[i % PRODUCTS.length].image}
							alt=""
							className="products-hero-can-img"
							style={{
								// Fade outward from the middle of the row.
								animationDelay: `${Math.abs(i - (HERO_CAN_COUNT - 1) / 2) * 35}ms`,
							}}
						/>
					))}
				</div>
			</section>

			<section className="products-grid-section">
				<h2 className="products-section-header" data-aos="fade-up" data-aos-delay="0">
					Cans
				</h2>
				<div className="products-grid">
					{PRODUCTS.map((flavor, i) => (
						<Link
							key={flavor.id}
							to={`/products/${flavor.id}`}
							className="product-card"
							data-aos="fade-up"
							data-aos-delay={i * 80}
						>
							<div className="product-can-wrap">
								<img src={flavor.image} alt={flavor.name} className="product-can" />
							</div>
							<div className="product-card-body">
								<h3 className="product-name">{flavor.name}</h3>
								<p className="product-subtitle">{flavor.subtitle}</p>
								<div className="product-stars">
									{Array.from({ length: 5 }, (_, i) =>
										i < flavor.rating ? (
											<FaStar
												key={i}
												className="product-star product-star-filled"
											/>
										) : (
											<FaRegStar key={i} className="product-star" />
										),
									)}
								</div>
								<div className="product-stats">
									<div className="product-stat">
										<span className="product-stat-value">4.5%</span>
										<span className="product-stat-label">ABV</span>
									</div>
									<div className="product-stat-divider" />
									<div className="product-stat">
										<span className="product-stat-value">000</span>
										<span className="product-stat-label">CAL</span>
									</div>
									<div className="product-stat-divider" />
									<div className="product-stat">
										<span className="product-stat-value">0g</span>
										<span className="product-stat-label">SUGAR</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>

				<h2 className="products-section-header products-section-header-variety" data-aos="fade-up" data-aos-delay="0">
					Variety Packs
				</h2>
				<div className="products-grid products-grid-variety">
					{VARIETY_PACKS.map((vp, i) => (
						<Link
							key={vp.id}
							to={`/products/variety/${vp.id}`}
							className="variety-card"
							data-aos="fade-up"
							data-aos-delay={i * 80}
						>
							<div className="variety-card-img" />
							<div className="variety-card-body">
								<h3 className="product-name">{vp.name}</h3>
								<p className="product-subtitle">{vp.flavorLabels.join(" · ")}</p>
							</div>
						</Link>
					))}
				</div>
			</section>
		</>
	);
}
