import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";
import logo from "../assets/soulbreeze-logo-light.png";
import "../styles/Navbar.css";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);

	return (
		<nav className="navbar">
			<div className="navbar-left">
				<NavLink to="/" end onClick={close} className="navbar-logo-link">
					<img src={logo} alt="Soulbreeze" className="navbar-logo" />
				</NavLink>
				<div className="navbar-links">
					<NavLink to="/" end className="navbar-link">
						HOME
					</NavLink>
					<NavLink to="/products" className="navbar-link">
						OUR LINEUP
					</NavLink>
					<NavLink to="/locations" className="navbar-link">
						LOCATIONS
					</NavLink>
				</div>
			</div>
			<div className="navbar-right">
				<NavLink to="/contact" className="navbar-link navbar-link-contact">
					CONTACT US
				</NavLink>
			</div>

			<button
				type="button"
				className="navbar-toggle"
				aria-label={open ? "Close menu" : "Open menu"}
				aria-expanded={open}
				onClick={() => setOpen((v) => !v)}
			>
				{open ? <FaXmark /> : <FaBars />}
			</button>

			<div
				className={`navbar-overlay${open ? " navbar-overlay-open" : ""}`}
				onClick={close}
				aria-hidden="true"
			/>

			<div className={`navbar-mobile-menu${open ? " navbar-mobile-menu-open" : ""}`}>
				<NavLink to="/" end onClick={close} className="navbar-mobile-link">
					HOME
				</NavLink>
				<NavLink to="/products" onClick={close} className="navbar-mobile-link">
					OUR LINEUP
				</NavLink>
				<NavLink to="/locations" onClick={close} className="navbar-mobile-link">
					LOCATIONS
				</NavLink>
				<NavLink to="/contact" onClick={close} className="navbar-mobile-link">
					CONTACT US
				</NavLink>
			</div>
		</nav>
	);
}
