"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Eye, Check, Heart, Sparkles } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(product.weight);
  const [isAdded, setIsAdded] = useState(false);

  // Find price for selected weight
  const currentPrice =
    product.availableWeights?.find((w) => w.weight === selectedWeight)?.price ||
    product.price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, selectedWeight, currentPrice);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-turmeric-200/80 hover:border-turmeric-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
        {product.isBestSeller && (
          <span className="bg-earth-500 text-cream-100 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-turmeric-400" />
            Bestseller
          </span>
        )}
        {product.isTraditional && (
          <span className="bg-turmeric-400 text-earth-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            Traditional Recipe
          </span>
        )}
        {product.isNew && (
          <span className="bg-olive-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            New Arrival
          </span>
        )}
      </div>

      {/* Quick View Button */}
      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleQuickViewClick}
          className="p-2 bg-white/95 text-earth-700 hover:text-earth-900 hover:bg-cream-100 rounded-full shadow-md transition"
          aria-label="Quick preview"
          title="Quick preview"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Product Image */}
      <Link href={`/shop/${product.slug}`} className="relative block aspect-square w-full overflow-hidden bg-[#FAF7F2] border-b border-turmeric-100/70 p-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-3 group-hover:scale-108 transition-transform duration-500"
        />
      </Link>

      {/* Product Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-saffron-600 font-medium tracking-wide uppercase text-[11px]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-earth-700 font-semibold">
              <Star className="w-3.5 h-3.5 fill-turmeric-400 text-turmeric-400" />
              <span>{product.rating}</span>
              <span className="text-earth-400 text-[11px] font-normal">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Product Title */}
          <Link href={`/shop/${product.slug}`}>
            <h3 className="font-serif font-bold text-base sm:text-lg text-earth-800 group-hover:text-earth-600 transition line-clamp-1">
              {product.name}
            </h3>
          </Link>
          {product.hindiName && (
            <p className="text-xs text-earth-400 font-sans mt-0.5">
              {product.hindiName}
            </p>
          )}

          {/* Short Description */}
          <p className="text-xs text-earth-600 line-clamp-2 mt-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Weights & Price Row */}
        <div className="space-y-3 pt-2 border-t border-cream-200">
          {/* Weight selector pills */}
          {product.availableWeights && product.availableWeights.length > 1 && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] text-earth-500 font-medium">Pack:</span>
              {product.availableWeights.map((w) => (
                <button
                  key={w.weight}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedWeight(w.weight);
                  }}
                  className={`text-[11px] px-2 py-0.5 rounded-md font-medium transition ${
                    selectedWeight === w.weight
                      ? "bg-earth-500 text-white"
                      : "bg-cream-200 text-earth-700 hover:bg-cream-300"
                  }`}
                >
                  {w.weight}
                </button>
              ))}
            </div>
          )}

          {/* Price & Add to Cart button */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-lg sm:text-xl font-bold text-earth-900">
                ₹{currentPrice}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-earth-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              <span className="text-[10px] text-earth-400 font-medium">
                / {selectedWeight}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
                isAdded
                  ? "bg-olive-600 text-white"
                  : "bg-turmeric-400 hover:bg-turmeric-500 text-earth-900 hover:shadow"
              }`}
              aria-label={`Add ${product.name} to cart`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
