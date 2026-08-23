import { useState, useRef, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { PRODUCTS, VARIETY_PACKS } from "../data/products";
import "../styles/VarietyPackDetail.css";

export default function VarietyPackDetail() {
	const { id } = useParams();
	const [activeTab, setActiveTab] = useState("description");
	const tabRefs = useRef({});
	const [indicator, setIndicator] = useState({ left: 0, width: 0 });
	const pack = VARIETY_PACKS.find((vp) => vp.id === id);

	useLayoutEffect(() => {
		const el = tabRefs.current[activeTab];
		if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
	}, [activeTab, id]);

	if (!pack) {
		return (
			<div className="vpd-not-found">
				<h2>Pack not found.</h2>
				<Link to="/products">Back to the lineup</Link>
			</div>
		);
	}

	const flavors = pack.flavors.map((fid) => PRODUCTS.find((p) => p.id === fid)).filter(Boolean);

	return (
		<div className="vpd-page">
			{/* Left — placeholder + callouts */}
			<div className="vpd-left" data-aos="fade-up" data-aos-delay="0">
				<div className="vpd-placeholder" />
				<div className="vpd-callouts">
					<div className="vpd-callout">
						<span className="vpd-callout-value">{pack.totalCans}</span>
						<span className="vpd-callout-label">Cans</span>
					</div>
					<div className="vpd-callout">
						<span className="vpd-callout-value">{flavors.length}</span>
						<span className="vpd-callout-label">Flavors</span>
					</div>
				</div>
			</div>

			{/* Right — info */}
			<div className="vpd-right">
				<Link to="/products" className="vpd-back-link" data-aos="fade-up" data-aos-delay="0">
					← Back
				</Link>

				<div className="vpd-header" data-aos="fade-up" data-aos-delay="100">
					<h1 className="vpd-name">{pack.name}</h1>
					<p className="vpd-subtitle">{pack.subtitle}</p>
					<div className="vpd-stars">
						{Array.from({ length: 5 }, (_, i) =>
							i < pack.rating ? (
								<FaStar key={i} className="vpd-star vpd-star-filled" />
							) : (
								<FaRegStar key={i} className="vpd-star" />
							),
						)}
					</div>
				</div>

				<Link to="/locations" className="btn btn-filled vpd-cta" data-aos="fade-up" data-aos-delay="200">
					<span className="btn-label">
						<span className="btn-label-top">Where to Buy</span>
						<span className="btn-label-bottom">Where to Buy</span>
					</span>
				</Link>

				<div className="vpd-tabs-section" data-aos="fade-up" data-aos-delay="300">
					<div className="vpd-tabs">
						{[{ id: "description", label: "Description" }, { id: "inside", label: "What's Inside" }].map((tab) => (
							<button
								key={tab.id}
								ref={(el) => (tabRefs.current[tab.id] = el)}
								className={`vpd-tab${activeTab === tab.id ? " vpd-tab-active" : ""}`}
								onClick={() => setActiveTab(tab.id)}
							>
								{tab.label}
							</button>
						))}
						<div className="vpd-tab-indicator" style={{ left: indicator.left, width: indicator.width }} />
					</div>

					<div className="vpd-tab-content" key={activeTab}>
						{activeTab === "description" && (
							<p className="vpd-description">{pack.description}</p>
						)}

						{activeTab === "inside" && (
							<div className="vpd-flavors-grid">
								{flavors.map((flavor, i) => (
									<Link
										key={flavor.id}
										to={`/products/${flavor.id}`}
										className="vpd-flavor-card"
										data-aos="fade-up"
										data-aos-delay={i * 80}
									>
										<img src={flavor.image} alt={flavor.name} className="vpd-flavor-can" />
										<div className="vpd-flavor-info">
											<span className="vpd-flavor-name">{flavor.name}</span>
											<span className="vpd-flavor-subtitle">{flavor.subtitle}</span>
										</div>
									</Link>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
