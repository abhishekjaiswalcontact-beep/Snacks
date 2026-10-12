"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  Sparkles, 
  ArrowUpDown, 
  Check, 
  Filter 
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { Product, ProductCategory } from "@/types";
import ProductCard from "@/components/products/ProductCard";
import QuickViewModal from "@/components/products/QuickViewModal";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const initialQuery = searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Extract all unique tags
  const allTags = ["All", "Bestseller", "Desi Ghee", "Spicy", "Traditional", "Sweet"];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        (product.hindiName && product.hindiName.toLowerCase().includes(query)) ||
        product.category.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.tags.some((t) => t.toLowerCase().includes(query));

      // Tag filter
      let matchesTag = true;
      if (selectedTag === "Bestseller") {
        matchesTag = !!product.isBestSeller;
      } else if (selectedTag === "Traditional") {
        matchesTag = !!product.isTraditional;
      } else if (selectedTag !== "All") {
        matchesTag = product.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase());
      }

      return matchesCategory && matchesSearch && matchesTag;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      return 0; // Default featured order
    });
  }, [selectedCategory, searchQuery, selectedTag, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSelectedTag("All");
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen bg-cream-50/50 pb-20">
      {/* Shop Header Banner */}
      <div className="bg-gradient-to-r from-earth-600 via-earth-500 to-earth-600 text-white py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-turmeric-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-rangoli-subtle opacity-15" />
        <div className="relative max-w-7xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-400/20 text-turmeric-300 text-xs font-semibold uppercase tracking-widest border border-turmeric-400/30">
            <Sparkles className="w-3.5 h-3.5 text-turmeric-300" />
            Fresh Small-Batch Pantry
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Explore All Traditional Snacks
          </h1>
          <p className="text-sm sm:text-base text-cream-200 max-w-2xl mx-auto font-sans">
            Handcrafted with authentic heritage recipes, pure desi ghee, and wholesome ingredients. Shipped fresh directly to your doorstep.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Controls Bar: Search, Category Buttons & Sorting */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-turmeric-200/90 shadow-sm space-y-4 mb-8">
          
          {/* Row 1: Search & Sort Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 text-earth-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search by snack name, category or taste..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-turmeric-200 bg-cream-50 text-earth-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-turmeric-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-earth-400 hover:text-earth-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Count */}
            <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
              <span className="text-xs text-earth-500 whitespace-nowrap">
                Showing <strong>{filteredProducts.length}</strong> snacks
              </span>

              <div className="flex items-center gap-1.5 bg-cream-50 border border-turmeric-200 px-3 py-2 rounded-xl text-xs text-earth-700">
                <ArrowUpDown className="w-3.5 h-3.5 text-turmeric-600" />
                <label htmlFor="sort-select" className="font-medium sr-only">Sort by:</label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured / Best Match</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Row 2: Category Filter Buttons */}
          <div className="pt-3 border-t border-cream-200 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-earth-600 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-saffron-600" /> Category:
            </span>
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === "All"
                  ? "bg-earth-500 text-white shadow-sm"
                  : "bg-cream-100 text-earth-700 hover:bg-cream-200"
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat.name
                    ? "bg-earth-500 text-white shadow-sm"
                    : "bg-cream-100 text-earth-700 hover:bg-cream-200"
                }`}
              >
                {cat.name} ({cat.itemCount})
              </button>
            ))}
          </div>

          {/* Row 3: Taste / Highlight Tags */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-semibold text-earth-500 uppercase tracking-wider shrink-0 mr-1">
              Filter by:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-md text-[11px] font-medium transition ${
                  selectedTag === tag
                    ? "bg-turmeric-400 text-earth-900 font-bold"
                    : "bg-cream-100 text-earth-600 hover:bg-cream-200"
                }`}
              >
                {tag}
              </button>
            ))}

            {(selectedCategory !== "All" || searchQuery || selectedTag !== "All") && (
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-semibold text-red-600 hover:underline ml-auto shrink-0 flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Clear Filters
              </button>
            )}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-turmeric-200 space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-cream-200 text-turmeric-600 flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 opacity-60" />
            </div>
            <h3 className="font-serif text-xl font-bold text-earth-800">No snacks match your criteria</h3>
            <p className="text-xs text-earth-500">
              Try adjusting your search terms or clearing selected category filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-earth-500 text-white rounded-full text-xs font-semibold shadow hover:bg-earth-600 transition"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-cream-50">
          <div className="text-center space-y-2">
            <div className="w-10 h-10 border-4 border-turmeric-400 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm font-medium text-earth-700">Loading Aayusha Swad Pantry...</p>
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
