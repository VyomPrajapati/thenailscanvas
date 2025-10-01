"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // fake async subscribe
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
      <div className="rounded-2xl bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur p-8 sm:p-12 ring-1 ring-black/10 min-h-[220px] sm:min-h-[260px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Join the NailsCanvas Newsletter</h2>
            <p className="mt-2 text-sm text-black/70">
              Get early access to new reusable gel sets, restocks, tips for flawless application, and exclusive offers.
            </p>
          </div>
          <form onSubmit={onSubmit} className="flex w-full items-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 rounded-full border border-black/15 bg-white px-4 py-3 text-sm outline-none focus:border-black/40"
            />
            <button
              type="submit"
              className="rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:opacity-90"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>
        {status === "success" && (
          <p className="mt-3 text-sm text-green-700">Thanks! You are subscribed.</p>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-700">Please enter a valid email.</p>
        )}
      </div>
    </section>
  );
}


