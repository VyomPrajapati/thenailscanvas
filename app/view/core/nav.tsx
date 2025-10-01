"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 text-black shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              className="sm:hidden rounded-md p-2 hover:bg-black/5"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="text-xl">☰</span>
            </button>
            <Link href="/view/landingpage" className="font-semibold tracking-wide italic hover-underline">
              TheNailsCanvas
            </Link>
          </div>

          <nav className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-8 text-sm">
            <Link href="/view/Shop" className="hover-underline">Shop</Link>
            <Link href="/aboutus" className="hover-underline">About Us</Link>
            <Link href="/view/contactus" className="hover-underline">Contact Us</Link>
          </nav>

          <div className="flex items-center gap-3 text-sm">
            <button className="rounded-md p-2 hover-fade" aria-label="Search">
              <Image src="/corelogos/search.svg" alt="Search" width={18} height={18} />
            </button>
            <button className="rounded-md p-2 hover-fade" aria-label="Account">
              <Image src="/corelogos/user.png" alt="User" width={18} height={18} />
            </button>
            <button className="rounded-md p-2 hover-fade" aria-label="Cart">
              <Image src="/corelogos/shopping-cart.svg" alt="Cart" width={18} height={18} />
            </button>
          </div>
        </div>

        {open && (
          <div className="sm:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/view/Shop" className="py-2 border-t border-black/10">Shop</Link>
              <Link href="/aboutus" className="py-2 border-t border-black/10">About Us</Link>
              <Link href="/view/contactus" className="py-2 border-t border-black/10">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


