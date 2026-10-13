import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  BookOpen, 
  Flame, 
  UtensilsCrossed, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { BRAND_CONFIG } from "@/data/products";

export const metadata: Metadata = {
  title: "About Us | Aayusha Swad - Traditional Taste, Made with Love",
  description: "Learn about Aayusha Swad's journey, heritage recipes, small batch craftsmanship, and our love for authentic Indian snacks.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50/50 pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-earth-600 via-earth-500 to-earth-600 text-white py-16 px-4 sm:px-6 lg:px-8 border-b-4 border-turmeric-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-rangoli-subtle opacity-15" />
        <div className="relative max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-400/20 text-turmeric-300 text-xs font-semibold uppercase tracking-widest border border-turmeric-400/30">
            <Sparkles className="w-3.5 h-3.5 text-turmeric-300" />
            Our Heritage Story
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Bringing the Taste of Tradition to Every Home.
          </h1>
          <p className="text-base sm:text-lg text-cream-200 max-w-2xl mx-auto font-sans leading-relaxed">
            Aayusha Swad was founded with a devoted promise: to preserve the authentic flavours, homemade goodness, and festive joy of traditional Indian snacking.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-16">
        
        {/* Section 1: The Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-earth-800">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 block">
              Where It All Began
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-earth-900 leading-snug">
              Nostalgia from the Heart of Indian Kitchens
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-earth-700 leading-relaxed font-sans">
              <p>
                In almost every Indian home, memories are tied to aromas: the sizzle of whole spices hitting warm oil, the sweet scent of jaggery and green cardamom bubbling on winter afternoons, and the festive crunch of Thekua being hand-pressed before dawn.
              </p>
              <p>
                As modern snack aisles filled with mass-produced packets stuffed with palm oils, artificial flavours, and chemical preservatives, we realized something precious was being forgotten — the authentic, wholesome goodness of genuine home cooking.
              </p>
              <p>
                <strong>Aayusha Swad</strong> was conceived to restore that sacred connection. We started with hand-moulded Bihari Thekua, slowly expanded to nutrient-packed roasted Makhana, flaky Methi Mathri, and crumbly Nankhatai, treating every batch with the devotion of a family kitchen.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-cream-100">
              <Image
                src="/thek.png"
                alt="Aayusha Swad Handcrafted Thekua"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif text-xl font-bold">Small-Batch Artisanal Care</p>
                <p className="text-xs text-cream-200 mt-0.5">Slow cooked, hand packed, and delivered fresh across India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Four Core Brand Values */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-turmeric-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-600">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl font-bold text-earth-900">
              What We Stand For
            </h2>
            <p className="text-xs sm:text-sm text-earth-600">
              These four pillars define every snack we bake, roast, and package at Aayusha Swad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-cream-100/60 border border-turmeric-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-turmeric-200 text-earth-900 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5 text-turmeric-700" />
              </div>
              <h3 className="font-serif font-bold text-lg text-earth-900">Traditional Recipes</h3>
              <p className="text-xs text-earth-600 leading-relaxed">
                Inherited methods and ancestral spice blends that respect regional culinary techniques.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-100/60 border border-turmeric-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-olive-200 text-earth-900 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-olive-700" />
              </div>
              <h3 className="font-serif font-bold text-lg text-earth-900">Clean Ingredients</h3>
              <p className="text-xs text-earth-600 leading-relaxed">
                Jumbo lotus seeds, whole wheat atta, natural jaggery, pure ghee, and unadulterated ground spices.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-100/60 border border-turmeric-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-saffron-200 text-earth-900 flex items-center justify-center font-bold">
                <Flame className="w-5 h-5 text-saffron-700" />
              </div>
              <h3 className="font-serif font-bold text-lg text-earth-900">Authentic Flavours</h3>
              <p className="text-xs text-earth-600 leading-relaxed">
                No chemical flavour enhancers or excessive colors. Genuine Indian taste that warms the soul.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-100/60 border border-turmeric-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-earth-200 text-earth-900 flex items-center justify-center font-bold">
                <Heart className="w-5 h-5 text-earth-700" />
              </div>
              <h3 className="font-serif font-bold text-lg text-earth-900">Made with Love</h3>
              <p className="text-xs text-earth-600 leading-relaxed">
                Crafted in small hygienic batches with the warmth, patience, and generosity of a home kitchen.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Legal & Configurable Policies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs text-earth-700">
          <div id="privacy" className="bg-white p-6 rounded-2xl border border-cream-300 space-y-2">
            <h4 className="font-serif font-bold text-sm text-earth-900">Privacy Policy</h4>
            <p className="text-earth-600 leading-relaxed">
              We respect your privacy. Any customer contact information collected for orders or queries is kept safe and never shared with third parties.
            </p>
          </div>

          <div id="terms" className="bg-white p-6 rounded-2xl border border-cream-300 space-y-2">
            <h4 className="font-serif font-bold text-sm text-earth-900">Terms & Conditions</h4>
            <p className="text-earth-600 leading-relaxed">
              All product prices are stated in Indian Rupees (INR) and include applicable taxes. We maintain strict food safety standards across all processes.
            </p>
          </div>

          <div id="shipping" className="bg-white p-6 rounded-2xl border border-cream-300 space-y-2">
            <h4 className="font-serif font-bold text-sm text-earth-900">Shipping & Delivery</h4>
            <p className="text-earth-600 leading-relaxed">
              Orders are packaged in airtight protective boxes and dispatched within 24-48 hours. Free shipping applies on orders above ₹{BRAND_CONFIG.freeShippingThreshold}.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-earth-500 hover:bg-earth-600 text-white rounded-full font-bold text-sm shadow-md transition"
          >
            <span>Explore Our Traditional Snacks Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
