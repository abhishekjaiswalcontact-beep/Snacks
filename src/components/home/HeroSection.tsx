"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Heart, ShieldCheck, Flame } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-cream-200 py-12 md:py-20 border-b border-turmeric-200">
      {/* Subtle Indian Geometric Rangoli Background */}
      <div className="absolute inset-0 bg-rangoli-subtle opacity-40 pointer-events-none" />

      {/* Decorative Warm Gradients */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-turmeric-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-saffron-300/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Storytelling & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Traditional Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-turmeric-100 border border-turmeric-300 text-earth-800 text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-saffron-500 animate-spin" style={{ animationDuration: "8s" }} />
              <span>Authentic Homemade Goodness • आयेशा स्वाद</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-earth-900 tracking-tight leading-[1.15]">
              Traditional Taste, <br className="hidden sm:inline" />
              <span className="text-saffron-600 italic">Made with Love</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-earth-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Discover the authentic flavours of India with snacks crafted from traditional recipes and a love for homemade goodness. Handpicked ingredients, pure desi ghee, and timeless heritage in every bite.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-3.5 bg-earth-500 hover:bg-earth-600 text-white rounded-full font-bold text-sm shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Snacks</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-cream-100 text-earth-800 border border-turmeric-300 rounded-full font-bold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <span>Our Story</span>
              </Link>
            </div>

            {/* Brand Proof Points */}
            <div className="pt-6 border-t border-turmeric-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="font-serif text-2xl font-bold text-earth-900">100%</p>
                <p className="text-xs text-earth-500 font-medium">Traditional Recipes</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-earth-900">Desi Ghee</p>
                <p className="text-xs text-earth-500 font-medium">Heirloom Goodness</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-earth-900">Small Batch</p>
                <p className="text-xs text-earth-500 font-medium">Artisanal Freshness</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Circular/Arched Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/5]">
                <Image
                  src="/thek.png"
                  alt="Aayusha Swad Traditional Desi Ghee Thekua"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent" />

                {/* Overlaid Card Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block bg-turmeric-400 text-earth-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2">
                    Heritage Special
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Desi Ghee Bihari Thekua & Crisp Makhana
                  </h3>
                  <p className="text-xs text-cream-200 mt-1 line-clamp-2">
                    Hand-moulded with raw jaggery, cardamom, and whole wheat for genuine festive warmth.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Slow Roasted Makhana */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-turmeric-200 flex items-center gap-3 animate-bounce" style={{ animationDuration: "6s" }}>
                <div className="w-10 h-10 rounded-xl bg-turmeric-100 flex items-center justify-center text-turmeric-600">
                  <Flame className="w-5 h-5 text-saffron-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-earth-900">Slow Roasted</p>
                  <p className="text-[10px] text-earth-500">Foxnuts (Never Fried)</p>
                </div>
              </div>

              {/* Floating Badge 2: Pure Ingredients */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-turmeric-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-olive-100 flex items-center justify-center text-olive-700">
                  <Heart className="w-5 h-5 fill-olive-600 text-olive-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-earth-900">Homestyle Care</p>
                  <p className="text-[10px] text-earth-500">Zero Artificial Preservatives</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
