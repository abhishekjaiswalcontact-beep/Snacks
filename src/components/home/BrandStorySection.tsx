"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, UtensilsCrossed, CheckCircle2 } from "lucide-react";

export default function BrandStorySection() {
  return (
    <section className="py-16 sm:py-24 bg-cream-100/70 border-b border-turmeric-200 relative overflow-hidden" id="story">
      {/* Subtle traditional motif background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-turmeric-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Traditional Aesthetics */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-cream-200">
                <Image
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80"
                  alt="Traditional Indian snacks preparation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-serif text-lg font-bold">Heirloom Recipes</p>
                  <p className="text-xs text-cream-200">Crafted with pure desi ghee and hand-ground spices</p>
                </div>
              </div>

              {/* Inset Secondary Image Card */}
              <div className="absolute -bottom-8 -right-6 sm:-right-8 w-44 sm:w-52 aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-cream-100 hidden sm:block p-3">
                <Image
                  src="/creamandonionmakhana.png"
                  alt="Crunchy Roasted Makhana"
                  fill
                  sizes="220px"
                  className="object-contain p-2"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 -left-4 sm:-left-6 bg-earth-500 text-cream-100 p-3 rounded-2xl shadow-lg border border-turmeric-300 max-w-[170px]">
                <p className="text-[10px] uppercase font-bold text-turmeric-300 tracking-wider">
                  Heritage Philosophy
                </p>
                <p className="font-serif text-xs font-bold mt-0.5">
                  &ldquo;Swad Jo Dil Chhoo Jaye&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-100 border border-turmeric-200 text-xs font-semibold text-earth-800 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
              Our Heritage & Vision
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-earth-900 leading-[1.2]">
              Bringing the Taste of Tradition to Every Home.
            </h2>

            <div className="space-y-4 text-earth-700 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                In a world of fast food and artificial shortcuts, <strong>Aayusha Swad</strong> was born out of a simple nostalgic longing: the unforgettable warmth of mother&apos;s kitchen, the comforting aroma of desi ghee during festive seasons, and the laughter shared with family over a steaming cup of tea.
              </p>
              <p>
                Every single item in our kitchen is crafted with reverence for traditional culinary rituals. Whether it is our hand-pressed <strong>Thekua</strong> flavoured with fennel and cardamom or nutritious <strong>Makhana</strong> slow-roasted to a crispy crunch, we honor recipes that have stood the test of generations.
              </p>
              <p>
                We believe good food doesn&apos;t need hidden additives. It only requires honesty in sourcing, patience in cooking, and the joy of creating something pure for the people you cherish.
              </p>
            </div>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-earth-800">
                <CheckCircle2 className="w-4 h-4 text-olive-600 shrink-0" />
                <span>Small batch preparation for crisp freshness</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-earth-800">
                <CheckCircle2 className="w-4 h-4 text-olive-600 shrink-0" />
                <span>Traditional spices, never artificial flavours</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-earth-800">
                <CheckCircle2 className="w-4 h-4 text-olive-600 shrink-0" />
                <span>Pure Desi Ghee & cold-pressed oils</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-earth-800">
                <CheckCircle2 className="w-4 h-4 text-olive-600 shrink-0" />
                <span>Hygienic multi-layer moisture lock packaging</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-earth-500 hover:bg-earth-600 text-white rounded-full text-xs sm:text-sm font-bold shadow transition"
              >
                <span>Read Full Brand Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/shop"
                className="text-xs sm:text-sm font-bold text-saffron-600 hover:text-saffron-700 underline underline-offset-4"
              >
                Discover the Taste
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
