export default function StatsSection() {
  const stats = [
    {
      number: "50K+",
      label: "Happy Customers",
      description: "Satisfied users worldwide"
    },
    {
      number: "10+",
      label: "Reuses Per Set",
      description: "Maximum value for money"
    },
    {
      number: "99%",
      label: "Satisfaction Rate",
      description: "Customer satisfaction score"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Always here to help"
    }
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">By the Numbers</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Our impact in the nail care industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl sm:text-5xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
              <p className="text-black/70 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
