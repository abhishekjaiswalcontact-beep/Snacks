"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Instagram, ArrowRight } from "lucide-react";
import { BRAND_CONFIG } from "@/data/products";

export default function GallerySection() {
  const galleryItems = [
    {
      title: "Artisanal Makhana Roasting",
      subtitle: "Crisp jumbo foxnuts in gentle herbs",
      tag: "Flavoured Foxnuts",
      image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      title: "Pure Desi Ghee Thekua",
      subtitle: "Hand-pressed with carved wooden moulds",
      tag: "Heritage Bihari",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Cardamom Scented Nankhatai",
      subtitle: "Melt-in-mouth golden tea cookies",
      tag: "Artisanal Bakery",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Diamond-Cut Savouries",
      subtitle: "Ajwain spiced golden namak para",
      tag: "Crispy Classics",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      span: "col-span-1 row-span-1",
    },
    {
      title: "Indian Chai Time Tradition",
      subtitle: "The ritual of slow evenings and honest munching",
      tag: "The Tea Table",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      title: "Crunchy Street Mixtures",
      subtitle: "Roasted chana jor and lightweight poha chivda",
      tag: "Homestyle Namkeen",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-cream-100/50 border-b border-turmeric-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-100 border border-turmeric-200 text-xs font-semibold text-earth-800 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
              Visual Showcase
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-earth-900 tracking-tight">
              A Glimpse into Our Kitchen & Craft
            </h2>
            <p className="text-sm sm:text-base text-earth-600 mt-2 max-w-xl font-sans">
              Authentic Indian food presentation, rich golden textures, and the timeless beauty of freshly prepared snacks.
            </p>
          </div>

          <a
            href={BRAND_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-turmeric-300 rounded-full text-xs font-bold text-earth-800 hover:bg-cream-100 hover:shadow-sm transition"
          >
            <Instagram className="w-4 h-4 text-saffron-600" />
            <span>Follow @aayushaswad</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden bg-earth-900 shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-950/80 via-earth-950/20 to-transparent" />

              {/* Tag in top-left */}
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-earth-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                {item.tag}
              </span>

              {/* Text overlay on bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-serif text-base sm:text-lg font-bold group-hover:text-turmeric-300 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-cream-300 mt-0.5 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-bold text-earth-800 hover:text-saffron-600 transition"
          >
            <span>Explore all varieties in our store</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
