"use client";

import { useEffect, useState } from "react";
import { ROUTES } from "../../routes";
import { useRouter } from "next/navigation";

export default function MiniCart() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [lastItem, setLastItem] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const onAdded = (e: Event) => {
      const customEvent = e as CustomEvent<{ item?: { name?: string } }>;
      setLastItem({ name: customEvent?.detail?.item?.name || "Product" });
      setOpen(true);
      const id = setTimeout(() => setOpen(false), 2500);
      return () => clearTimeout(id);
    };
    const eventName = "tnc_cart_added";
    window.addEventListener(eventName, onAdded);
    return () => window.removeEventListener(eventName, onAdded);
  }, []);

  const handleViewCart = () => {
    router.push(ROUTES.cart);
  };

  return (
    <div
      className={
        `fixed right-0 top-24 z-[100] transition-transform duration-300 ease-out will-change-transform ` +
        `${open ? "translate-x-0" : "translate-x-[calc(100%-18px)]"}`
      }
      aria-live="polite"
    >
      <div className="relative w-80 max-w-[88vw] rounded-2xl bg-white/95 ring-1 ring-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-4">
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 shrink-0 rounded-full bg-black text-white flex items-center justify-center text-xs">✓</div>
          <div className="min-w-0">
            <div className="text-sm font-semibold">Product added to cart</div>
            {lastItem && <div className="mt-0.5 text-xs text-black/70 truncate">{lastItem.name}</div>}
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 rounded-md border border-black px-3 py-2 text-xs text-center font-semibold hover-fade"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleViewCart}
                className="flex-1 rounded-md bg-black px-3 py-2 text-xs text-center font-semibold text-white hover:opacity-90"
              >
                View Cart
              </button>
            </div>
          </div>
        </div>

        {/* Handle */}
        <button
          aria-label={open ? "Close mini cart" : "Open mini cart"}
          onClick={() => setOpen((v) => !v)}
          className="absolute top-1/2 -translate-y-1/2 -left-3 h-16 w-4 rounded-l-full bg-white ring-1 ring-black/10 shadow-md"
        />
      </div>
    </div>
  );
}


