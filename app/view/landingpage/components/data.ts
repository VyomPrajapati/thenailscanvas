// Centralized data to avoid recreating arrays on every render and enable code-splitting
export const productItems = [
  { name: "Classic French Reusable Gel", price: 129, img: "/nails/nail1.jpeg" },
  { name: "Satin Nude Reusable Gel", price: 119, img: "/nails/nail2.jpeg" },
  { name: "Emerald Press Gel", price: 139, img: "/nails/nail3.jpeg" },
  { name: "Blush Ombre Gel", price: 129, img: "/nails/nail4.jpg" },
  { name: "Pearl Glaze Gel", price: 119, img: "/nails/nail5.jpg" },
  { name: "Teal Gloss Gel", price: 129, img: "/nails/nail6.jpg" },
] as const;

export const categoryCards = [
  { id: 1, title: "Formal Nails", className: "md:col-span-2", thumbnail: "/nails/close-up-beauty-nail-art.jpg" },
  { id: 2, title: "Casual Style", className: "", thumbnail: "/nails/beautiful-nail-art-presentation.jpg" },
  { id: 3, title: "Formal Men", className: "", thumbnail: "/nails/people-choosing-nails-high-angle.jpg" },
  { id: 4, title: "Cozy Casual", className: "md:col-span-2", thumbnail: "/nails/nail-care-items-arrangement-view.jpg" },
] as const;

export const bestSellerProducts = [
  {
    id: "tailored-stretch",
    name: "Tailored Stretch",
    note: "Turn it up French",
    price: 180,
    img: "/nails/nail1.jpeg",
    colors: ["#d9c7b8", "#0a0a0a", "#c9d2c3"],
  },
  {
    id: "technical-silk",
    name: "Technical Silk",
    note: "Mélos & Sableh",
    price: 120,
    img: "/nails/nail2.jpeg",
    colors: ["#658b67", "#e7e1d8", "#222222"],
  },
  {
    id: "cool-weave",
    name: "Cool Weave",
    note: "Anywhere Dress",
    price: 220,
    img: "/nails/nail3.jpeg",
    colors: ["#111111", "#e1e1e1", "#8fb094"],
  },
  {
    id: "ombre-kiss",
    name: "Ombre Kiss",
    note: "Soft gradient set",
    price: 129,
    img: "/nails/nail4.jpg",
    colors: ["#f5cdd1", "#ffffff", "#c7dde4"],
  },
  {
    id: "pearl-glaze",
    name: "Pearl Glaze",
    note: "Shimmer finish",
    price: 119,
    img: "/nails/nail5.jpg",
    colors: ["#e6e6e6", "#d4c4c4", "#000000"],
  },
  {
    id: "teal-gloss",
    name: "Teal Gloss",
    note: "High-shine teal",
    price: 129,
    img: "/nails/nail6.jpg",
    colors: ["#0ea5a3", "#e1f5f4", "#083434"],
  },
] as const;


