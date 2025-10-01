"use client";

import AppNavbar from "../core/AppNavbar";
import Footer from "../core/footer";
import CheckoutForm from "./components/CheckoutForm";
import OrderSummary from "./components/OrderSummary";

export default function CheckoutPage() {
  return (
    <main>
      <AppNavbar />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold italic">Checkout</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <CheckoutForm />
          </div>
          
          <div className="lg:sticky lg:top-32">
            <div className="rounded-2xl bg-white/90 supports-[backdrop-filter]:bg-white/70 backdrop-blur p-6 ring-1 ring-black/10">
              <OrderSummary />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
