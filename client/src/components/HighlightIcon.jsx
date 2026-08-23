import { TbCircles, TbCoffeeOff, TbWheat } from "react-icons/tb";

// All three come from Tabler so the stroke weight matches. TbCircles stands
// in for carbonation: the literal bubble glyphs elsewhere are either speech
// bubbles or solid shapes that clash with these outlines.
const ICONS = {
	caffeine: TbCoffeeOff,
	bubbles: TbCircles,
	carbs: TbWheat,
};

export default function HighlightIcon({ name }) {
	const Icon = ICONS[name];
	return Icon ? <Icon aria-hidden="true" /> : null;
}
