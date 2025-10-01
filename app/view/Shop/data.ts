export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
  size: 'Short' | 'Medium' | 'Long';
  description: string;
}

export const shopProducts: Product[] = [
  {
    id: 1,
    name: "Classic French Tips",
    price: 1299,
    img: "/nails/nail1.jpg",
    category: "French",
    size: "Medium",
    description: "Timeless French manicure with perfect white tips"
  },
  {
    id: 2,
    name: "Bold Red Glamour",
    price: 1199,
    img: "/nails/nail2.jpg",
    category: "Solid",
    size: "Long",
    description: "Classic red nails for any occasion"
  },
  {
    id: 3,
    name: "Nude Elegance",
    price: 1099,
    img: "/nails/nail3.jpg",
    category: "Nude",
    size: "Short",
    description: "Subtle nude shade for everyday wear"
  },
  {
    id: 4,
    name: "Sparkle Gold",
    price: 1499,
    img: "/nails/nail4.jpg",
    category: "Glitter",
    size: "Long",
    description: "Shimmering gold glitter for special events"
  },
  {
    id: 5,
    name: "Ocean Blue",
    price: 1299,
    img: "/nails/nail5.jpg",
    category: "Solid",
    size: "Medium",
    description: "Deep ocean blue for a bold statement"
  },
  {
    id: 6,
    name: "Rose Gold Dreams",
    price: 1399,
    img: "/nails/nail6.jpg",
    category: "Glitter",
    size: "Medium",
    description: "Elegant rose gold with subtle shimmer"
  },
  {
    id: 7,
    name: "Black Velvet",
    price: 1199,
    img: "/nails/nail7.jpg",
    category: "Solid",
    size: "Long",
    description: "Sophisticated black for evening wear"
  },
  {
    id: 8,
    name: "Pastel Pink",
    price: 1099,
    img: "/nails/nail8.jpg",
    category: "Pastel",
    size: "Short",
    description: "Soft pastel pink for a feminine look"
  },
  {
    id: 9,
    name: "Midnight Purple",
    price: 1299,
    img: "/nails/nail9.jpg",
    category: "Solid",
    size: "Medium",
    description: "Deep purple for a mysterious allure"
  }
];

export const categories = [
  "All",
  "French",
  "Solid", 
  "Nude",
  "Glitter",
  "Pastel"
];

export const sizes = [
  "Short",
  "Medium", 
  "Long"
];

export const priceRanges = {
  min: 0,
  max: 2000,
  step: 100
};
