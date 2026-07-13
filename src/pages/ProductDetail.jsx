import { useState, useRef, useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa6";
import can from "../assets/can-transparent.png";
import { PRODUCTS, VARIETY_PACKS } from "../data/products";
import "../styles/ProductDetail.css";

export default function ProductDetail() {
	const { id } = useParams();
	const [activeTab, setActiveTab] = useState("description");
	const tabRefs = useRef({});
	const [indicator, setIndicator] = useState({ left: 0, width: 0 });
	const product = PRODUCTS.find((p) => p.id === id);

	useLayoutEffect(() => {
		const el = tabRefs.current[activeTab];
		if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
	}, [activeTab, product?.id]);

	if (!product) {
		return (
			<div className="pd-not-found">
				<h2>Flavor not found.</h2>
				<Link to="/products">Back to the lineup</Link>
			</div>
		);
	}

	// const { nutrition } = product;
	const includedIn = VARIETY_PACKS.filter((vp) => vp.flavors.includes(product.id));

	const tabs = [
		{ id: "description", label: "Description" },
		// { id: "nutrition", label: "Nutrition Facts" },
		// { id: "ingredients", label: "Ingredients" },
		{ id: "sizes", label: "Sizes & Packs" },
		...(includedIn.length > 0 ? [{ id: "variety", label: "Variety Packs" }] : []),
	];

	return (
		<div className="pd-page">
			{/* Can */}
			<div className="pd-left" data-aos="fade-up" data-aos-delay="0">
				<img src={can} alt={product.name} className="pd-can-img" />
				<div className="pd-callouts">
					{product.callouts.map((c, i) => (
						<div key={i} className="pd-callout">
							<span className="pd-callout-value">{c.value}</span>
							<span className="pd-callout-label">{c.label}</span>
						</div>
					))}
				</div>
			</div>

			{/* Info */}
			<div className="pd-right">
				<Link to="/products" className="pd-back-link" data-aos="fade-up" data-aos-delay="0">
					← Back
				</Link>

				<div className="pd-header" data-aos="fade-up" data-aos-delay="100">
					<h1 className="pd-name">{product.name}</h1>
					<p className="pd-subtitle">{product.subtitle}</p>
					<div className="pd-stars">
						{Array.from({ length: 5 }, (_, i) =>
							i < product.rating ? (
								<FaStar key={i} className="pd-star pd-star-filled" />
							) : (
								<FaRegStar key={i} className="pd-star" />
							),
						)}
					</div>
				</div>

				<Link to="/locations" className="btn btn-filled pd-cta" data-aos="fade-up" data-aos-delay="200">
					<span className="btn-label">
						<span className="btn-label-top">Where to Buy</span>
						<span className="btn-label-bottom">Where to Buy</span>
					</span>
				</Link>

				<div className="pd-tabs-section" data-aos="fade-up" data-aos-delay="300">
					<div className="pd-tabs">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								ref={(el) => (tabRefs.current[tab.id] = el)}
								className={`pd-tab${activeTab === tab.id ? " pd-tab-active" : ""}`}
								onClick={() => setActiveTab(tab.id)}
							>
								{tab.label}
							</button>
						))}
						<div className="pd-tab-indicator" style={{ left: indicator.left, width: indicator.width }} />
					</div>

					<div className="pd-tab-content" key={activeTab}>
						{activeTab === "description" && (
							<p className="pd-description">{product.description}</p>
						)}

						{/* {activeTab === "nutrition" && (
							<div className="pd-nutrition-grid">
								<div className="pd-nutrition-row pd-nutrition-calories">
									<span>Calories</span><span className="pd-nutrition-cal-num">{nutrition.calories}</span>
								</div>
								<div className="pd-nutrition-row">
									<span>Total Fat</span><span>{nutrition.totalFat}</span>
								</div>
								<div className="pd-nutrition-row">
									<span>Sodium</span><span>{nutrition.sodium}</span>
								</div>
								<div className="pd-nutrition-row">
									<span>Total Carbs</span><span>{nutrition.totalCarbs}</span>
								</div>
								<div className="pd-nutrition-row pd-nutrition-indent">
									<span>Total Sugars</span><span>{nutrition.totalSugars}</span>
								</div>
								<div className="pd-nutrition-row pd-nutrition-indent">
									<span>Added Sugars</span><span>{nutrition.addedSugars}</span>
								</div>
								<div className="pd-nutrition-row">
									<span>Protein</span><span>{nutrition.protein}</span>
								</div>
								<div className="pd-nutrition-row">
									<span>Alcohol By Volume</span><span>{nutrition.alcohol}</span>
								</div>
								<p className="pd-serving">Per {nutrition.servingSize}</p>
							</div>
						)} */}

						{/* {activeTab === "ingredients" && (
							<p className="pd-text">{product.ingredients}</p>
						)} */}

						{activeTab === "sizes" && (
							<div className="pd-sizes">
								<div className="pd-sizes-group">
									<span className="pd-sizes-label">Sizes</span>
									<div className="pd-tags">
										{product.sizes.map((s) => <span key={s} className="pd-tag">{s}</span>)}
									</div>
								</div>
								<div className="pd-sizes-group">
									<span className="pd-sizes-label">Packs</span>
									<div className="pd-tags">
										{product.packs.map((p) => <span key={p} className="pd-tag">{p}</span>)}
									</div>
								</div>
							</div>
						)}

						{activeTab === "variety" && (
							<div className="pd-variety-grid">
								{includedIn.map((vp) => (
									<Link key={vp.id} to={`/products/variety/${vp.id}`} className="pd-variety-card">
										<div className="pd-variety-pack-thumb" />
										<div className="pd-variety-info">
											<span className="pd-variety-name">{vp.name}</span>
											<span className="pd-variety-flavors">
												{vp.flavors.map((fid) => PRODUCTS.find((p) => p.id === fid)?.name).join(" · ")}
											</span>
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
