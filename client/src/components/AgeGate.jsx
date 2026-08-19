import { useState } from "react";
import logo from "../assets/soulbreeze-logo-light.png";
import agaveBlue from "../assets/agave-blue-transparent.png";
import "../styles/AgeGate.css";

export default function AgeGate({ onVerified }) {
	const [denied, setDenied] = useState(false);

	return (
		<div className="ag-overlay">
			<div className="ag-bg" style={{ backgroundImage: `url(${agaveBlue})` }} />
			<div className="ag-content">
				<img src={logo} alt="Soulbreeze" className="ag-logo" />

				{denied ? (
					<>
						<h1 className="ag-heading">That's Too Bad.</h1>
						<p className="ag-subtext">
							You must be 21 or older to enter this website.
						</p>
					</>
				) : (
					<>
						<div className="ag-label-row">
							<span className="ag-rule" />
							<span className="ag-label">Age Verification</span>
							<span className="ag-rule" />
						</div>
						<h1 className="ag-heading">Are You Over 21?</h1>
						<p className="ag-subtext">
							You must be over the age of 21 to enter this website.
						</p>
						<div className="ag-buttons">
							<button
								className="btn btn-outline-bordered ag-btn-no"
								onClick={() => setDenied(true)}
							>
								<span className="btn-label">
									<span className="btn-label-top">No</span>
									<span className="btn-label-bottom">No</span>
								</span>
							</button>
							<button
								className="btn btn-filled ag-btn-yes"
								onClick={onVerified}
							>
								<span className="btn-label">
									<span className="btn-label-top">Yes, I'm 21+</span>
									<span className="btn-label-bottom">Yes, I'm 21+</span>
								</span>
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
