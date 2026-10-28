"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/products";

export default function CategorySection() {
  return (
    <section className="py-16 sm:py-20 bg-cream-100/60 border-b border-turmeric-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-100 border border-turmeric-200 text-xs font-semibold text-earth-800 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
            Curated Categories
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-earth-900 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-sm sm:text-base text-earth-600 mt-3 font-sans">
            Explore our two signature handcrafted snack collections — crispy slow-roasted Makhana in savoury and spicy seasonings, and authentic Bihari Thekua made with pure desi ghee.
          </p>
        </div>

        {/* Categories Grid - 2 Column Balanced Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative rounded-3xl overflow-hidden bg-white border border-turmeric-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Category Image */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-earth-900">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950/75 via-transparent to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                
                {/* Hindi Monogram Overlay in top corner */}
                <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-earth-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-turmeric-200">
                  {category.hindiName}
                </span>

                {/* Overlaid Count & Badge */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-turmeric-300">
                    {category.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-turmeric-200 transition">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs sm:text-sm text-earth-600 leading-relaxed font-sans">
                  {category.description}
                </p>

                <div className="pt-4 mt-3 border-t border-cream-200 flex items-center justify-between text-xs sm:text-sm font-bold text-earth-800 group-hover:text-saffron-600 transition">
                  <span>Explore All ({category.itemCount} Varieties)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
