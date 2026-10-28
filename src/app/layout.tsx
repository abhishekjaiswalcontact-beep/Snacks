import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import CheckoutDemoModal from "@/components/cart/CheckoutDemoModal";

export const metadata: Metadata = {
  title: {
    default: "Aayusha Swad — Traditional Taste, Made with Love",
    template: "%s | Aayusha Swad",
  },
  description:
    "Authentic Indian traditional snacks, roasted flavoured makhana, and handcrafted Bihari thekua. Pure ingredients, homemade goodness.",
  keywords: [
    "Aayusha Swad",
    "Indian snacks",
    "Makhana",
    "Peri Peri Makhana",
    "Cream and Onion Makhana",
    "Pudina Makhana",
    "Salted and Black Pepper Makhana",
    "Tangy Tomato Makhana",
    "Traditional Thekua",
    "Bihari Thekua",
    "Desi Ghee snacks",
    "Homemade snacks online",
  ],
  authors: [{ name: "Aayusha Swad" }],
  creator: "Aayusha Swad",
  publisher: "Aayusha Swad",
  metadataBase: new URL("https://aayushaswad.com"),
  openGraph: {
    title: "Aayusha Swad — Traditional Taste, Made with Love",
    description:
      "Authentic Indian traditional snacks, roasted flavoured makhana, handcrafted Bihari thekua, and heirloom sweets.",
    url: "https://aayushaswad.com",
    siteName: "Aayusha Swad",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Aayusha Swad Traditional Snacks",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans selection:bg-turmeric-300 selection:text-earth-900">
        <CartProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <CartDrawer />
          <CheckoutDemoModal />
        </CartProvider>
      </body>
    </html>
  );
}
