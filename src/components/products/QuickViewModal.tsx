"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Star, ShoppingBag, Check, ShieldCheck, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>(product ? product.weight : "");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) return null;

  const currentPrice =
    product.availableWeights?.find((w) => w.weight === (selectedWeight || product.weight))?.price ||
    product.price;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedWeight || product.weight, currentPrice);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-earth-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl border border-turmeric-200">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cream-100 text-earth-700 hover:bg-earth-100 hover:text-earth-900 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="p-6 bg-cream-100/60 flex flex-col justify-between border-b md:border-b-0 md:border-r border-cream-200">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-inner">
                <Image
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-2 mt-4 justify-center">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition ${
                        activeImageIndex === idx ? "border-earth-600" : "border-cream-300 opacity-60"
                      }`}
                    >
                      <Image src={img} alt="Thumb" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Value badges */}
              <div className="mt-4 pt-4 border-t border-cream-200/80 flex items-center justify-around text-[11px] text-earth-600">
                <span className="flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-olive-600" /> Pure Ingredients
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-turmeric-500" /> Small Batch
                </span>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-saffron-600">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-earth-700">
                    <Star className="w-3.5 h-3.5 fill-turmeric-400 text-turmeric-400" />
                    <span>{product.rating}</span>
                    <span className="text-earth-400">({product.reviewCount} reviews)</span>
                  </div>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-earth-800">
                    {product.name}
                  </h2>
                  {product.hindiName && (
                    <p className="text-xs text-earth-500 font-sans mt-0.5">
                      {product.hindiName}
                    </p>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-2xl font-bold text-earth-900">
                    ₹{currentPrice}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-earth-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                  <span className="text-xs text-earth-500">
                    (Inclusive of all taxes)
                  </span>
                </div>

                <p className="text-xs text-earth-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Available Weights */}
                {product.availableWeights && (
                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-semibold text-earth-700 block">
                      Select Pack Size:
                    </label>
                    <div className="flex gap-2 flex-wrap">
                      {product.availableWeights.map((w) => (
                        <button
                          key={w.weight}
                          onClick={() => setSelectedWeight(w.weight)}
                          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition border ${
                            (selectedWeight || product.weight) === w.weight
                              ? "bg-earth-500 text-white border-earth-600 shadow-sm"
                              : "bg-cream-100 text-earth-700 border-turmeric-200 hover:bg-cream-200"
                          }`}
                        >
                          {w.weight} — ₹{w.price}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {product.features.map((feat, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-turmeric-100 text-earth-800 px-2 py-0.5 rounded-full font-medium"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add to Cart Controls */}
              <div className="space-y-3 pt-4 border-t border-cream-200">
                <div className="flex items-center gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-turmeric-300 rounded-xl bg-cream-50 overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-earth-600 hover:bg-turmeric-200 transition font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 py-2 text-xs font-bold text-earth-900 min-w-[28px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-earth-600 hover:bg-turmeric-200 transition font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition shadow-md ${
                      isAdded
                        ? "bg-olive-600 text-white"
                        : "bg-earth-500 hover:bg-earth-600 text-white"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" /> Added to Basket!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-turmeric-300" /> Add to Basket — ₹
                        {currentPrice * quantity}
                      </>
                    )}
                  </button>
                </div>

                <div className="text-center">
                  <Link
                    href={`/shop/${product.slug}`}
                    onClick={onClose}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-saffron-600 hover:text-saffron-700 hover:underline"
                  >
                    View Full Product Details & Ingredients
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
