export default function StorySection() {
  return (
    <section className="py-16 bg-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Our Story</h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto">
            Founded with a vision to transform the nail industry, TheNailsCanvas emerged from a simple 
            observation: traditional nail services are time-consuming, expensive, and often damaging to natural nails.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">The Problem</h3>
            <p className="text-black/70">
              Traditional nail services require hours at the salon, cost hundreds of dollars, 
              and can damage natural nails with harsh chemicals and filing.
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">The Solution</h3>
            <p className="text-black/70">
              We developed reusable gel nails that can be applied in minutes, reused 10+ times, 
              and removed without damage to your natural nails.
            </p>
          </div>
          
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">The Impact</h3>
            <p className="text-black/70">
              Today, thousands of customers enjoy salon-quality nails at home, saving time, 
              money, and protecting their natural nail health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
