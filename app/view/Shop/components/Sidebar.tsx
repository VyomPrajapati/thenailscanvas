"use client";

import { useState } from "react";
import { categories, sizes, priceRanges } from "../data";

export default function Sidebar() {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({
    category: true,
    price: true,
    size: true,
  });

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(priceRanges.max);

  if (typeof window !== 'undefined') {
    (window as any).__shopFilters = { selectedCategories, selectedSizes, price };
  }

  const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <div className="border-b border-black/10 py-5">
      <button
        className="flex w-full items-center justify-between text-base font-semibold"
        onClick={() => setOpen((s) => ({ ...s, [id]: !s[id] }))}
        aria-expanded={open[id]}
      >
        <span>{title}</span>
        <span className="text-sm">{open[id] ? "−" : "+"}</span>
      </button>
      <div className={`mt-4 space-y-3 text-sm ${open[id] ? "block" : "hidden"}`}>{children}</div>
    </div>
  );

  return (
    <aside className="rounded-2xl bg-white/90 supports-[backdrop-filter]:bg-white/70 backdrop-blur p-5 md:p-6 ring-1 ring-black/10 shadow-lg">
      <div className="text-xs uppercase tracking-widest text-black/70">Category</div>
      <Section id="category" title="Collections">
        {categories.filter(c => c !== "All").map((c)=> (
          <label key={c} className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-black/5 cursor-pointer select-none">
            <input
              type="checkbox"
              className="accent-black h-4 w-4"
              checked={selectedCategories.includes(c)}
              onChange={(e)=>
                setSelectedCategories((prev)=> e.target.checked ? [...prev, c] : prev.filter(x=>x!==c))
              }
            />
            {c}
          </label>
        ))}
      </Section>
      <Section id="price" title="Price">
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={priceRanges.min}
            max={priceRanges.max}
            step={priceRanges.step}
            value={price}
            onChange={(e)=> setPrice(parseInt(e.target.value))}
            className="w-full h-2"
          />
          <span className="text-sm font-semibold">₹{price.toLocaleString('en-IN')}</span>
        </div>
      </Section>
      <Section id="size" title="Size">
        <div className="flex flex-wrap gap-3">
          {sizes.map(s => (
            <button
              key={s}
              onClick={()=> setSelectedSizes((prev)=> prev.includes(s) ? prev.filter(x=>x!==s) : [...prev, s])}
              className={`rounded-lg border px-3 py-2 text-sm ${selectedSizes.includes(s) ? 'bg-black text-white border-black' : 'border-black/15 text-black hover-fade'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </Section>
    </aside>
  );
}


