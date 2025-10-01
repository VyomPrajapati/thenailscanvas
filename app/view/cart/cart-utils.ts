"use client";

export type CartItem = { name: string; price: number; img: string; qty?: number };

export function getCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem("tnc_cart") || "[]");
  } catch {
    return [];
  }
}

export function setCart(items: CartItem[]) {
  localStorage.setItem("tnc_cart", JSON.stringify(items));
}

export function addToCart(item: CartItem, options?: { qty?: number; navigate?: boolean }) {
  const qty = options?.qty ?? 1;
  const cart = getCart();
  cart.push({ ...item, qty });
  setCart(cart);
  try {
    window.dispatchEvent(new CustomEvent("tnc_cart_added", { detail: { item, qty } }));
  } catch {}
}


