'use client';
import AppNavbar from "../core/AppNavbar";
import Footer from "../core/footer";
import Sidebar from "./components/Sidebar";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import MiniCart from "../cart/components/MiniCart";

export default function ShopPage() {
  const [filters, setFilters] = useState<{ categories: string[]; maxPrice: number; sizes: string[] }>({ categories: [], maxPrice: 3000, sizes: [] });
  useEffect(() => {
    const id = setInterval(() => {
      const f = (window as Window & { __shopFilters?: { selectedCategories: string[]; selectedSizes: string[]; price: number } }).__shopFilters;
      if (f) setFilters({ categories: f.selectedCategories, maxPrice: f.price, sizes: f.selectedSizes });
    }, 200);
    return () => clearInterval(id);
  }, []);
  return (
    <main>
      <MiniCart />
      <AppNavbar />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28">
        <h1 className="text-3xl sm:text-4xl font-semibold">All Products</h1>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
          <div className="lg:col-span-3">
            <Grid selectedCategories={filters.categories} maxPrice={filters.maxPrice} selectedSizes={filters.sizes} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


