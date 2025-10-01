"use client";

import { useEffect, useState } from "react";
import AppNavbar from "../core/AppNavbar";
import Footer from "../core/footer";
import CartItem, { CartItemType } from "./components/CartItem";
import Summary from "./components/Summary";
import { cartMessages } from "./data";

export default function CartPage() {
  const [items, setItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('tnc_cart') || '[]');
      setItems(stored);
    } catch {}
  }, []);

  const updateQty = (index: number, qty: number) => {
    setItems((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], qty };
      localStorage.setItem('tnc_cart', JSON.stringify(next));
      return next;
    });
  };

  const removeItem = (index: number) => {
    setItems((prev) => {
      const next = prev.filter((_, i) => i !== index);
      localStorage.setItem('tnc_cart', JSON.stringify(next));
      return next;
    });
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <main>
      <AppNavbar />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28">
        <h1 className="text-3xl sm:text-4xl font-semibold">Cart</h1>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl bg-white/90 ring-1 ring-black/10 p-6">
            {items.length === 0 && (
              <div className="py-10 text-center text-sm">{cartMessages.empty}</div>
            )}
            {items.map((it, idx) => (
              <CartItem key={idx} item={it} onChangeQty={(q)=> updateQty(idx, q)} onRemove={() => removeItem(idx)} />
            ))}
          </div>
          <div>
            <Summary subtotal={subtotal} hasItems={items.length > 0} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


