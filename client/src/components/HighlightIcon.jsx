import { TbCoffeeOff, TbWheat } from "react-icons/tb";

// No icon set has "still, not carbonated" — the near misses all read wrong
// (a slashed beer glass says non-alcoholic). Drawn to Tabler's conventions
// so it sits beside TbCoffeeOff and TbWheat without looking borrowed:
// 24px box, 2px round strokes, no fill.
function BubblesOff(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			width="1em"
			height="1em"
			{...props}
		>
			<circle cx="8.5" cy="14.5" r="3.5" />
			<circle cx="16" cy="9" r="2.5" />
			<circle cx="16.5" cy="17" r="1.75" />
			<path d="M3 21 21 3" />
		</svg>
	);
}

const ICONS = {
	caffeine: TbCoffeeOff,
	bubbles: BubblesOff,
	carbs: TbWheat,
};

export default function HighlightIcon({ name }) {
	const Icon = ICONS[name];
	return Icon ? <Icon aria-hidden="true" /> : null;
}
