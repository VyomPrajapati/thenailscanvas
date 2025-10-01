"use client";

import Image from "next/image";

export type CartItemType = {
  name: string;
  price: number;
  img: string;
  qty: number;
};

export default function CartItem({ item, onChangeQty, onRemove }: {
  item: CartItemType;
  onChangeQty: (qty: number) => void;
  onRemove: () => void;
}) {
  return (
    <div className="grid grid-cols-[80px_1fr_auto] items-start gap-4 py-5">
      <div className="relative h-20 w-20 overflow-hidden rounded-md ring-1 ring-black/10">
        <Image src={item.img} alt={item.name} fill className="object-cover" />
      </div>
      <div>
        <div className="font-medium">{item.name}</div>
        <div className="mt-1 text-sm text-black/70">₹{(item.price).toLocaleString('en-IN')}</div>
        <div className="mt-3 inline-flex items-center rounded-md border border-black/15">
          <button onClick={()=> onChangeQty(Math.max(1, item.qty-1))} className="px-3 py-1">−</button>
          <span className="px-4 py-1 text-sm">{item.qty}</span>
          <button onClick={()=> onChangeQty(item.qty+1)} className="px-3 py-1">+</button>
        </div>
        <button onClick={onRemove} className="ml-4 text-sm text-black/70 hover-underline">Delete</button>
      </div>
      <div className="text-right font-semibold">₹{(item.price * item.qty).toLocaleString('en-IN')}</div>
    </div>
  );
}


