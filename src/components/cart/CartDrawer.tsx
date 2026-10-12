"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  Sparkles,
  MessageSquare
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND_CONFIG } from "@/data/products";

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    shippingFee,
    finalTotal,
    freeShippingRemaining,
    setIsCheckoutModalOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const threshold = BRAND_CONFIG.freeShippingThreshold;
  const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-earth-900/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream-50 shadow-2xl flex flex-col border-l border-turmeric-200">
          
          {/* Header */}
          <div className="p-4 sm:p-5 bg-earth-500 text-cream-100 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-turmeric-400 text-earth-900 flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white">Your Snack Basket</h3>
                <p className="text-xs text-cream-300">
                  {items.length} {items.length === 1 ? "item" : "items"} selected
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-cream-200 hover:text-white hover:bg-earth-600 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="p-3.5 bg-cream-200/90 border-b border-turmeric-200 text-xs">
            {freeShippingRemaining > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-earth-700">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Truck className="w-3.5 h-3.5 text-saffron-600" />
                    Add <strong className="text-earth-900">₹{freeShippingRemaining}</strong> more for FREE delivery
                  </span>
                  <span className="font-bold text-saffron-600">{progressPercent}%</span>
                </div>
                <div className="w-full bg-cream-300 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-turmeric-400 to-saffron-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-olive-600 font-semibold">
                <Sparkles className="w-4 h-4 text-turmeric-500" />
                <span>🎉 You have unlocked FREE Delivery across India!</span>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cream-200 text-turmeric-600 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif text-lg font-bold text-earth-700">Your basket is empty</h4>
                <p className="text-xs text-earth-500 max-w-xs mx-auto">
                  Bring the authentic taste of Indian tradition to your home. Explore our fresh makhana, thekua, and savory crisps.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 bg-earth-500 hover:bg-earth-600 text-white rounded-full text-xs font-semibold shadow transition"
                >
                  Start Exploring
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              items.map((item) => {
                const itemKey = `${item.product.id}-${item.selectedWeight}`;
                return (
                  <div
                    key={itemKey}
                    className="flex gap-3.5 p-3 bg-white rounded-xl border border-turmeric-200/70 shadow-sm"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-cream-100 shrink-0 border border-cream-200">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="font-serif text-sm font-bold text-earth-800 line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedWeight)}
                            className="text-earth-400 hover:text-red-500 p-1 transition"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5 text-xs text-earth-500">
                          <span className="bg-cream-200 text-earth-700 px-2 py-0.5 rounded text-[11px] font-medium">
                            {item.selectedWeight}
                          </span>
                          <span>₹{item.unitPrice} each</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-cream-100">
                        {/* Stepper */}
                        <div className="flex items-center border border-turmeric-300 rounded-lg bg-cream-50 overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedWeight, item.quantity - 1)}
                            className="px-2 py-1 text-earth-600 hover:bg-turmeric-200 transition"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-0.5 text-xs font-semibold text-earth-800 min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.selectedWeight, item.quantity + 1)}
                            className="px-2 py-1 text-earth-600 hover:bg-turmeric-200 transition"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Line total */}
                        <div className="text-right">
                          <span className="text-xs font-bold text-earth-900">
                            ₹{item.unitPrice * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Summary */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-turmeric-200 space-y-3 shadow-lg">
              <div className="space-y-1.5 text-xs text-earth-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-earth-800">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery</span>
                  <span>{shippingFee === 0 ? <strong className="text-olive-600">FREE</strong> : `₹${shippingFee}`}</span>
                </div>
                <div className="flex justify-between text-xs text-earth-400">
                  <span>Taxes (GST Included)</span>
                  <span>Included</span>
                </div>
                <div className="pt-2 border-t border-cream-200 flex justify-between text-sm font-bold text-earth-900">
                  <span>Total Amount</span>
                  <span className="text-base text-saffron-600 font-serif">₹{finalTotal}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={() => setIsCheckoutModalOpen(true)}
                  className="w-full py-3 px-4 bg-earth-500 hover:bg-earth-600 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 group"
                >
                  <span>Proceed to Checkout</span>
                  <span className="text-xs bg-earth-600/80 px-2 py-0.5 rounded text-turmeric-300 font-normal">
                    Showcase
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-center text-earth-400">
                  🔒 Secure Showcase • No payment required at this stage
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
