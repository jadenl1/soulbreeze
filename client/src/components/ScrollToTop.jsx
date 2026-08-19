import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

export default function ScrollToTop() {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
		setTimeout(() => AOS.refreshHard(), 50);
	}, [pathname]);
	return null;
}
