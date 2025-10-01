"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getCart, setCart, CartItem } from "../../cart/cart-utils";

export default function OrderSummary() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [promoApplied, setPromoApplied] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const removeItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    setCart(updatedItems);
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
  const discount = promoApplied ? 500 : 0;
  const total = subtotal - discount;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Order Summary</h3>
      
      {promoApplied && (
        <div className="bg-black/5 rounded-lg p-3 flex items-center justify-between">
          <span className="text-sm">Hooray! You use promo code!</span>
          <button onClick={() => setPromoApplied(false)} className="text-black/50 hover:text-black">
            ×
          </button>
        </div>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="relative h-16 w-16 rounded-lg overflow-hidden ring-1 ring-black/10">
              <Image src={item.img} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm">{item.name}</div>
              <div className="text-xs text-black/70 mt-1">
                {item.qty || 1} × ₹{item.price.toLocaleString('en-IN')}
              </div>
              {index === 0 && (
                <div className="text-xs text-black/70 mt-1 italic">
                  Please recheck the size before send to me :)
                </div>
              )}
            </div>
            <button
              onClick={() => removeItem(index)}
              className="text-black/50 hover:text-red-600 transition-colors p-1"
              aria-label="Remove item"
            >
              ×
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <div className="text-center py-8 text-sm text-black/50">
            No items in cart
          </div>
        )}
      </div>

      <div className="space-y-3 pt-4 border-t border-black/10">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString('en-IN')}</span>
        </div>
        {promoApplied && (
          <div className="flex justify-between text-sm text-red-600">
            <span>Voucher (50KDISCOUNT)</span>
            <span>-₹{discount.toLocaleString('en-IN')}</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>₹-</span>
        </div>
        <div className="flex justify-between font-semibold pt-2 border-t border-black/10">
          <span>Total</span>
          <span>₹{total.toLocaleString('en-IN')}</span>
        </div>
      </div>

      {!promoApplied && (
        <button
          onClick={() => setPromoApplied(true)}
          className="w-full border border-black/15 py-2 rounded-lg text-sm hover-fade"
        >
          Apply Promo Code
        </button>
      )}
    </div>
  );
}
