"use client";

import React from "react";
import Link from "next/link";
import { 
  Instagram, 
  Phone, 
  Mail, 
  MapPin, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Send 
} from "lucide-react";
import { BRAND_CONFIG, CATEGORIES } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-earth-500 text-cream-200 border-t-4 border-turmeric-400">
      {/* Top Value Propositions Ribbon */}
      <div className="border-b border-earth-400/50 bg-earth-600/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-turmeric-400/20 text-turmeric-300 flex items-center justify-center mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-sm text-white">Traditional Recipes</h4>
            <p className="text-xs text-cream-300 mt-1 max-w-[200px]">Authentic methods passed down generations</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-turmeric-400/20 text-turmeric-300 flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-sm text-white">Clean Ingredients</h4>
            <p className="text-xs text-cream-300 mt-1 max-w-[200px]">Pure ghee, whole spices, and no artificial shortcuts</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-turmeric-400/20 text-turmeric-300 flex items-center justify-center mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-sm text-white">Small-Batch Freshness</h4>
            <p className="text-xs text-cream-300 mt-1 max-w-[200px]">Slow roasted and prepared in artisanal batches</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-turmeric-400/20 text-turmeric-300 flex items-center justify-center mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-sm text-white">Pan-India Delivery</h4>
            <p className="text-xs text-cream-300 mt-1 max-w-[200px]">Free shipping on orders over ₹{BRAND_CONFIG.freeShippingThreshold}</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-turmeric-400 to-saffron-500 flex items-center justify-center text-earth-800 shadow-sm border border-turmeric-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-earth-900"
                >
                  <path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11z" fill="#FFF8E9" stroke="#603D2A" />
                  <path d="M12 17c-2 0-3-1-3-2s1-2 3-2 3 1 3 2-1 2-3 2z" fill="#DC9F2B" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  Aayusha Swad
                </h3>
                <p className="text-xs text-turmeric-300 tracking-wider uppercase font-medium">
                  {BRAND_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-cream-300 leading-relaxed pr-4">
              Aayusha Swad is devoted to reviving the heartwarming tastes of Indian heritage. From crispy hand-pressed Thekua to lightly roasted nutritious Makhana and aromatic Nankhatai, we celebrate traditional recipes made with genuine love and honest ingredients.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-earth-600 hover:bg-turmeric-400 hover:text-earth-800 flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-earth-600 hover:bg-turmeric-400 hover:text-earth-800 flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="w-9 h-9 rounded-full bg-earth-600 hover:bg-turmeric-400 hover:text-earth-800 flex items-center justify-center transition"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-earth-400 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-cream-300">
              <li>
                <Link href="/" className="hover:text-turmeric-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-turmeric-300 transition">
                  Shop All Snacks
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-turmeric-300 transition">
                  Our Brand Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-turmeric-300 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=bestseller" className="hover:text-turmeric-300 transition">
                  Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-earth-400 pb-2">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-cream-300">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/shop?category=${encodeURIComponent(cat.name)}`}
                    className="hover:text-turmeric-300 transition flex items-center justify-between"
                  >
                    <span>{cat.name}</span>
                    <span className="text-xs text-turmeric-400 font-mono">({cat.hindiName})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Configurable Contact Placeholders */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-bold text-white tracking-wide border-b border-earth-400 pb-2">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-cream-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-turmeric-400 shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-turmeric-400 shrink-0" />
                <span>{BRAND_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-turmeric-400 shrink-0" />
                <span className="break-all">{BRAND_CONFIG.email}</span>
              </div>
              <div className="pt-2">
                <p className="text-xs text-turmeric-300 font-medium">Customer Support Hours:</p>
                <p className="text-xs text-cream-400">Monday - Saturday (10 AM to 7 PM IST)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Rangoli Pattern Divider */}
        <div className="mt-12 pt-8 border-t border-earth-400/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>© {new Date().getFullYear()} Aayusha Swad. All rights reserved. Handcrafted with traditional pride.</p>
          <div className="flex items-center space-x-6">
            <Link href="/about#privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/about#terms" className="hover:text-white transition">
              Terms & Conditions
            </Link>
            <Link href="/about#shipping" className="hover:text-white transition">
              Shipping & Delivery
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
