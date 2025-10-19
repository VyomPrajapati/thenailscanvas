"use client";

import { ROUTES } from "../../routes";
import { useRouter } from "next/navigation";
import { cartActions } from "../data";

export default function Summary({ subtotal, promoApplied = false, hasItems = true }: { subtotal: number; promoApplied?: boolean; hasItems?: boolean }) {
  const router = useRouter();
  const total = promoApplied ? Math.max(0, subtotal - 500) : subtotal;

  const handleCheckout = () => {
    if (hasItems) {
      router.push(ROUTES.checkout);
    }
  };

  return (
    <aside className="rounded-2xl bg-white/90 supports-[backdrop-filter]:bg-white/70 backdrop-blur p-6 ring-1 ring-black/10">
      <h3 className="text-lg font-semibold">Shopping Info</h3>
      {promoApplied && (
        <div className="mt-4 rounded-md bg-black/5 px-3 py-2 text-xs">Hooray! You have promo code applied.</div>
      )}
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex items-center justify-between font-semibold">
          <span>Total</span>
          <span>₹{total.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <button 
        onClick={handleCheckout} 
        disabled={!hasItems}
        className={`mt-6 w-full rounded-md px-4 py-3 text-sm font-semibold text-center block ${
          hasItems 
            ? 'bg-black text-white hover:opacity-90' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {cartActions.proceedToCheckout}
      </button>
    </aside>
  );
}


