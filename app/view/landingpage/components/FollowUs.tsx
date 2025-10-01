import Image from "next/image";

const grid = [
  "/nails/girl-trying-artificial-nails-tips-with-flower-nail-design.jpg",
  "/nails/close-up-beauty-nail-art.jpg",
  "/nails/nail-care-items-arrangement-view (1).jpg",
  "/nails/nail-care-items-arrangement-view.jpg",
  "/nails/beautiful-nail-art-presentation.jpg",
  "/nails/people-choosing-nails-high-angle.jpg",
];

export default function FollowUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
      <h2 className="text-lg font-semibold">Follow Us @TheNailsCanvas</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {grid.map((src, i) => (
          <Image key={i} src={src} alt="Gallery" width={600} height={600} className="aspect-square w-full object-cover rounded" />
        ))}
      </div>
    </section>
  );
}


