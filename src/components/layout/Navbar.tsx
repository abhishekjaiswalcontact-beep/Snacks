"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Phone, 
  Sparkles, 
  ChevronRight,
  Heart
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND_CONFIG, CATEGORIES } from "@/data/products";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop All", href: "/shop" },
    { name: "Makhana", href: "/shop?category=Makhana" },
    { name: "Thekua", href: "/shop?category=Thekua" },
    { name: "Traditional Snacks", href: "/shop?category=Traditional+Indian+Snacks" },
    { name: "Cookies", href: "/shop?category=Traditional+Cookies" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-earth-500 text-cream-200 text-xs sm:text-sm py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 text-center">
            <Sparkles className="w-3.5 h-3.5 text-turmeric-400 shrink-0 hidden sm:inline" />
            <span className="font-medium tracking-wide">
              Festive Warmth: Free Delivery Across India on Orders Above ₹{BRAND_CONFIG.freeShippingThreshold}!
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-cream-300">
            <span className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3 h-3 text-turmeric-400" />
              <span>Helpline: {BRAND_CONFIG.phone}</span>
            </span>
            <span className="text-turmeric-400">•</span>
            <span>Handcrafted in Small Batches</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-turmeric-200"
            : "bg-cream-100 py-3.5 border-b border-turmeric-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-earth-500 hover:text-turmeric-600 focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Emblem / Monogram Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-turmeric-400 to-saffron-500 flex items-center justify-center text-earth-800 shadow-sm border border-turmeric-300 group-hover:scale-105 transition-transform">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-earth-900"
                >
                  {/* Traditional Diya / Kalash Motif */}
                  <path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11z" fill="#FFF8E9" stroke="#603D2A" />
                  <path d="M12 17c-2 0-3-1-3-2s1-2 3-2 3 1 3 2-1 2-3 2z" fill="#DC9F2B" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-earth-600 group-hover:text-earth-700 transition">
                  Aayusha Swad
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-widest uppercase font-medium text-saffron-600">
                  Traditional Taste, Made with Love
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-earth-600 bg-turmeric-100 font-semibold"
                        : "text-earth-500 hover:text-earth-700 hover:bg-cream-200/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons: Search & Cart */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-earth-500 hover:text-turmeric-600 hover:bg-cream-200 rounded-full transition"
                aria-label="Search snacks"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Bag Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-earth-500 hover:text-turmeric-600 hover:bg-cream-200 rounded-full transition flex items-center"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-saffron-500 text-white font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-sm">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Quick Order Button */}
              <Link
                href="/shop"
                className="hidden md:inline-flex items-center gap-1 px-4 py-2 text-xs uppercase tracking-wider font-bold text-white bg-earth-500 hover:bg-earth-600 rounded-full shadow-sm hover:shadow transition"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Collapsible Search Dropdown */}
          {searchOpen && (
            <div className="mt-3 pt-3 border-t border-turmeric-200 pb-2 animate-fadeIn">
              <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto flex items-center">
                <input
                  type="text"
                  placeholder="Search makhana, thekua, nankhatai, namak para..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full pl-10 pr-24 py-2.5 rounded-full border border-turmeric-300 bg-white text-earth-600 text-sm focus:outline-none focus:ring-2 focus:ring-turmeric-400 focus:border-transparent placeholder-earth-300"
                />
                <Search className="w-4 h-4 text-turmeric-500 absolute left-3.5 top-3.5" />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 px-4 py-1.5 bg-turmeric-400 hover:bg-turmeric-500 text-earth-800 text-xs font-semibold rounded-full transition"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-earth-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-cream-100 shadow-2xl flex flex-col z-10 border-r border-turmeric-200">
            {/* Drawer Header */}
            <div className="p-4 bg-earth-500 text-cream-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-turmeric-400 flex items-center justify-center text-earth-800 font-serif font-bold text-sm">
                  AS
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-white">Aayusha Swad</h3>
                  <p className="text-[10px] text-cream-300">Traditional Taste, Made with Love</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-cream-200 hover:text-white rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b border-turmeric-200">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search snacks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-turmeric-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-turmeric-400"
                />
                <Search className="w-4 h-4 text-earth-400 absolute left-3 top-3" />
              </form>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto py-2 px-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-earth-600 hover:bg-turmeric-100 font-medium text-sm transition"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-turmeric-500" />
                </Link>
              ))}

              <div className="pt-4 border-t border-turmeric-200 my-3">
                <p className="px-3 text-xs font-semibold text-earth-400 uppercase tracking-wider mb-2">
                  Browse by Category
                </p>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/shop?category=${encodeURIComponent(cat.name)}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-earth-500 hover:bg-cream-200 text-xs transition"
                  >
                    <span>{cat.name} ({cat.hindiName})</span>
                    <span className="text-[10px] text-saffron-600 font-medium bg-turmeric-100 px-2 py-0.5 rounded-full">
                      {cat.itemCount}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-turmeric-200 bg-cream-200 text-xs text-earth-500 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-turmeric-600" />
                <span>{BRAND_CONFIG.phone}</span>
              </div>
              <p className="text-[11px] text-earth-400">
                Crafted with pure ingredients and homemade care in India.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
