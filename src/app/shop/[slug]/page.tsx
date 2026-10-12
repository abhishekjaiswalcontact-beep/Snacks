import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Star, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Share2, 
  Heart, 
  ChevronRight,
  PackageOpen,
  Info
} from "lucide-react";
import { PRODUCTS, BRAND_CONFIG } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";
import ProductCard from "@/components/products/ProductCard";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Snack Not Found | Aayusha Swad",
    };
  }

  return {
    title: `${product.name} | Aayusha Swad - Traditional Indian Snacks`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Aayusha Swad`,
      description: product.shortDescription,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  // Related products from same category or random
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-cream-50/60 pb-20">
      {/* Breadcrumbs */}
      <div className="bg-cream-100/80 border-b border-turmeric-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-earth-500 overflow-x-auto">
          <Link href="/" className="hover:text-earth-800 transition">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-turmeric-500 shrink-0" />
          <Link href="/shop" className="hover:text-earth-800 transition">
            Shop
          </Link>
          <ChevronRight className="w-3 h-3 text-turmeric-500 shrink-0" />
          <Link
            href={`/shop?category=${encodeURIComponent(product.category)}`}
            className="hover:text-earth-800 transition whitespace-nowrap"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3 text-turmeric-500 shrink-0" />
          <span className="font-semibold text-earth-800 truncate">
            {product.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Client Product View (Image gallery, pack size selector, cart trigger) */}
        <ProductDetailClient product={product} />

        {/* Detailed Tabs / Information Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-turmeric-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5 text-earth-800 font-serif font-bold text-lg border-b border-cream-200 pb-3">
              <Sparkles className="w-5 h-5 text-turmeric-500" />
              <h3>Pure Ingredients</h3>
            </div>
            <p className="text-xs text-earth-500">
              Only authentic, recognizable pantry ingredients. No hidden chemicals or artificial colors.
            </p>
            <ul className="space-y-2 pt-2 text-xs sm:text-sm text-earth-700">
              {product.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-turmeric-500" />
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Storage & Freshness */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-turmeric-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5 text-earth-800 font-serif font-bold text-lg border-b border-cream-200 pb-3">
              <PackageOpen className="w-5 h-5 text-saffron-500" />
              <h3>Storage & Freshness</h3>
            </div>
            <p className="text-xs text-earth-500">
              Tips to keep your traditional snacks fresh and delightfully crisp:
            </p>
            <p className="text-xs sm:text-sm text-earth-700 leading-relaxed pt-2">
              {product.storageInstructions}
            </p>
            <div className="p-3 bg-cream-100 rounded-xl text-[11px] text-earth-600 space-y-1">
              <p className="font-semibold text-earth-800">Moisture-Lock Seal:</p>
              <p>Packaged in food-grade airtight pouches to retain traditional crispness during transit.</p>
            </div>
          </div>

          {/* Heritage Promise */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-turmeric-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5 text-earth-800 font-serif font-bold text-lg border-b border-cream-200 pb-3">
              <ShieldCheck className="w-5 h-5 text-olive-600" />
              <h3>The Aayusha Promise</h3>
            </div>
            <p className="text-xs text-earth-500">
              Our core commitments to your tea-time table:
            </p>
            <div className="space-y-2 pt-2 text-xs text-earth-700">
              <div className="flex items-start gap-2">
                <span className="text-olive-600 font-bold">✓</span>
                <span>Handcrafted in small hygienic batches for maximum freshness</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-olive-600 font-bold">✓</span>
                <span>Authentic time-tested recipes inspired by home cooking</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-olive-600 font-bold">✓</span>
                <span>Free delivery across India on orders above ₹{BRAND_CONFIG.freeShippingThreshold}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Snacks Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-turmeric-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase font-bold text-saffron-600 tracking-wider">
                  You Might Also Relish
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-earth-900 mt-1">
                  More from {product.category}
                </h3>
              </div>
              <Link
                href={`/shop?category=${encodeURIComponent(product.category)}`}
                className="text-xs sm:text-sm font-bold text-earth-800 hover:text-saffron-600 transition"
              >
                View Category
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
