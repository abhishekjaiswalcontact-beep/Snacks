"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types";
import ProductCard from "@/components/products/ProductCard";
import QuickViewModal from "@/components/products/QuickViewModal";

export default function FeaturedSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const categories = ["All", "Makhana", "Thekua"];

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-100 border border-turmeric-200 text-xs font-semibold text-earth-800 uppercase tracking-widest mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
              Handcrafted Specialities
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-earth-900 tracking-tight">
              Featured Makhana & Thekua
            </h2>
            <p className="text-sm sm:text-base text-earth-600 mt-2 max-w-xl font-sans">
              Timeless taste and mindful munching. Explore our five signature flavoured foxnut varieties and heirloom pure Desi Ghee Thekua.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-bold text-earth-800 hover:text-saffron-600 transition group self-start md:self-end"
          >
            <span>View Full Catalogue ({PRODUCTS.length} items)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? "bg-earth-500 text-white shadow-md scale-102"
                  : "bg-cream-100 text-earth-700 hover:bg-cream-200 border border-turmeric-200/80"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-1.5 opacity-75 text-[11px]">
                  ({PRODUCTS.filter((p) => p.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-cream-200/70 border border-turmeric-300 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-earth-900">
              Planning a Festive Celebration or Corporate Gifting?
            </h3>
            <p className="text-xs sm:text-sm text-earth-600 max-w-xl">
              We prepare customized assortment gift boxes with our pure desi ghee Thekua and roasted flavoured Makhana packs.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 bg-earth-500 hover:bg-earth-600 text-white rounded-full text-xs sm:text-sm font-bold shadow transition"
          >
            Enquire for Custom Hampers
          </Link>
        </div>

      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
}
