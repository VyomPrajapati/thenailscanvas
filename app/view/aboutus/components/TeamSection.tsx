import Image from "next/image";
import { founder } from "../data";

export default function TeamSection() {
  return (
    <section className="py-16 bg-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Meet the Creator</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            The passionate individual behind TheNailsCanvas
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative h-32 w-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-black/10">
            <Image 
              src={founder.image} 
              alt={founder.name} 
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4">{founder.name}</h3>
          <p className="text-lg text-black/70 leading-relaxed mb-6">
            {founder.bio}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-black"></div>
              <span>Beauty Industry Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-black"></div>
              <span>Product Innovator</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-black"></div>
              <span>Customer Advocate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
