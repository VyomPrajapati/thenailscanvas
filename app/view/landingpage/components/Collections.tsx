"use client";
import Image from "next/image";
import MagicBento from "./magicbento";
import { ROUTES } from "../../routes";
import { useRouter } from "next/navigation";
import { memo, useCallback } from "react";

const Collections = memo(function Collections() {
  const router = useRouter();

  const handleShopAll = useCallback(() => {
    router.push(ROUTES.shop);
  }, [router]);

  return (
    <section id="collections" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Get Luxe • Press-ons • Kits</h2>
            <button onClick={handleShopAll} className="text-sm hover-underline">Shop all</button>
      </div>
      <MagicBento
        textAutoHide
        enableStars={false}
        enableSpotlight={false}
        enableBorderGlow={false}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={false}
        spotlightRadius={120}
        particleCount={4}
        glowColor="0, 0, 0"
      >
        <div className="relative overflow-hidden rounded-2xl group h-[380px] md:h-[420px]">
          <Image
            src="/nails/close-up-beauty-nail-art.jpg"
            alt="Close up of gel nails"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-102"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-teal-500/0 transition-colors duration-200 group-hover:bg-teal-500/35" />
          <a href="#" className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 text-xs rounded-full shadow">
            Gel Luxe
          </a>
        </div>
        <div className="relative overflow-hidden rounded-2xl group h-[260px] md:h-[300px]">
          <Image
            src="/nails/people-choosing-nails-high-angle.jpg"
            alt="Choosing nails"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-102"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-teal-500/0 transition-colors duration-200 group-hover:bg-teal-500/35" />
          <a href="#" className="absolute bottom-3 left-3 bg-black text-white px-3 py-1 text-xs rounded-full shadow">
            Press-ons
          </a>
        </div>
        <div className="relative overflow-hidden rounded-2xl group h-[260px] md:h-[300px]">
          <Image
            src="/nails/nail-care-items-arrangement-view.jpg"
            alt="Care items"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-102"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-teal-500/0 transition-colors duration-200 group-hover:bg-teal-500/35" />
          <a href="#" className="absolute bottom-3 left-3 bg-black text-white px-3 py-1 text-xs rounded-full shadow">
            Kits
          </a>
        </div>
        <div className="relative overflow-hidden rounded-2xl group h-[260px] md:h-[300px]">
          <Image
            src="/nails/close-up-beauty-nail-art.jpg"
            alt="Gel luxe hands"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-102"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-teal-500/0 transition-colors duration-200 group-hover:bg-teal-500/35" />
          <a href="#" className="absolute bottom-3 left-3 bg-black text-white px-3 py-1 text-xs rounded-full shadow">
            New Arrivals
          </a>
        </div>
      </MagicBento>
    </section>
  );
});

export default Collections;


