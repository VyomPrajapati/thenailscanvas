"use client";

import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="w-full h-screen">
      <Image
        src="/comingsoon.jpg"
        alt="Coming Soon"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
