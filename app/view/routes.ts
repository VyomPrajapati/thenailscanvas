"use client";

import { useRouter } from "next/navigation";

export const ROUTES = {
  home: "/view/landingpage",
  shop: "/view/Shop",
  contact: "/view/contactus",
  about: "/view/aboutus",
  cart: "/view/cart",
  checkout: "/view/checkout",
  faq: "/view/faq",
  instagram: "https://www.instagram.com/the.nails.canvas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
};

export function useGoTo() {
  const router = useRouter();
  return (path: keyof typeof ROUTES) => router.push(ROUTES[path]);
}


