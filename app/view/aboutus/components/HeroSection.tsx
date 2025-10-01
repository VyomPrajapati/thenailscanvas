import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              About <span className="italic">TheNailsCanvas</span>
            </h1>
            <p className="text-lg text-black/70 mb-8 leading-relaxed">
              We're revolutionizing nail care with reusable gel nails that deliver salon-quality results 
              in minutes. Our mission is to make beautiful, long-lasting nails accessible to everyone, 
              everywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-black"></div>
                <span className="text-sm font-medium">10+ Reuses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-black"></div>
                <span className="text-sm font-medium">Damage-Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-black"></div>
                <span className="text-sm font-medium">Salon Quality</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden ring-1 ring-black/10">
              <Image
                src="/nails/beautiful-nail-art-presentation.jpg"
                alt="Beautiful nail art presentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
