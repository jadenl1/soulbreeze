import canBlue from "../assets/cans/can-blue.webp";
import canPeach from "../assets/cans/can-peach.webp";
import canRaspberry from "../assets/cans/can-raspberry.webp";
import canYellow from "../assets/cans/can-yellow.webp";
import varietyBox from "../assets/packs/variety-box.png";

export const VARIETY_PACKS = [
  {
    id: "1",
    name: "Ice Tea Pack",
    image: varietyBox,
    subtitle: "Four refreshing flavors. One refreshingly different way to enjoy tequila.",
    flavors: ["1", "2", "3", "4"],
    flavorLabels: ["Classic Tea", "Peach Tea", "Raspberry Tea", "Half & Half"],
    description: "From Classic Tea to Half & Half, experience the full SoulBreeze lineup in one pack.",
    totalCans: 8,
    rating: 5,
  },
];

const SIZES = ["12 oz Can"];
const PACKS = ["4-Pack"];

// Every value below is transcribed from the TTB nutrition panels
// (FN16528–FN16531). Rows mirror the printed label's order and indentation so
// the two can be checked against each other line by line.
const BASE_ROWS = [
  { label: "Total Fat", value: "0g", dv: "0%" },
  { label: "Saturated Fat", value: "0g", dv: "0%", indent: 1 },
  { label: "Trans Fat", value: "0g", indent: 1, italic: true },
  { label: "Cholesterol", value: "0mg", dv: "0%" },
  { label: "Sodium", value: "45mg", dv: "2%" },
];

const AFTER_CARB_ROWS = [
  { label: "Dietary Fiber", value: "0g", dv: "0%", indent: 1 },
  { label: "Total Sugars", value: "0g", indent: 1 },
  { label: "Includes 0g Added Sugars", dv: "0%", indent: 2 },
  { label: "Protein", value: "0g" },
];

function nutrition({ calories, carbs, carbsDv }) {
  return {
    servingSize: "355mL",
    servingsPerContainer: "About 1",
    calories,
    alcohol: "4.5% ABV",
    rows: [
      ...BASE_ROWS,
      { label: "Total Carbohydrate", value: carbs, dv: carbsDv },
      ...AFTER_CARB_ROWS,
    ],
  };
}

// Identical across Classic Tea, Peach and Raspberry.
const TEA_INGREDIENTS =
  "RO Water, Tequila, Brewed Black Tea Extract, Natural Flavors, Citric Acid, " +
  "Potassium Sorbate, Sodium Benzoate, Sea Salt, Sucralose.";

export const PRODUCTS = [
  {
    id: "1",
    name: "Classic Tea",
    subtitle: "Brewed Tea",
    image: canBlue,
    rating: 5,
    description:
      "The one that started it all. Brewed black tea and tequila come together for a clean, crisp, easy-drinking take on a classic iced tea.",
    highlights: [
      { icon: "tequila", label: "PREMIUM TEQUILA" },
      { icon: "caffeine", label: "CAFFEINE FREE" },
      { icon: "bubbles", label: "NO BUBBLES" },
      { icon: "carbs", label: "<1g CARBS" },
    ],
    callouts: [
      { value: "4.5%", label: "ABV" },
      { value: "70", label: "Cal" },
      { value: "0g", label: "Sugar" },
    ],
    nutrition: nutrition({ calories: 70, carbs: "<1g", carbsDv: "0%" }),
    ingredients: TEA_INGREDIENTS,
    sizes: SIZES,
    packs: PACKS,
  },
  {
    id: "2",
    name: "Peach Tea",
    subtitle: "Brewed Tea · Peach",
    image: canPeach,
    rating: 5,
    description:
      "Our take on a classic peach tea. Brewed black tea with peach flavor for a smooth, easy-drinking finish.",
    highlights: [
      { icon: "tequila", label: "PREMIUM TEQUILA" },
      { icon: "caffeine", label: "CAFFEINE FREE" },
      { icon: "bubbles", label: "NO BUBBLES" },
      { icon: "carbs", label: "<1g CARBS" },
    ],
    callouts: [
      { value: "4.5%", label: "ABV" },
      { value: "80", label: "Cal" },
      { value: "0g", label: "Sugar" },
    ],
    nutrition: nutrition({ calories: 80, carbs: "<1g", carbsDv: "0%" }),
    ingredients: TEA_INGREDIENTS,
    sizes: SIZES,
    packs: PACKS,
  },
  {
    id: "3",
    name: "Raspberry Tea",
    subtitle: "Brewed Tea · Raspberry",
    image: canRaspberry,
    rating: 5,
    description:
      "Raspberry done right. Brewed black tea with bright raspberry flavor for a smooth, refreshing take on raspberry iced tea.",
    highlights: [
      { icon: "tequila", label: "PREMIUM TEQUILA" },
      { icon: "caffeine", label: "CAFFEINE FREE" },
      { icon: "bubbles", label: "NO BUBBLES" },
      { icon: "carbs", label: "<1g CARBS" },
    ],
    callouts: [
      { value: "4.5%", label: "ABV" },
      { value: "70", label: "Cal" },
      { value: "0g", label: "Sugar" },
    ],
    nutrition: nutrition({ calories: 70, carbs: "<1g", carbsDv: "0%" }),
    ingredients: TEA_INGREDIENTS,
    sizes: SIZES,
    packs: PACKS,
  },
  {
    id: "4",
    name: "Half & Half",
    subtitle: "Brewed Tea · Lemonade",
    image: canYellow,
    rating: 5,
    description:
      "Tea with a little more lemonade. Brewed black tea and lemon come together for a crisp, refreshing take on the classic half & half.",
    highlights: [
      { icon: "tequila", label: "PREMIUM TEQUILA" },
      { icon: "caffeine", label: "CAFFEINE FREE" },
      { icon: "bubbles", label: "NO BUBBLES" },
      { icon: "carbs", label: "2g CARBS" },
    ],
    callouts: [
      { value: "4.5%", label: "ABV" },
      { value: "80", label: "Cal" },
      { value: "0g", label: "Sugar" },
    ],
    nutrition: nutrition({ calories: 80, carbs: "2g", carbsDv: "1%" }),
    ingredients:
      "RO Water, Tequila, Lemon Juice Concentrate, Brewed Black Tea Extract, Citric Acid, " +
      "Natural Flavors, Potassium Sorbate, Sodium Benzoate, Sea Salt, Sucralose.",
    sizes: SIZES,
    packs: PACKS,
  },
];
