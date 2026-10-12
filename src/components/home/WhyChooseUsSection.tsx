"use client";

import React from "react";
import { BookOpen, Sparkles, Heart, Utensils, ShieldCheck, Flame } from "lucide-react";

export default function WhyChooseUsSection() {
  const values = [
    {
      icon: BookOpen,
      title: "Traditional Recipes",
      subtitle: "Heirloom Culinary Wisdom",
      description:
        "Every batch is inspired by timeless regional recipes perfected across generations. We preserve traditional preparation techniques to deliver that authentic, comforting homestyle crunch.",
      accent: "bg-turmeric-100 text-turmeric-700 border-turmeric-300",
    },
    {
      icon: ShieldCheck,
      title: "Carefully Selected Ingredients",
      subtitle: "Clean & Wholesome",
      description:
        "We prioritize handpicked jumbo foxnuts, unadulterated whole spices, cold-pressed oils, and pure desi ghee. We keep our pantry simple, transparent, and completely free of artificial shortcuts.",
      accent: "bg-olive-100 text-olive-700 border-olive-300",
    },
    {
      icon: Flame,
      title: "Authentic Indian Flavours",
      subtitle: "True To Our Roots",
      description:
        "From the earthy sweetness of organic jaggery and green cardamom to the savoury zip of roasted ajwain and black salt, our snacks celebrate the rich tapestry of Indian tastes.",
      accent: "bg-saffron-100 text-saffron-700 border-saffron-300",
    },
    {
      icon: Heart,
      title: "Made with Love",
      subtitle: "Small Batch Devotion",
      description:
        "We do not mass-produce in soulless factories. Our snacks are prepared with genuine pride, attentive care, and the deep joy of sharing heartwarming treats with loved ones.",
      accent: "bg-earth-100 text-earth-700 border-earth-300",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-turmeric-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-100 border border-turmeric-200 text-xs font-semibold text-earth-800 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
            Our Brand Values
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-earth-900 tracking-tight">
            Why Choose Aayusha Swad?
          </h2>
          <p className="text-sm sm:text-base text-earth-600 mt-3 font-sans">
            Our brand promise is rooted in authenticity, honest home cooking, and respect for India&apos;s rich snacking heritage.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <div
                key={index}
                className="bg-cream-100/60 rounded-2xl p-6 sm:p-7 border border-turmeric-200/90 hover:border-turmeric-400 hover:bg-cream-100 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-5 group-hover:scale-110 transition-transform ${val.accent}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-600 block mb-1">
                    {val.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-earth-900 mb-3 group-hover:text-earth-700 transition">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-earth-600 leading-relaxed font-sans">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-turmeric-200/60 flex items-center justify-between text-xs text-earth-500">
                  <span className="font-medium">Core Brand Value</span>
                  <span className="font-serif font-bold text-turmeric-600">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
