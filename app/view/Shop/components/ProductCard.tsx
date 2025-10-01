"use client";
import Image from "next/image";
import { addToCart } from "../../cart/cart-utils";
import { ROUTES } from "../../routes";
import { useRouter } from "next/navigation";

export default function ProductCard({
  name,
  price,
  img,
}: {
  name: string;
  price: number;
  img: string;
}) {
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart({ name, price, img, qty: 1 });
  };

  const handleBuyNow = () => {
    addToCart({ name, price, img, qty: 1 });
    router.push(ROUTES.checkout);
  };

  return (
    <div className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image src={img} alt={name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-black">{name}</p>
          <span className="text-sm font-semibold text-black">₹{price.toLocaleString("en-IN")}</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button onClick={handleAddToCart} className="flex-1 rounded-lg border border-black px-3 py-2 text-xs font-semibold text-black text-center hover-fade">Add to Cart</button>
          <button onClick={handleBuyNow} className="flex-1 rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white text-center hover:opacity-90">Buy Now</button>
        </div>
      </div>
    </div>
  );
}


