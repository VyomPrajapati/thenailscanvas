"use client";

import { useState } from "react";
import { ROUTES } from "../../routes";
import { useRouter } from "next/navigation";
import { faqCategories, pageContent } from "../data";

export default function FAQSection() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const handleContactSupport = () => {
    router.push(ROUTES.contact);
  };


  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const combinedIndex = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === combinedIndex ? null : combinedIndex);
  };

  return (
    <div className="space-y-12">
      {faqCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-black/10 shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">{category.title}</h3>
          
          <div className="space-y-4">
            {category.items.map((faq, questionIndex) => (
              <div key={questionIndex} className="border border-black/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                  className="w-full px-6 py-4 text-left bg-white/50 hover:bg-white/70 transition-colors duration-300 flex items-center justify-between"
                >
                  <span className="font-semibold text-black pr-4">{faq.question}</span>
                  <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === `${categoryIndex}-${questionIndex}` ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openIndex === `${categoryIndex}-${questionIndex}` && (
                  <div className="px-6 py-4 bg-white/30 border-t border-black/10">
                    <p className="text-black/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Contact Support Section */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 ring-1 ring-black/10 shadow-lg text-center">
        <h3 className="text-2xl font-bold text-black mb-4">{pageContent.contact.title}</h3>
        <p className="text-black/70 mb-6 max-w-2xl mx-auto">
          {pageContent.contact.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleContactSupport}
            className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-black/90 transition-colors duration-300"
          >
            {pageContent.contact.buttonText}
          </button>
          <button 
            onClick={handleContactSupport}
            className="px-8 py-3 border border-black text-black rounded-lg font-semibold hover:bg-black/5 transition-colors duration-300"
          >
            Email Us
          </button>
        </div>
      </div>
    </div>
  );
}
