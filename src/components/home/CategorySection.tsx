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
            From crunchy roasted makhana to heirloom festive sweets and flaky savouries, explore traditional snacks hand-made for every craving.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-turmeric-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Category Image */}
              <div className="relative aspect-square w-full overflow-hidden bg-cream-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Hindi Monogram Overlay in top corner */}
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-earth-800 text-[11px] font-medium px-2 py-0.5 rounded-full shadow-sm">
                  {category.hindiName}
                </span>

                {/* Overlaid Count & Badge */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-turmeric-300">
                    {category.tagline}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-turmeric-200 transition">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs text-earth-600 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>

                <div className="pt-3 mt-2 border-t border-cream-200 flex items-center justify-between text-xs font-bold text-earth-700 group-hover:text-saffron-600 transition">
                  <span>Explore ({category.itemCount} Snacks)</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
