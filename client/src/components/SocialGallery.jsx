import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function useIsMobile() {
	const query = "(max-width: 768px)";
	const [isMobile, setIsMobile] = useState(
		() => typeof window !== "undefined" && window.matchMedia(query).matches,
	);
	useEffect(() => {
		if (typeof window === "undefined" || !window.matchMedia) return;
		const mq = window.matchMedia(query);
		const handler = (e) => setIsMobile(e.matches);
		// addEventListener on MediaQueryList is unsupported on older iOS Safari
		if (mq.addEventListener) mq.addEventListener("change", handler);
		else if (mq.addListener) mq.addListener(handler);
		return () => {
			if (mq.removeEventListener) mq.removeEventListener("change", handler);
			else if (mq.removeListener) mq.removeListener(handler);
		};
	}, []);
	return isMobile;
}
import photo1 from "../assets/gallery-photos/1.webp";
import photo2 from "../assets/gallery-photos/2.webp";
import photo3 from "../assets/gallery-photos/3.webp";
import photo4 from "../assets/gallery-photos/4.webp";
import photo5 from "../assets/gallery-photos/5.webp";
import photo6 from "../assets/gallery-photos/6.webp";
import photo7 from "../assets/gallery-photos/7.webp";
import photo8 from "../assets/gallery-photos/8.webp";

const photos = [
	{
		img: photo1,
		caption: "Friday nights taste better with a Soulbreeze in hand 🌊",
	},
	{
		img: photo2,
		caption: "Peach season, but make it breezy.",
	},
	{
		img: photo3,
		caption: "Cheers to the weekend, every weekend.",
	},
	{
		img: photo4,
		caption: "Raspberry + sunshine = the only combo I need.",
	},
	{
		img: photo5,
		caption: "Soaking up the last of summer 🍋",
	},
	{
		img: photo6,
		caption: "Pour one for the crew 🍹",
	},
	{
		img: photo7,
		caption: "Tequila o'clock somewhere.",
	},
	{
		img: photo8,
		caption: "Caught the breeze and didn't let go.",
	},
];

export default function SocialGallery() {
	const isMobile = useIsMobile();
	return isMobile ? <MobileCarousel /> : <DesktopGallery />;
}

/* Mobile — peek carousel, cycling through all eight photos in order. */
function MobileCarousel() {
	const FIRST = 0;
	const LAST = photos.length - 1;
	const [activeIndex, setActiveIndex] = useState(FIRST);

	useEffect(() => {
		const timer = setTimeout(() => {
			setActiveIndex((i) => (i >= LAST ? FIRST : i + 1));
		}, 3500);
		return () => clearTimeout(timer);
	}, [activeIndex, LAST]);

	return (
		<section className="social-gallery social-gallery-mobile">
			<div className="social-gallery-row" style={{ "--active": activeIndex }}>
				{photos.map((photo, index) => {
					const isActive = index === activeIndex;
					return (
						<div
							key={photo.img}
							className={`social-photo${isActive ? " social-photo-active" : ""}`}
						>
							<img
								src={photo.img}
								alt={photo.caption}
								className="social-photo-img"
								loading="lazy"
								decoding="async"
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
}

/* Desktop — click-to-expand gallery */
function DesktopGallery() {
	const [activeIndex, setActiveIndex] = useState(2);

	useEffect(() => {
		const timer = setTimeout(() => {
			setActiveIndex((i) => (i + 1) % photos.length);
		}, 6000);
		return () => clearTimeout(timer);
	}, [activeIndex]);

	const goPrev = () => {
		setActiveIndex((i) => (i - 1 + photos.length) % photos.length);
	};

	const goNext = () => {
		setActiveIndex((i) => (i + 1) % photos.length);
	};

	return (
		<section className="social-gallery">
			<div className="social-gallery-row">
				{photos.map((photo, index) => {
					const isActive = index === activeIndex;
					return (
						<div
							key={photo.img}
							className={`social-photo${isActive ? " social-photo-active" : ""}`}
							onClick={() => setActiveIndex(index)}
						>
							<img
								src={photo.img}
								alt={photo.caption}
								className="social-photo-img"
								loading="lazy"
								decoding="async"
							/>
						</div>
					);
				})}
			</div>
			<div className="social-gallery-controls">
				<button
					type="button"
					className="social-gallery-arrow"
					aria-label="Previous photo"
					onClick={goPrev}
				>
					<FaChevronLeft />
				</button>
				<button
					type="button"
					className="social-gallery-arrow"
					aria-label="Next photo"
					onClick={goNext}
				>
					<FaChevronRight />
				</button>
			</div>
		</section>
	);
}
