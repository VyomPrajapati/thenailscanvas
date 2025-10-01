import ProductCard from "./ProductCard";
import { shopProducts } from "../data";

export default function Grid({
  selectedCategories,
  maxPrice,
  selectedSizes,
}: {
  selectedCategories: string[];
  maxPrice: number;
  selectedSizes: string[];
}) {
  const filtered = shopProducts.filter((p) => {
    const inCategory =
      selectedCategories.length === 0 || selectedCategories.includes(p.category);
    const inPrice = p.price <= maxPrice;
    const inSize =
      selectedSizes.length === 0 || selectedSizes.includes(p.size);
    return inCategory && inPrice && inSize;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((p, i) => (
        <ProductCard key={i} name={p.name} price={p.price} img={p.img} />
      ))}
      {filtered.length === 0 && (
        <div className="col-span-full rounded-xl bg-white/70 ring-1 ring-black/10 p-6 text-center text-sm">
          No products match your filters.
        </div>
      )}
    </div>
  );
}


