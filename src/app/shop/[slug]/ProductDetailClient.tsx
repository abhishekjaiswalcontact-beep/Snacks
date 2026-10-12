"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Star, 
  ShoppingBag, 
  Check, 
  Heart, 
  MessageSquare, 
  Share2, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { BRAND_CONFIG } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const { addToCart, setIsCartOpen } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(product.weight);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Determine current price
  const currentPrice =
    product.availableWeights?.find((w) => w.weight === selectedWeight)?.price ||
    product.price;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedWeight, currentPrice);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleWhatsAppEnquiry = () => {
    const text = `Namaste Aayusha Swad! 🙏\n\nI am interested in ordering:\n*${product.name}* (${selectedWeight})\nQuantity: ${quantity}\nPrice: ₹${currentPrice * quantity}\n\nPlease confirm availability and dispatch details.`;
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-white p-6 sm:p-10 rounded-3xl border border-turmeric-200/90 shadow-sm">
      
      {/* Left: Image Gallery */}
      <div className="lg:col-span-6 space-y-4">
        {/* Main Photo */}
        <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-cream-100 border border-cream-200 shadow-inner">
          <Image
            src={product.images[activeImage] || product.images[0]}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isBestSeller && (
              <span className="bg-earth-500 text-cream-100 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Bestseller
              </span>
            )}
            {product.isTraditional && (
              <span className="bg-turmeric-400 text-earth-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Traditional Recipe
              </span>
            )}
          </div>
        </div>

        {/* Thumbnails */}
        {product.images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition shrink-0 ${
                  activeImage === idx ? "border-earth-600 scale-102 shadow-sm" : "border-cream-300 opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="Thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Quick Highlights Banner */}
        <div className="p-4 bg-cream-100 rounded-2xl border border-turmeric-200/70 grid grid-cols-2 gap-3 text-xs text-earth-700">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-turmeric-600 shrink-0" />
            <span>Fast Dispatch across India</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-olive-600 shrink-0" />
            <span>100% Homemade Taste</span>
          </div>
        </div>
      </div>

      {/* Right: Product Details & Purchase Actions */}
      <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          
          {/* Category & Rating */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-bold tracking-wider text-saffron-600 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200">
              {product.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-earth-800">
              <Star className="w-4 h-4 fill-turmeric-400 text-turmeric-400" />
              <span className="text-sm">{product.rating}</span>
              <span className="text-earth-400 font-normal">({product.reviewCount} customer reviews)</span>
            </div>
          </div>

          {/* Title & Hindi Title */}
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-earth-900 leading-tight">
              {product.name}
            </h1>
            {product.hindiName && (
              <p className="text-sm text-earth-500 font-sans mt-1">
                {product.hindiName}
              </p>
            )}
          </div>

          {/* Pricing Row */}
          <div className="flex items-baseline gap-3 pt-1">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-earth-900">
              ₹{currentPrice}
            </span>
            {product.originalPrice && (
              <span className="text-base text-earth-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="text-xs text-olive-700 bg-olive-50 px-2 py-0.5 rounded font-semibold border border-olive-200">
              Inclusive of GST
            </span>
          </div>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-earth-700 leading-relaxed font-sans">
            {product.description}
          </p>

          {/* Available Pack Sizes */}
          {product.availableWeights && product.availableWeights.length > 0 && (
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-earth-800 uppercase tracking-wider block">
                Select Pack Size:
              </label>
              <div className="flex gap-2.5 flex-wrap">
                {product.availableWeights.map((w) => (
                  <button
                    key={w.weight}
                    onClick={() => setSelectedWeight(w.weight)}
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition border ${
                      selectedWeight === w.weight
                        ? "bg-earth-500 text-white border-earth-600 shadow-md"
                        : "bg-cream-100 text-earth-800 border-turmeric-200 hover:bg-cream-200"
                    }`}
                  >
                    {w.weight} — ₹{w.price}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Highlighted Feature Pills */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-bold text-earth-800 uppercase tracking-wider block">
              Key Highlights:
            </label>
            <div className="flex flex-wrap gap-2">
              {product.features.map((feat, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-turmeric-100/80 text-earth-800 px-3 py-1 rounded-full font-medium border border-turmeric-200"
                >
                  ✓ {feat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Purchase Controls */}
        <div className="space-y-4 pt-6 border-t border-cream-200">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            
            {/* Quantity Stepper */}
            <div className="flex items-center justify-between sm:justify-start border border-turmeric-300 rounded-2xl bg-cream-50 p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-earth-700 hover:bg-turmeric-200 rounded-xl transition font-bold"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-4 text-sm font-bold text-earth-900 min-w-[32px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-earth-700 hover:bg-turmeric-200 rounded-xl transition font-bold"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            {/* Add to Cart CTA */}
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-3.5 px-6 rounded-2xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2 ${
                isAdded
                  ? "bg-olive-600 text-white"
                  : "bg-earth-500 hover:bg-earth-600 text-white hover:shadow-lg"
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Added to Basket!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5 text-turmeric-300" />
                  <span>Add to Basket — ₹{currentPrice * quantity}</span>
                </>
              )}
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleWhatsAppEnquiry}
              className="flex-1 py-3 px-4 rounded-xl bg-olive-50 hover:bg-olive-100 text-olive-800 border border-olive-200 text-xs font-semibold flex items-center justify-center gap-2 transition"
            >
              <MessageSquare className="w-4 h-4 text-olive-600" />
              <span>Enquire / Order on WhatsApp</span>
            </button>

            <button
              onClick={handleShare}
              className="py-3 px-4 rounded-xl bg-cream-100 hover:bg-cream-200 text-earth-700 border border-turmeric-200 text-xs font-semibold flex items-center justify-center gap-2 transition"
            >
              <Share2 className="w-4 h-4 text-earth-500" />
              <span>{copied ? "Link Copied!" : "Share Snack"}</span>
            </button>
          </div>

          <p className="text-[11px] text-center text-earth-400">
            Showcase Storefront: Add to cart to test the seamless basket flow.
          </p>
        </div>

      </div>
    </div>
  );
}
