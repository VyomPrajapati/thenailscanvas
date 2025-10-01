"use client";

import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavMenu, MobileNavToggle } from "./resizable-navbar";
import Image from "next/image";
import { ROUTES } from "../routes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AppNavbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (route: string) => {
    router.push(route);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar>
      <NavBody>
        <div className="flex w-full items-center justify-between">
          <button onClick={() => handleNavigation(ROUTES.home)} className="flex items-center">
            <Image 
              src="/corelogos/logo_nails_canvas (1).svg" 
              alt="TheNailsCanvas" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
            />
          </button>
          <NavItems
            items={[
              { name: "Home", link: ROUTES.home },
              { name: "Shop", link: ROUTES.shop },
              { name: "About Us", link: ROUTES.about },
              { name: "Contact Us", link: ROUTES.contact },
            ]}
          />
          <div className="flex items-center gap-3 text-sm">
            <div className="group relative flex items-center">
              <div className="flex items-center rounded-full ring-1 ring-black/10 bg-white/80 px-2 py-1 transition-colors">
                <Image src="/corelogos/search.svg" alt="Search" width={18} height={18} />
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-2 w-0 group-hover:w-48 focus-within:w-48 transition-all duration-300 bg-transparent outline-none text-sm text-black placeholder-black/50"
                />
              </div>
            </div>
            <button className="rounded-md p-2 hover-fade" aria-label="Account">
              <Image src="/corelogos/user.png" alt="Account" width={18} height={18} />
            </button>
            <button onClick={() => handleNavigation(ROUTES.cart)} className="rounded-md p-2 hover-fade" aria-label="Cart">
              <Image src="/corelogos/shopping-cart.svg" alt="Cart" width={18} height={18} />
            </button>
          </div>
        </div>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <div className="flex w-full items-center justify-between px-4">
            <button onClick={() => handleNavigation(ROUTES.home)} className="flex items-center">
              <Image 
                src="/corelogos/logo_nails_canvas (1).svg" 
                alt="TheNailsCanvas" 
                width={120} 
                height={40} 
                className="h-8 w-auto"
              />
            </button>
            <button onClick={toggleMobileMenu} className="p-2">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black hover:text-gray-600 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-4">
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => handleNavigation(ROUTES.home)}
                className="text-left py-4 px-4 text-lg font-medium text-black hover:bg-black hover:text-white rounded-lg transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation(ROUTES.shop)}
                className="text-left py-4 px-4 text-lg font-medium text-black hover:bg-black hover:text-white rounded-lg transition-colors"
              >
                Shop
              </button>
              <button 
                onClick={() => handleNavigation(ROUTES.about)}
                className="text-left py-4 px-4 text-lg font-medium text-black hover:bg-black hover:text-white rounded-lg transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNavigation(ROUTES.contact)}
                className="text-left py-4 px-4 text-lg font-medium text-black hover:bg-black hover:text-white rounded-lg transition-colors"
              >
                Contact Us
              </button>
              <button 
                onClick={() => handleNavigation(ROUTES.faq)}
                className="text-left py-4 px-4 text-lg font-medium text-black hover:bg-black hover:text-white rounded-lg transition-colors"
              >
                FAQs
              </button>
            </div>
          </div>

          {/* Bottom Icons */}
          <div className="border-t border-black/10 p-6">
            <div className="flex items-center justify-center gap-6">
              <button className="text-black hover:text-gray-600 transition-colors p-3" aria-label="Search">
                <Image src="/corelogos/search.svg" alt="Search" width={24} height={24} />
              </button>
              <button className="text-black hover:text-gray-600 transition-colors p-3" aria-label="Account">
                <Image src="/corelogos/user.png" alt="Account" width={24} height={24} />
              </button>
              <button 
                onClick={() => handleNavigation(ROUTES.cart)} 
                className="text-black hover:text-gray-600 transition-colors p-3" 
                aria-label="Cart"
              >
                <Image src="/corelogos/shopping-cart.svg" alt="Cart" width={24} height={24} />
              </button>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
