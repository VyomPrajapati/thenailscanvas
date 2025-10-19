"use client";

import Image from "next/image";
import Reveal from "@/app/components/ui/Reveal";
import { CardContainer, CardBody, CardItem } from "./3d-card";
import { productItems } from "./data";
import { addToCart } from "../../cart/cart-utils";
import { ROUTES } from "../../routes";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";

const ProductShowcase = memo(function ProductShowcase() {
  const router = useRouter();

  const handleBuyNow = useCallback((p: { name: string; price: number; img: string }) => {
    addToCart({ name: p.name, price: p.price, img: p.img, qty: 1 });
    router.push(ROUTES.checkout);
  }, [router]);

  const handleSeeMore = useCallback(() => {
    router.push(ROUTES.shop);
  }, [router]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center">Our Products — Buy Now</h2>
      <p className="text-center text-sm mt-2">Reusable gel nails designed to reapply in minutes—no damage, salon results.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productItems.map((p, idx) => (
          <Reveal key={p.name} delayMs={idx * 70}>
            <CardContainer className="inter-var w-full" containerClassName="py-2">
              <CardBody className="relative group/card bg-black text-white border-white/20 w-full h-auto rounded-xl p-5 sm:p-6 border">
                <CardItem translateZ={40} className="text-lg font-semibold">
                  {p.name}
                </CardItem>
                <CardItem as="p" translateZ={20} className="text-white/70 text-xs sm:text-sm mt-1">
                  Reusable gel set. Salon finish. Reapply in minutes.
                </CardItem>
                <CardItem translateZ={60} className="w-full mt-3 overflow-hidden rounded-xl">
                  <Image 
                    src={p.img} 
                    alt={p.name} 
                    width={800} 
                    height={800} 
                    className="aspect-[3/4] w-full object-cover group-hover/card:shadow-xl" 
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </CardItem>
                <div className="flex items-center justify-between mt-6">
                  <CardItem translateZ={20} as="span" className="text-sm font-medium">
                    ₹{p.price}
                  </CardItem>
                  <CardItem translateZ={20} as="button" onClick={() => handleBuyNow(p)} className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold inline-block cursor-pointer">Buy Now</CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </Reveal>
        ))}
      </div>
          <div className="mt-6 text-center">
            <button onClick={handleSeeMore} className="inline-block rounded border border-black px-4 py-2 text-sm text-black hover:bg-black hover:text-white transition-colors duration-300">See More</button>
      </div>
    </section>
  );
});

export default ProductShowcase;


