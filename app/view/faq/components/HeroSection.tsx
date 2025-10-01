export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#B5D2DD] via-[#A8C8D4] to-[#9BBCCB] py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6">
          Frequently Asked <span className="italic">Questions</span>
        </h1>
        <p className="text-lg sm:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
          Find answers to common questions about our reusable gel nails, sizing, application, 
          and everything you need to know for the perfect salon-quality look at home.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center space-x-2 text-black/80">
            <div className="w-2 h-2 bg-black/60 rounded-full"></div>
            <span className="text-sm">Product Information</span>
          </div>
          <div className="flex items-center space-x-2 text-black/80">
            <div className="w-2 h-2 bg-black/60 rounded-full"></div>
            <span className="text-sm">Application Guide</span>
          </div>
          <div className="flex items-center space-x-2 text-black/80">
            <div className="w-2 h-2 bg-black/60 rounded-full"></div>
            <span className="text-sm">Support & Care</span>
          </div>
        </div>
      </div>
    </section>
  );
}
