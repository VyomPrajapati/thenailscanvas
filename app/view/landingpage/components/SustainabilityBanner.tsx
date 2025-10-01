import { AnimatedTestimonials } from "./animatedtestimonials";

export default function SustainabilityBanner() {
  const testimonials = [
    {
      quote:
        "Prep nails for long wear: clean, buff lightly, and wipe. This ensures a perfect base for your reusable gels.",
      name: "Prep & Clean",
      designation: "Step 1",
      src: "/nails/nail-care-items-arrangement-view.jpg",
    },
    {
      quote:
        "Apply in ~10 minutes: align, press, and seal. Salon finish without damage or dry time.",
      name: "Quick Application",
      designation: "Step 2",
      src: "/nails/nail1.jpeg",
    },
    {
      quote:
        "Reapply up to 10+ wears: switch styles mid‑week or refresh before events—reuse the same set again and again.",
      name: "Reapply & Reuse",
      designation: "Step 3",
      src: "/nails/nail2.jpeg",
    },
    {
      quote:
        "Mix & match looks: pair nudes with accents or bold colors for weekends—endless combinations.",
      name: "Style Mix",
      designation: "Explore",
      src: "/nails/nail3.jpeg",
    },
    {
      quote:
        "Gentle removal: lift edges and peel off slowly—no acetone soak, no damage, ready for your next set.",
      name: "Gentle Removal",
      designation: "Reset",
      src: "/nails/close-up-hand-holding-nail-product.jpg",
    },
  ];
  return (
    <section id="sustainability" className="mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-black">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">How Reusable Gel Nails Work</h2>
        <div className="text-black [&_*]:!text-black [&_*]:!opacity-100">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}


