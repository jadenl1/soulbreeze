import { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl/mapbox";
import { FaMagnifyingGlass, FaLocationCrosshairs, FaXmark } from "react-icons/fa6";
import "mapbox-gl/dist/mapbox-gl.css";
import logo from "../assets/soulbreeze-logo-light.png";
import "../styles/LocationsMap.css";

const locations = [
	{
		name: "Annapolis, MD",
		address: "110 Compromise St, Annapolis, MD 21401",
		lat: 38.9784,
		lng: -76.4922,
	},
	{
		name: "Philadelphia, PA",
		address: "1234 Market St, Philadelphia, PA 19107",
		lat: 39.9526,
		lng: -75.1652,
	},
	{
		name: "Hoboken, NJ",
		address: "88 River St, Hoboken, NJ 07030",
		lat: 40.744,
		lng: -74.0324,
	},
];

function getDistanceMiles(lat1, lng1, lat2, lng2) {
	const toRad = (deg) => (deg * Math.PI) / 180;
	const earthRadiusMiles = 3958.8;
	const dLat = toRad(lat2 - lat1);
	const dLng = toRad(lng2 - lng1);
	const a =
		Math.sin(dLat / 2) ** 2 +
		Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
	return earthRadiusMiles * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function LocationsMap() {
	const [search, setSearch] = useState("");
	const [selected, setSelected] = useState(null);
	const [userLocation, setUserLocation] = useState(null);
	const [viewState, setViewState] = useState({
		longitude: -75.2,
		latitude: 39.8,
		zoom: 6.2,
	});

	const locationsWithDistance = locations.map((loc) => ({
		...loc,
		distance: userLocation
			? getDistanceMiles(userLocation.lat, userLocation.lng, loc.lat, loc.lng)
			: null,
	}));

	if (userLocation) {
		locationsWithDistance.sort((a, b) => a.distance - b.distance);
	}

	const filteredLocations = locationsWithDistance.filter((loc) =>
		loc.name.toLowerCase().includes(search.toLowerCase())
	);

	const selectLocation = (loc) => {
		setSelected(loc);
		setViewState({ longitude: loc.lng, latitude: loc.lat, zoom: 9 });
	};

	const requestUserLocation = () => {
		if (!navigator.geolocation) return;
		navigator.geolocation.getCurrentPosition((position) => {
			const coords = {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			};
			setUserLocation(coords);

			const closest = locations.reduce((closestLoc, loc) => {
				const dist = getDistanceMiles(coords.lat, coords.lng, loc.lat, loc.lng);
				return dist < closestLoc.dist ? { loc, dist } : closestLoc;
			}, { loc: locations[0], dist: Infinity });

			selectLocation(closest.loc);
		});
	};

	return (
		<div className="locations-map-card">
			<div className="locations-sidebar">
				<div className="locations-search-wrap">
					<FaMagnifyingGlass className="locations-search-icon" />
					<input
						type="text"
						className="locations-search"
						placeholder="Search locations..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					{search && (
						<button
							type="button"
							className="locations-search-clear"
							aria-label="Clear search"
							onClick={() => setSearch("")}
						>
							<FaXmark />
						</button>
					)}
				</div>
				<button
					type="button"
					className="locations-locate-btn"
					onClick={requestUserLocation}
				>
					<FaLocationCrosshairs />
					Use My Location
				</button>
				<div className="locations-list">
					{filteredLocations.length === 0 && (
						<p className="locations-no-results">No locations found.</p>
					)}
					{filteredLocations.map((loc) => (
						<button
							type="button"
							key={loc.name}
							className={`locations-list-item${
								selected?.name === loc.name ? " locations-list-item-active" : ""
							}`}
							onClick={() => selectLocation(loc)}
						>
							<span className="locations-list-name-row">
								<span className="locations-list-name">{loc.name}</span>
								{loc.distance !== null && (
									<span className="locations-list-distance">
										{loc.distance.toFixed(1)} mi
									</span>
								)}
							</span>
							<span className="locations-list-address">{loc.address}</span>
						</button>
					))}
				</div>
			</div>
			<div className="locations-map-wrap">
				<Map
					{...viewState}
					mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
					onMove={(evt) => setViewState(evt.viewState)}
					mapStyle="mapbox://styles/mapbox/streets-v12"
					style={{ width: "100%", height: "100%" }}
				>
					{locations.map((loc) => (
						<Marker
							key={loc.name}
							longitude={loc.lng}
							latitude={loc.lat}
							anchor="bottom"
							onClick={(e) => {
								e.originalEvent.stopPropagation();
								selectLocation(loc);
							}}
						>
							<div className="map-pin">
								<img src={logo} alt={loc.name} className="map-pin-logo" />
							</div>
						</Marker>
					))}
					{userLocation && (
						<Marker
							longitude={userLocation.lng}
							latitude={userLocation.lat}
							anchor="center"
						>
							<div className="map-user-pin">
								<div className="map-user-pin-pulse" />
							</div>
						</Marker>
					)}
					{selected && (
						<Popup
							longitude={selected.lng}
							latitude={selected.lat}
							anchor="top"
							offset={14}
							onClose={() => setSelected(null)}
							closeOnClick={false}
						>
							<div className="map-popup">
								<div className="map-popup-header">
									<span className="map-popup-name">{selected.name}</span>
									{userLocation && (
										<span className="map-popup-distance">
											{getDistanceMiles(
												userLocation.lat,
												userLocation.lng,
												selected.lat,
												selected.lng
											).toFixed(1)}{" "}
											mi
										</span>
									)}
								</div>
								<span className="map-popup-address">{selected.address}</span>
								<a
									className="map-popup-directions"
									href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
										selected.address
									)}`}
									target="_blank"
									rel="noreferrer"
								>
									Get Directions
								</a>
							</div>
						</Popup>
					)}
				</Map>
			</div>
		</div>
	);
}
