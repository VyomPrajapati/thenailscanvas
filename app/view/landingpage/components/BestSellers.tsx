import Reveal from "@/app/components/ui/Reveal";
import { Carousel, Card } from "./apple-cards-carousel";
import { bestSellerProducts } from "./data";
import { memo, useMemo } from "react";

const products = bestSellerProducts;

const BestSellers = memo(function BestSellers() {
  const cards = useMemo(() => products.slice(0, 6).map((p, index) => (
    <Card
      key={p.id}
      index={index}
      layout
      card={{
        src: p.img,
        title: p.name,
        category: p.note,
        content: (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {p.colors.map((c, i) => (
                <span key={i} className="h-3 w-3 rounded-full border border-black/20 dark:border-white/20" style={{ backgroundColor: c }} />
              ))}
            </div>
            <span className="text-sm font-medium">${p.price}</span>
          </div>
        ),
      }}
    />
  )), []);

  return (
    <section id="bestsellers" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Best Sellers</h2>
        <a href="#collections" className="text-sm underline">View All</a>
      </div>
      <div className="mt-4">
        <Reveal>
          <Carousel items={cards} />
        </Reveal>
      </div>
    </section>
  );
});

export default BestSellers;


