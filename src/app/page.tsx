import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedSection from "@/components/home/FeaturedSection";
import BrandStorySection from "@/components/home/BrandStorySection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import GallerySection from "@/components/home/GallerySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategorySection />
      <FeaturedSection />
      <BrandStorySection />
      <WhyChooseUsSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
