"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Instagram, 
  Send, 
  CheckCircle, 
  Sparkles, 
  ChevronDown 
} from "lucide-react";
import { BRAND_CONFIG } from "@/data/products";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Namaste Aayusha Swad! 🙏\n\nMy Name: ${name || "Customer"}\nSubject: ${inquiryType}\nMessage: ${message || "I would like to inquire about traditional snacks & gifting options."}`;
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const faqs = [
    {
      q: "What is the shelf life of Aayusha Swad snacks?",
      a: "Our roasted makhana and savory namak para have a shelf life of 60 to 90 days in airtight packaging. Our Thekua and Nankhatai remain crisp and fragrant for up to 45 days when stored in a cool, dry place.",
    },
    {
      q: "Do you offer corporate gifting or bulk wedding orders?",
      a: "Yes! We specialize in curated heritage gift boxes with customized assortments of Desi Ghee Thekua, Nankhatai, and flavoured foxnuts for weddings, Diwali, corporate events, and family festivities. Reach out via WhatsApp or our contact form.",
    },
    {
      q: "Are your snacks fasting (Vrat) friendly?",
      a: "Our Himalayan Pink Salt Makhana is prepared with rock salt (Sendha Namak) and roasted in pure peanut oil, making it suitable for religious fasts (Vrat). We clearly label all ingredients on every product page.",
    },
    {
      q: "How does delivery work across India?",
      a: "We ship pan-India via express courier partners. Orders are dispatched within 24-48 hours. Shipping is completely FREE on all orders above ₹499.",
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50/50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-earth-600 via-earth-500 to-earth-600 text-white py-14 px-4 sm:px-6 lg:px-8 border-b-4 border-turmeric-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-rangoli-subtle opacity-15" />
        <div className="relative max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-turmeric-400/20 text-turmeric-300 text-xs font-semibold uppercase tracking-widest border border-turmeric-400/30">
            <Sparkles className="w-3.5 h-3.5 text-turmeric-300" />
            Connect With Us
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-sm sm:text-base text-cream-200 max-w-xl mx-auto font-sans">
            Whether you have questions about recipes, corporate gifting, or custom orders, our team is always ready to assist.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Contact Information & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-turmeric-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-saffron-600">
                  Quick Assistance
                </span>
                <h2 className="font-serif text-2xl font-bold text-earth-900">
                  Get In Touch
                </h2>
                <p className="text-xs text-earth-600">
                  Available Monday through Saturday, 10:00 AM to 7:00 PM IST.
                </p>
              </div>

              <div className="space-y-4 text-sm text-earth-700">
                <div className="flex items-start gap-3 p-3.5 bg-cream-100/70 rounded-2xl border border-turmeric-100">
                  <Phone className="w-5 h-5 text-turmeric-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-earth-900">Customer Helpline</p>
                    <p className="text-xs text-earth-600 mt-0.5">{BRAND_CONFIG.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-cream-100/70 rounded-2xl border border-turmeric-100">
                  <Mail className="w-5 h-5 text-turmeric-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-earth-900">Email Address</p>
                    <p className="text-xs text-earth-600 mt-0.5 break-all">{BRAND_CONFIG.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-cream-100/70 rounded-2xl border border-turmeric-100">
                  <MapPin className="w-5 h-5 text-turmeric-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-earth-900">Kitchen & Origin</p>
                    <p className="text-xs text-earth-600 mt-0.5">{BRAND_CONFIG.address}</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Order Card */}
              <div className="p-5 bg-gradient-to-br from-olive-600 to-olive-700 text-white rounded-2xl shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-turmeric-300" />
                  <h3 className="font-serif font-bold text-base">Direct WhatsApp Helpline</h3>
                </div>
                <p className="text-xs text-cream-200 leading-relaxed">
                  Chat directly with our kitchen team for speedy responses, customized box inquiries, or order updates.
                </p>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-2.5 px-4 bg-white text-olive-800 hover:bg-cream-100 rounded-xl font-bold text-xs shadow transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-olive-700" />
                  <span>Start WhatsApp Chat</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-bold text-earth-600">Follow Our Journey:</span>
                <a
                  href={BRAND_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-cream-200 text-earth-700 hover:text-earth-900 hover:bg-turmeric-200 transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-turmeric-200 shadow-sm">
              <div className="space-y-1 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-saffron-600">
                  Send a Note
                </span>
                <h2 className="font-serif text-2xl font-bold text-earth-900">
                  Customer & Bulk Order Inquiries
                </h2>
                <p className="text-xs text-earth-600">
                  Fill in your details and we will reply within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-olive-50 rounded-2xl border border-olive-200 space-y-4 animate-fadeIn">
                  <div className="w-14 h-14 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-earth-900">
                    Dhanyavaad, {name || "Friend"}!
                  </h3>
                  <p className="text-xs sm:text-sm text-earth-700 max-w-sm mx-auto leading-relaxed">
                    Your inquiry has been received (Showcase Demo). Our customer care team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2 bg-olive-600 text-white rounded-full text-xs font-semibold hover:bg-olive-700 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-earth-800 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Verma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-turmeric-200 bg-cream-50 text-earth-900 focus:outline-none focus:ring-2 focus:ring-turmeric-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-earth-800 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. ramesh@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-turmeric-200 bg-cream-50 text-earth-900 focus:outline-none focus:ring-2 focus:ring-turmeric-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-earth-800 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-turmeric-200 bg-cream-50 text-earth-900 focus:outline-none focus:ring-2 focus:ring-turmeric-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-earth-800 uppercase tracking-wider mb-1.5">
                        Inquiry Nature
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-turmeric-200 bg-cream-50 text-earth-900 focus:outline-none focus:ring-2 focus:ring-turmeric-400 cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Corporate / Festive Gifting">Corporate / Festive Gifting</option>
                        <option value="Bulk Order Request">Bulk Order Request</option>
                        <option value="Product Feedback">Product Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-earth-800 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us what you're looking for or ask any questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-turmeric-200 bg-cream-50 text-earth-900 focus:outline-none focus:ring-2 focus:ring-turmeric-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-earth-500 hover:bg-earth-600 text-white rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                    >
                      <span>Send Message (Demo)</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-turmeric-200 shadow-sm space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-600">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl font-bold text-earth-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-earth-600">
              Everything you need to know about our ingredients, ordering, and delivery.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-turmeric-200 rounded-2xl overflow-hidden bg-cream-50/60 transition"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-earth-900 hover:text-earth-700 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-turmeric-600 shrink-0 transition-transform ${
                      activeFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-earth-700 leading-relaxed font-sans border-t border-cream-200 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
