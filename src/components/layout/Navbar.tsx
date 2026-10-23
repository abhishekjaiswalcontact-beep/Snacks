"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Phone, 
  Sparkles, 
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Heart,
  ShieldCheck,
  Award
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND_CONFIG, CATEGORIES } from "@/data/products";

// Delicate Traditional Indian Mandala Motif
function TraditionalMandalaIcon({ className = "w-4 h-4 text-turmeric-500" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="2.5" fill="currentColor" fillOpacity="0.25" />
      <path d="M12 2C12 2 15 7 15 12C15 17 12 22 12 22C12 22 9 17 9 12C9 7 12 2 12 2Z" />
      <path d="M2 12C2 12 7 9 12 9C17 9 22 12 22 12C22 12 17 15 12 15C7 15 2 12 2 12Z" />
      <circle cx="12" cy="3" r="0.75" fill="currentColor" />
      <circle cx="12" cy="21" r="0.75" fill="currentColor" />
      <circle cx="3" cy="12" r="0.75" fill="currentColor" />
      <circle cx="21" cy="12" r="0.75" fill="currentColor" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, setIsCartOpen } = useCart();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [snacksDropdownOpen, setSnacksDropdownOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Track scroll position for sticky navbar adaptation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track query string safely on client to avoid Next.js hydration issues
  useEffect(() => {
    const updateSearch = () => {
      if (typeof window !== "undefined") {
        setCurrentQuery(window.location.search);
      }
    };
    updateSearch();
    window.addEventListener("popstate", updateSearch);
    return () => window.removeEventListener("popstate", updateSearch);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Focus search input when search is toggled
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  // Helper to determine if link is currently active
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href.includes("?")) {
      const [path, query] = href.split("?");
      return pathname === path && currentQuery.includes(query);
    }
    if (href === "/shop") {
      return (
        pathname === "/shop" &&
        (!currentQuery || currentQuery === "" || currentQuery === "?category=All")
      );
    }
    return pathname.startsWith(href);
  };

  // Navigation Links required:
  // Home, Shop All, Makhana, Thekua, Traditional Snacks, Cookies, About Us, Contact
  const navLinks = [
    { name: "Home", href: "/", hasDropdown: false },
    { name: "Shop All", href: "/shop", hasDropdown: true, dropdownType: "all" },
    { name: "Makhana", href: "/shop?category=Makhana", hasDropdown: false },
    { name: "Thekua", href: "/shop?category=Thekua", hasDropdown: false },
    { 
      name: "Traditional Snacks", 
      href: "/shop?category=Traditional+Indian+Snacks", 
      hasDropdown: true, 
      dropdownType: "snacks" 
    },
    { name: "Cookies", href: "/shop?category=Traditional+Cookies", hasDropdown: false },
    { name: "About Us", href: "/about", hasDropdown: false },
    { name: "Contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT & TRUST RIBBON */}
      <div className="bg-[#2A170D] text-cream-100 text-xs py-2 px-4 border-b border-turmeric-500/20 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Announcement */}
          <div className="flex items-center gap-2 mx-auto md:mx-0 text-center">
            <Sparkles className="w-3.5 h-3.5 text-turmeric-400 shrink-0 animate-pulse" />
            <span className="font-sans font-medium tracking-wide text-cream-200">
              Festive Warmth: Free Delivery Across India on Orders Above ₹{BRAND_CONFIG.freeShippingThreshold}!
            </span>
            <span className="hidden lg:inline-block text-turmeric-400 font-serif text-[11px] px-2 py-0.5 rounded-full bg-turmeric-500/10 border border-turmeric-400/30">
              परंपरा का स्वाद
            </span>
          </div>

          {/* Right Trust Indicators */}
          <div className="hidden md:flex items-center gap-5 text-xs text-cream-300">
            <span className="flex items-center gap-1.5 text-cream-300/90 hover:text-turmeric-300 transition">
              <ShieldCheck className="w-3.5 h-3.5 text-turmeric-400" />
              <span>Handcrafted in Small Batches</span>
            </span>
            <span className="text-turmeric-500/60">•</span>
            <a
              href={`tel:${BRAND_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 hover:text-white transition group"
              title="Call Customer Care"
            >
              <Phone className="w-3 h-3 text-turmeric-400 group-hover:scale-110 transition-transform" />
              <span>Helpline: {BRAND_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (BRAND IDENTITY + SEARCH + CART + SHOP NOW) */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FFFDF9]/95 backdrop-blur-md shadow-md border-b border-turmeric-200/80"
            : "bg-[#FFFDF9] border-b border-turmeric-100"
        }`}
      >
        {/* Subtle Indian ornamental top hairline */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-turmeric-400 to-transparent opacity-80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6 py-2.5 sm:py-3.5">
            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-1 text-[#2A170D] hover:text-turmeric-600 hover:bg-cream-200/60 rounded-lg focus:outline-none transition"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* BRAND LOGO & NAME & TAGLINE */}
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-4 group shrink-0"
              title="Aayusha Swad — Home"
            >
              {/* Circular Emblem Container for logo.png */}
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-15 lg:h-15 rounded-full p-[2px] bg-gradient-to-tr from-turmeric-500 via-saffron-500 to-earth-600 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF6F0] flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Aayusha Swad Brand Logo"
                    width={60}
                    height={60}
                    priority
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Brand Typography */}
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-xl sm:text-2xl lg:text-[27px] font-extrabold tracking-tight text-[#2A170D] group-hover:text-earth-700 transition-colors">
                    Aayusha Swad
                  </span>
                  <span className="text-[10px] sm:text-xs font-serif font-bold text-turmeric-600 hidden sm:inline-block">
                    ™
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] sm:text-xs font-serif italic font-medium tracking-wide text-saffron-600 group-hover:text-saffron-700 transition-colors">
                    Traditional Taste, Made with Love
                  </span>
                </div>
              </div>
            </Link>

            {/* CENTER SEARCH BAR (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-md mx-4">
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search makhana, thekua, nankhatai..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-20 py-2 text-xs sm:text-sm rounded-full border border-turmeric-200/90 bg-cream-100/70 hover:bg-white text-earth-800 placeholder-earth-400 focus:outline-none focus:border-turmeric-500 focus:ring-2 focus:ring-turmeric-200/50 shadow-sm transition"
                />
                <Search className="w-4 h-4 text-turmeric-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 px-3.5 py-1 bg-turmeric-400 hover:bg-turmeric-500 text-earth-900 text-xs font-bold rounded-full transition shadow-xs"
                >
                  Search
                </button>
              </form>
            </div>

            {/* RIGHT ACTION BUTTONS: Search, Cart, SHOP NOW */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile / Tablet Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="lg:hidden p-2 text-[#2A170D] hover:text-turmeric-600 hover:bg-cream-200/60 rounded-full transition"
                aria-label="Toggle search input"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 sm:p-2.5 text-[#2A170D] hover:text-turmeric-600 hover:bg-cream-200/70 rounded-full transition flex items-center justify-center group"
                aria-label={`Shopping Cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-105" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-saffron-500 to-turmeric-500 text-white font-bold text-[10px] sm:text-[11px] rounded-full min-w-[19px] h-[19px] px-1 flex items-center justify-center shadow-md animate-bounce ring-2 ring-white">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Prominent "SHOP NOW" CTA Button */}
              <Link
                href="/shop"
                className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#2A170D] hover:bg-[#3F2314] text-white text-xs sm:text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 group border border-turmeric-400/30"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* COLLAPSIBLE SEARCH BAR (for Mobile / Tablet or triggered search) */}
          {searchOpen && (
            <div className="lg:hidden pt-2 pb-3 border-t border-turmeric-200 animate-fadeIn">
              <form onSubmit={handleSearchSubmit} className="relative max-w-xl mx-auto flex items-center">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search makhana, thekua, nankhatai, mathri..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-24 py-2.5 rounded-full border border-turmeric-300 bg-white text-earth-800 text-sm focus:outline-none focus:ring-2 focus:ring-turmeric-400 placeholder-earth-400 shadow-sm"
                />
                <Search className="w-4 h-4 text-turmeric-600 absolute left-3.5 top-3.5" />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 px-4 py-1.5 bg-turmeric-400 hover:bg-turmeric-500 text-earth-900 text-xs font-bold rounded-full transition shadow-xs"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>

        {/* 3. DEDICATED DESKTOP NAVIGATION TIER */}
        <nav
          className="hidden lg:block border-t border-b border-turmeric-200/60 bg-[#FAF5EC]/90"
          aria-label="Desktop Navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-1 xl:gap-3 py-1 relative">
              {/* Subtle Ornamental Left Motif */}
              <div className="hidden xl:flex items-center gap-1.5 text-turmeric-400 mr-2 opacity-60">
                <TraditionalMandalaIcon className="w-3.5 h-3.5" />
              </div>

              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href);

                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => {
                      if (link.dropdownType === "all") setShopDropdownOpen(true);
                      if (link.dropdownType === "snacks") setSnacksDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      if (link.dropdownType === "all") setShopDropdownOpen(false);
                      if (link.dropdownType === "snacks") setSnacksDropdownOpen(false);
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide rounded-md transition-all relative ${
                        isActive
                          ? "text-[#2A170D] font-bold bg-turmeric-200/50"
                          : "text-earth-600 hover:text-[#2A170D] hover:bg-cream-200/70"
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && (
                        <ChevronDown className="w-3.5 h-3.5 text-turmeric-600 transition-transform group-hover:rotate-180" />
                      )}

                      {/* Golden active indicator underline */}
                      <span
                        className={`absolute bottom-0.5 left-2 right-2 h-[2px] bg-gradient-to-r from-turmeric-400 to-saffron-500 rounded-full transition-all duration-200 ${
                          isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>

                    {/* DROPDOWN: SHOP ALL MEGA MENU */}
                    {link.dropdownType === "all" && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 transition-all duration-200 z-50 ${
                          shopDropdownOpen
                            ? "opacity-100 visible translate-y-0 pointer-events-auto"
                            : "opacity-0 invisible -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="w-[680px] bg-[#FFFDF9] rounded-2xl shadow-xl border border-turmeric-200/90 p-5 overflow-hidden">
                          {/* Dropdown Header */}
                          <div className="flex items-center justify-between border-b border-turmeric-100 pb-3 mb-4">
                            <div className="flex items-center gap-2">
                              <TraditionalMandalaIcon className="w-4 h-4 text-turmeric-500" />
                              <span className="font-serif font-bold text-sm text-[#2A170D]">
                                Traditional Indian Specialties
                              </span>
                            </div>
                            <span className="text-[11px] text-saffron-600 font-serif italic">
                              100% Desi Ghee & Roasted Goodness
                            </span>
                          </div>

                          {/* Category Grid */}
                          <div className="grid grid-cols-2 gap-3">
                            {CATEGORIES.map((cat) => (
                              <Link
                                key={cat.id}
                                href={`/shop?category=${encodeURIComponent(cat.name)}`}
                                onClick={() => setShopDropdownOpen(false)}
                                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cream-200/80 border border-transparent hover:border-turmeric-200 transition group/cat"
                              >
                                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-turmeric-100 border border-turmeric-200">
                                  <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover group-hover/cat:scale-105 transition-transform duration-300"
                                    sizes="48px"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <h4 className="font-serif font-bold text-sm text-[#2A170D] group-hover/cat:text-saffron-700 transition">
                                      {cat.name}
                                    </h4>
                                    <span className="text-[10px] text-saffron-600 font-serif">
                                      {cat.hindiName}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-earth-500 truncate mt-0.5">
                                    {cat.tagline}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Dropdown Footer Strip */}
                          <div className="mt-4 pt-3 border-t border-turmeric-100 flex items-center justify-between bg-cream-100/60 -mx-5 -mb-5 px-5 py-3">
                            <span className="text-xs text-earth-600">
                              Free Shipping on orders above ₹{BRAND_CONFIG.freeShippingThreshold}
                            </span>
                            <Link
                              href="/shop"
                              onClick={() => setShopDropdownOpen(false)}
                              className="text-xs font-bold text-[#2A170D] hover:text-saffron-700 flex items-center gap-1 group/all"
                            >
                              <span>Explore Entire Collection</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* DROPDOWN: TRADITIONAL SNACKS */}
                    {link.dropdownType === "snacks" && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-1 transition-all duration-200 z-50 ${
                          snacksDropdownOpen
                            ? "opacity-100 visible translate-y-0 pointer-events-auto"
                            : "opacity-0 invisible -translate-y-2 pointer-events-none"
                        }`}
                      >
                        <div className="w-[320px] bg-[#FFFDF9] rounded-2xl shadow-xl border border-turmeric-200/90 p-4">
                          <div className="flex items-center gap-1.5 border-b border-turmeric-100 pb-2 mb-3">
                            <TraditionalMandalaIcon className="w-3.5 h-3.5 text-turmeric-500" />
                            <span className="font-serif font-bold text-xs text-[#2A170D]">
                              Authentic Regional Flavours
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            <Link
                              href="/shop?category=Thekua"
                              onClick={() => setSnacksDropdownOpen(false)}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-cream-200/80 text-xs text-earth-700 font-medium transition"
                            >
                              <span>Handcrafted Bihari Thekua</span>
                              <span className="text-[10px] text-saffron-600 font-serif">ठेकुआ</span>
                            </Link>
                            <Link
                              href="/shop?category=Traditional+Indian+Snacks"
                              onClick={() => setSnacksDropdownOpen(false)}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-cream-200/80 text-xs text-earth-700 font-medium transition"
                            >
                              <span>Home-style Poha Chivda</span>
                              <span className="text-[10px] text-saffron-600 font-serif">चिवड़ा</span>
                            </Link>
                            <Link
                              href="/shop?category=Namak+Para"
                              onClick={() => setSnacksDropdownOpen(false)}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-cream-200/80 text-xs text-earth-700 font-medium transition"
                            >
                              <span>Crisp Nimki & Mathri</span>
                              <span className="text-[10px] text-saffron-600 font-serif">नमक पारा</span>
                            </Link>
                            <Link
                              href="/shop?category=Traditional+Cookies"
                              onClick={() => setSnacksDropdownOpen(false)}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-cream-200/80 text-xs text-earth-700 font-medium transition"
                            >
                              <span>Desi Ghee Nankhatai</span>
                              <span className="text-[10px] text-saffron-600 font-serif">नानखटाई</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Subtle Ornamental Right Motif */}
              <div className="hidden xl:flex items-center gap-1.5 text-turmeric-400 ml-2 opacity-60">
                <TraditionalMandalaIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* 4. MOBILE DRAWER NAVIGATION MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop with Smooth Fade */}
          <div
            className="fixed inset-0 bg-[#1A0F0A]/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 left-0 max-w-sm w-full bg-[#FFFDF9] shadow-2xl flex flex-col z-10 border-r border-turmeric-300 animate-slideIn">
            {/* Drawer Header with Brand Logo */}
            <div className="p-4 bg-[#2A170D] text-white flex items-center justify-between border-b border-turmeric-400/30">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="relative w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-turmeric-400 via-saffron-500 to-earth-600 shadow-sm shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/logo.png"
                      alt="Aayusha Swad"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-serif font-bold text-base text-cream-100 tracking-tight">
                    Aayusha Swad
                  </h3>
                  <p className="text-[10px] font-serif italic text-saffron-300">
                    Traditional Taste, Made with Love
                  </p>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-cream-200 hover:text-white hover:bg-earth-600 rounded-full transition"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Search Field */}
            <div className="p-4 border-b border-turmeric-100 bg-cream-100/60">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search snacks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-full border border-turmeric-200 bg-white text-sm text-earth-800 focus:outline-none focus:ring-2 focus:ring-turmeric-400 placeholder-earth-400"
                />
                <Search className="w-4 h-4 text-turmeric-600 absolute left-3 top-1/2 -translate-y-1/2" />
              </form>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 overflow-y-auto py-3 px-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition ${
                      isActive
                        ? "bg-turmeric-200/60 text-[#2A170D] font-bold"
                        : "text-earth-700 hover:bg-cream-200/80"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-turmeric-500" />
                  </Link>
                );
              })}

              {/* Categorized Snack Links */}
              <div className="pt-4 border-t border-turmeric-100 my-3">
                <div className="flex items-center gap-1.5 px-3 mb-2">
                  <TraditionalMandalaIcon className="w-3.5 h-3.5 text-turmeric-600" />
                  <p className="text-xs font-serif font-bold text-earth-500 uppercase tracking-wider">
                    Browse Specialties
                  </p>
                </div>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/shop?category=${encodeURIComponent(cat.name)}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2 rounded-lg text-earth-600 hover:bg-cream-200/80 text-xs transition"
                  >
                    <div className="flex items-center gap-2">
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-saffron-600 font-serif">
                        ({cat.hindiName})
                      </span>
                    </div>
                    <span className="text-[10px] text-earth-600 font-medium bg-turmeric-100 px-2 py-0.5 rounded-full border border-turmeric-200">
                      {cat.itemCount} items
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Drawer Footer CTA & Helpline */}
            <div className="p-4 border-t border-turmeric-200 bg-cream-100 space-y-3">
              {/* Prominent Mobile SHOP NOW Button */}
              <Link
                href="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#2A170D] hover:bg-[#3F2314] text-white text-xs font-bold tracking-wider uppercase shadow-md transition"
              >
                <span>Shop All Snacks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Customer Care Hotline */}
              <div className="flex items-center justify-between text-xs text-earth-600 pt-1">
                <a
                  href={`tel:${BRAND_CONFIG.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-1.5 hover:text-turmeric-700 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-turmeric-600" />
                  <span>{BRAND_CONFIG.phone}</span>
                </a>
                <span className="text-[10px] text-saffron-700 font-medium">
                  Free Shipping ₹{BRAND_CONFIG.freeShippingThreshold}+
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
