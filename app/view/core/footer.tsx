"use client";

import { ROUTES } from "../routes";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    if (route.startsWith('http')) {
      window.open(route, '_blank', 'noopener,noreferrer');
    } else {
      router.push(route);
    }
  };

  return (
    <footer className="mt-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B5D2DD] via-[#A8C8D4] to-[#9BBCCB]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-base">
          {/* Brand section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="text-2xl font-bold italic text-black">TheNailsCanvas</div>
            </div>
            <p className="text-sm text-black/80 leading-relaxed">
              Reusable gel nails you can apply in minutes. Damage‑free. Salon finish. 
              Transform your look instantly with our premium collection.
            </p>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleNavigation(ROUTES.instagram)} 
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
              >
                <Image src="/corelogos/instagram-svgrepo-com.svg" alt="Instagram" width={20} height={20} />
              </button>
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <Image src="/corelogos/youtube-svgrepo-com.svg" alt="YouTube" width={20} height={20} />
              </button>
            </div>
          </div>

          {/* Shop section */}
          <div className="space-y-4">
            <div className="text-lg font-bold text-black border-b-2 border-black/20 pb-2 inline-block">Shop</div>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation(ROUTES.shop)} 
                  className="text-sm text-black/80 hover:text-black hover:translate-x-1 transition-all duration-300 text-left flex items-center group"
                >
                  <span className="w-1 h-1 bg-black/40 rounded-full mr-2 group-hover:bg-black transition-colors"></span>
                  All Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation(ROUTES.shop)} 
                  className="text-sm text-black/80 hover:text-black hover:translate-x-1 transition-all duration-300 text-left flex items-center group"
                >
                  <span className="w-1 h-1 bg-black/40 rounded-full mr-2 group-hover:bg-black transition-colors"></span>
                  Collections
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation(ROUTES.shop)} 
                  className="text-sm text-black/80 hover:text-black hover:translate-x-1 transition-all duration-300 text-left flex items-center group"
                >
                  <span className="w-1 h-1 bg-black/40 rounded-full mr-2 group-hover:bg-black transition-colors"></span>
                  Best Sellers
                </button>
              </li>
            </ul>
          </div>

          {/* Company section */}
          <div className="space-y-4">
            <div className="text-lg font-bold text-black border-b-2 border-black/20 pb-2 inline-block">Company</div>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation(ROUTES.about)} 
                  className="text-sm text-black/80 hover:text-black hover:translate-x-1 transition-all duration-300 text-left flex items-center group"
                >
                  <span className="w-1 h-1 bg-black/40 rounded-full mr-2 group-hover:bg-black transition-colors"></span>
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation(ROUTES.contact)} 
                  className="text-sm text-black/80 hover:text-black hover:translate-x-1 transition-all duration-300 text-left flex items-center group"
                >
                  <span className="w-1 h-1 bg-black/40 rounded-full mr-2 group-hover:bg-black transition-colors"></span>
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation(ROUTES.faq)} 
                  className="text-sm text-black/80 hover:text-black hover:translate-x-1 transition-all duration-300 text-left flex items-center group"
                >
                  <span className="w-1 h-1 bg-black/40 rounded-full mr-2 group-hover:bg-black transition-colors"></span>
                  FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter section */}
          <div className="space-y-4">
            <div className="text-lg font-bold text-black border-b-2 border-black/20 pb-2 inline-block">Stay Updated</div>
            <p className="text-sm text-black/80">Get the latest updates on new products and exclusive offers.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-sm placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent"
              />
              <button className="w-full px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-black/90 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-black/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-black/70">
              © {new Date().getFullYear()} TheNailsCanvas. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-black/70 hover:text-black transition-colors">Privacy Policy</button>
              <button className="text-black/70 hover:text-black transition-colors">Terms & Conditions</button>
              <button className="text-black/70 hover:text-black transition-colors">Shipping Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}