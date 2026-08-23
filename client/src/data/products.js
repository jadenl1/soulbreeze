import canBlue from "../assets/cans/can-blue.webp";
import canPeach from "../assets/cans/can-peach.webp";
import canRaspberry from "../assets/cans/can-raspberry.webp";
import canYellow from "../assets/cans/can-yellow.webp";

export const VARIETY_PACKS = [
  {
    id: "1",
    name: "Ice Tea Pack",
    subtitle: "Four refreshing flavors. One refreshingly different way to enjoy tequila.",
    flavors: ["1", "2", "3", "4"],
    flavorLabels: ["Original", "Peach Tea", "Raspberry Tea", "Half & Half"],
    description: "From Original to Half & Half, experience the full SoulBreeze lineup in one pack.",
    totalCans: 8,
    rating: 5,
  },
];

const SIZES = ["12 oz Can"];
const PACKS = ["4-Pack"];

export const PRODUCTS = [
  {
    id: "1",
    name: "Original",
    subtitle: "Brewed Tea",
    image: canBlue,
    rating: 5,
    description:
      "The sweet tea you know and love, reimagined with premium tequila. Smooth, refreshing, and made for wherever the day takes you.",
    callouts: [
      { value: "4.5%", label: "ABV" },
      { value: "70", label: "Cal" },
      { value: "0g", label: "Sugar" },
    ],
    nutrition: {
      servingSize: "12 fl oz (355mL)",
      calories: 70,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbs: "1g",
      totalSugars: "0g",
      addedSugars: "0g",
      protein: "0g",
      alcohol: "4.5% ABV",
    },
    ingredients:
      "Sparkling Water, Blue Agave Tequila (4.5%), Brewed Sweet Tea, Natural Lime Flavor, Citric Acid.",
    sizes: SIZES,
    packs: PACKS,
  },
  {
    id: "2",
    name: "Peach Tea",
    subtitle: "Brewed Tea · Peach",
    image: canPeach,
    rating: 4,
    description:
      "You love peach tea. We made it with premium tequila. Smooth, refreshing, and ready for every occasion.",
    callouts: [
      { value: "4.5%", label: "ABV" },
      { value: "80", label: "Cal" },
      { value: "0g", label: "Sugar" },
    ],
    nutrition: {
      servingSize: "12 fl oz (355mL)",
      calories: 80,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbs: "1g",
      totalSugars: "0g",
      addedSugars: "0g",
      protein: "0g",
      alcohol: "4.5% ABV",
    },
    ingredients:
      "Sparkling Water, Blue Agave Tequila (4.5%), Brewed White Tea, Natural Peach Flavor, Natural Honey Flavor, Citric Acid.",
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
      "Sweet raspberry tea meets premium tequila for a refreshingly different take on a classic favorite.",
    callouts: [
      { value: "4.5%", label: "ABV" },
      { value: "70", label: "Cal" },
      { value: "0g", label: "Sugar" },
    ],
    nutrition: {
      servingSize: "12 fl oz (355mL)",
      calories: 70,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbs: "1g",
      totalSugars: "0g",
      addedSugars: "0g",
      protein: "0g",
      alcohol: "4.5% ABV",
    },
    ingredients:
      "Sparkling Water, Blue Agave Tequila (4.5%), Brewed Hibiscus Tea, Natural Raspberry Flavor, Natural Citrus Flavor, Citric Acid.",
    sizes: SIZES,
    packs: PACKS,
  },
  {
    id: "4",
    name: "Half & Half",
    subtitle: "Brewed Tea · Lemonade",
    image: canYellow,
    rating: 4,
    description:
      "You already love lemonade and tea. We made it with premium tequila.",
    callouts: [
      { value: "4.5%", label: "ABV" },
      { value: "80", label: "Cal" },
      { value: "0g", label: "Sugar" },
    ],
    nutrition: {
      servingSize: "12 fl oz (355mL)",
      calories: 80,
      totalFat: "0g",
      sodium: "10mg",
      totalCarbs: "1g",
      totalSugars: "0g",
      addedSugars: "0g",
      protein: "0g",
      alcohol: "4.5% ABV",
    },
    ingredients:
      "Sparkling Water, Blue Agave Tequila (4.5%), Brewed Green Tea, Natural Mango Flavor, Natural Pineapple Flavor, Citric Acid.",
    sizes: SIZES,
    packs: PACKS,
  },
];
