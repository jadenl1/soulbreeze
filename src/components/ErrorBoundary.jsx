import { Component } from "react";

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { error: null };
	}

	static getDerivedStateFromError(error) {
		return { error };
	}

	render() {
		if (this.state.error) {
			return (
				<div
					style={{
						padding: "80px 24px",
						fontFamily: "monospace",
						color: "#002b51",
						background: "#f8f5e8",
						minHeight: "100vh",
						whiteSpace: "pre-wrap",
						wordBreak: "break-word",
					}}
				>
					<h1 style={{ fontSize: 20, marginBottom: 16 }}>Something broke.</h1>
					<p style={{ fontSize: 13, lineHeight: 1.6 }}>
						{String(this.state.error?.message || this.state.error)}
					</p>
				</div>
			);
		}
		return this.props.children;
	}
}
