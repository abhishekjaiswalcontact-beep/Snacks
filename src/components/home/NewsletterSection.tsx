"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, Sparkles, Send } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-cream-200 border-b border-turmeric-200 relative overflow-hidden">
      {/* Decorative Warm Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-rangoli-subtle opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-turmeric-100 border border-turmeric-300 text-xs font-semibold text-earth-800 uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
          Join The Aayusha Swad Family
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-earth-900 tracking-tight">
          Savour the Stories, Recipes & Festive Offers
        </h2>

        <p className="text-sm sm:text-base text-earth-600 mt-3 max-w-xl mx-auto font-sans leading-relaxed">
          Subscribe to receive seasonal Indian snack recipes, traditional cooking stories, and exclusive early access to our limited-batch festive hampers.
        </p>

        {isSubscribed ? (
          <div className="mt-8 p-4 bg-olive-100 border border-olive-300 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-3 text-olive-800 text-sm font-semibold animate-fadeIn">
            <CheckCircle className="w-5 h-5 text-olive-600 shrink-0" />
            <span>Dhanyavaad! You have joined our newsletter list (Demo).</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2"
          >
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-earth-400 absolute left-4 top-3.5" />
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-turmeric-300 bg-white text-earth-800 text-sm focus:outline-none focus:ring-2 focus:ring-turmeric-400 focus:border-transparent placeholder-earth-400 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-earth-500 hover:bg-earth-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 shrink-0"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-xs text-earth-400 mt-4">
          * Showcase element: We respect your privacy. No spam, only pure traditional warmth.
        </p>
      </div>
    </section>
  );
}
