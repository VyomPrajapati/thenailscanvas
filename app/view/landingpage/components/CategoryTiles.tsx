import { LayoutGrid } from "./layout-grid";
import { categoryCards } from "./data";

export default function CategoryTiles() {
  const cards = [
    { ...categoryCards[0], content: (
      <div className="text-white max-w-lg">
        <h3 className="!text-white text-2xl md:text-3xl font-semibold">Formal Nails</h3>
        <p className="!text-white text-base md:text-lg mt-2 opacity-95">Polished, minimal sets designed for events and office-ready looks.</p>
      </div>
    ) },
    { ...categoryCards[1], content: (
      <div className="text-white max-w-lg">
        <h3 className="!text-white text-2xl md:text-3xl font-semibold">Casual Style</h3>
        <p className="!text-white text-base md:text-lg mt-2 opacity-95">Everyday reusable gels—easy to apply and remove without damage.</p>
      </div>
    ) },
    { ...categoryCards[2], content: (
      <div className="text-white max-w-lg">
        <h3 className="!text-white text-2xl md:text-3xl font-semibold">Formal Men</h3>
        <p className="!text-white text-base md:text-lg mt-2 opacity-95">Subtle grooming tints and clear finishes crafted for men.</p>
      </div>
    ) },
    { ...categoryCards[3], content: (
      <div className="text-white max-w-lg">
        <h3 className="!text-white text-2xl md:text-3xl font-semibold">Cozy Casual</h3>
        <p className="!text-white text-base md:text-lg mt-2 opacity-95">Soft tones and comfy vibes—weekend-ready reusable sets.</p>
      </div>
    ) },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
      <LayoutGrid cards={cards} />
    </section>
  );
}


