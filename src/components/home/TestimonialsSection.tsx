"use client";

import React from "react";
import { Star, Quote, Sparkles, UserCheck } from "lucide-react";

export default function TestimonialsSection() {
  const sampleReviews = [
    {
      name: "Early Tasting Circle Member",
      role: "Sample Review • Bihar & Delhi NCR",
      rating: 5,
      comment:
        "The Traditional Bihari Thekua reminds me of the authentic taste prepared at home during Chhath Puja. The aromatic fennel and purity of desi ghee are unmistakable. A true homage to heritage.",
      snackLoved: "Traditional Bihari Thekua",
    },
    {
      name: "Snack Enthusiast Review",
      role: "Sample Review • Bengaluru",
      rating: 5,
      comment:
        "Peri Peri Makhana is now our household's go-to teatime snack. Perfect crispiness without being greasy or laden with artificial spice powders. Wholesome and addictive.",
      snackLoved: "Peri Peri Makhana",
    },
    {
      name: "Mindful Snacker",
      role: "Sample Review • Mumbai",
      rating: 5,
      comment:
        "The Cream & Onion Makhana is our family's absolute favorite. Incredibly crunchy, perfectly seasoned with herbs, and roasted without any heavy oiliness. Truly wholesome.",
      snackLoved: "Cream & Onion Makhana",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-turmeric-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-100 border border-turmeric-200 text-xs font-semibold text-earth-800 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
            Tasting Notes
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-earth-900 tracking-tight">
            Loved for Homemade Authenticity
          </h2>
          <p className="text-sm sm:text-base text-earth-600 mt-3 font-sans">
            Hear from our community of traditional snack lovers and early recipe tasting circles.
          </p>
          <span className="inline-block mt-2 text-[11px] text-earth-400 bg-cream-100 px-3 py-1 rounded-full border border-turmeric-200">
            * Showcase Placeholder: Ready for verified customer feedback upon public launch
          </span>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleReviews.map((item, index) => (
            <div
              key={index}
              className="bg-cream-100/60 rounded-3xl p-6 sm:p-8 border border-turmeric-200/90 relative shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-turmeric-300 absolute top-6 right-6 opacity-60" />

              <div className="space-y-4">
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-turmeric-400 text-turmeric-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-earth-700 leading-relaxed italic font-serif">
                  &ldquo;{item.comment}&rdquo;
                </p>

                {/* Snack Badge */}
                <div className="pt-1">
                  <span className="text-[11px] bg-turmeric-200/80 text-earth-900 font-semibold px-2.5 py-1 rounded-full">
                    Favorite: {item.snackLoved}
                  </span>
                </div>
              </div>

              {/* Reviewer Meta */}
              <div className="mt-6 pt-4 border-t border-turmeric-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-earth-500 text-cream-100 font-serif font-bold text-sm flex items-center justify-center">
                  AS
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-earth-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-earth-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
