import LocationsMap from "../components/LocationsMap";
import "../styles/Locations.css";

export default function Locations() {
	return (
		<>
			<section className="page-header">
				<div className="page-header-label-row" data-aos="fade-up" data-aos-delay="0">
					<span className="page-header-rule" />
					<span className="page-header-label">Where to Find Us</span>
					<span className="page-header-rule" />
				</div>
				<h1 className="page-header-heading" data-aos="fade-up" data-aos-delay="100">
					Feel the Breeze,
					<br />
					Wherever You Are.
				</h1>
				<div className="page-header-callouts" data-aos="fade-up" data-aos-delay="200">
					<span className="page-header-callout">Bars &amp; Restaurants</span>
					<span className="page-header-callout">Retailers</span>
					<span className="page-header-callout">Find One Near You</span>
				</div>
			</section>
			<div data-aos="fade-up" data-aos-delay="0">
				<LocationsMap />
			</div>
		</>
	);
}
