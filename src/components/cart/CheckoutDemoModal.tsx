"use client";

import React, { useState } from "react";
import { X, CheckCircle, MessageSquare, AlertCircle, Sparkles, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { BRAND_CONFIG } from "@/data/products";

export default function CheckoutDemoModal() {
  const { isCheckoutModalOpen, setIsCheckoutModalOpen, items, subtotal, shippingFee, finalTotal, clearCart } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCheckoutModalOpen) return null;

  const handleSimulateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      // Keep state showing success
    }, 500);
  };

  const handleWhatsAppOrder = () => {
    const orderItemsSummary = items
      .map((item) => `• ${item.product.name} (${item.selectedWeight}) x ${item.quantity} = ₹${item.unitPrice * item.quantity}`)
      .join("\n");

    const message = `Namaste Aayusha Swad! 🙏\n\nI would like to place an order for the following traditional snacks:\n\n${orderItemsSummary}\n\n*Total Amount:* ₹${finalTotal} (Shipping: ${shippingFee === 0 ? "FREE" : "₹" + shippingFee})\n\n*Name:* ${customerName || "Customer"}\n*Phone:* ${phone || "Not provided"}\n*Delivery Address:* ${address ? `${address}, ${city} - ${pincode}` : "To be confirmed"}\n\nPlease confirm product availability and delivery timeline. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encoded}`, "_blank");
  };

  const handleClose = () => {
    if (orderPlaced) {
      clearCart();
      setOrderPlaced(false);
    }
    setIsCheckoutModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-earth-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-cream-50 text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-turmeric-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-earth-500 to-earth-600 px-6 py-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-turmeric-300" />
              <h3 className="font-serif text-lg font-bold">
                {orderPlaced ? "Order Request Received" : "Checkout Showcase (Demo)"}
              </h3>
            </div>
            <button
              onClick={handleClose}
              className="text-cream-200 hover:text-white rounded-lg p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            {orderPlaced ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-earth-800">
                  Dhanyavaad! (Thank you!)
                </h4>
                <p className="text-sm text-earth-600 max-w-sm mx-auto">
                  Your demo order inquiry has been recorded. Since this is an interactive showcase version of <strong>Aayusha Swad</strong>, no real charge was made.
                </p>
                <div className="p-4 bg-turmeric-50 rounded-xl border border-turmeric-200 text-left text-xs text-earth-700 space-y-1">
                  <p className="font-semibold text-earth-800 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-saffron-500" /> Demo Order Summary:
                  </p>
                  <p>Total Items: {items.reduce((acc, i) => acc + i.quantity, 0)}</p>
                  <p>Order Value: ₹{finalTotal}</p>
                  <p>Customer: {customerName || "Showcase Guest"}</p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-olive-600 hover:bg-olive-700 text-white rounded-xl text-sm font-semibold transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                  <button
                    onClick={handleClose}
                    className="px-5 py-2.5 bg-earth-100 hover:bg-earth-200 text-earth-800 rounded-xl text-sm font-semibold transition"
                  >
                    Close Demo
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Showcase Notice Banner */}
                <div className="mb-5 p-3.5 bg-turmeric-100/70 border border-turmeric-300 rounded-xl flex items-start gap-2.5 text-xs text-earth-800">
                  <AlertCircle className="w-4 h-4 text-saffron-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Showcase Mode:</span> This website is currently a portfolio & client showcase. Real payment gateways and automatic bank settlements will be enabled soon. You can test the checkout workflow below or send your order through WhatsApp.
                  </div>
                </div>

                {/* Mini Order Summary */}
                <div className="mb-5 bg-white p-3.5 rounded-xl border border-earth-100 space-y-2 text-xs">
                  <div className="flex justify-between font-semibold text-earth-700 border-b pb-1.5">
                    <span>Order Summary ({items.length} items)</span>
                    <span className="text-saffron-600 font-bold">₹{finalTotal}</span>
                  </div>
                  <div className="max-h-24 overflow-y-auto space-y-1 pr-1 text-earth-600">
                    {items.map((i) => (
                      <div key={`${i.product.id}-${i.selectedWeight}`} className="flex justify-between">
                        <span>{i.product.name} ({i.selectedWeight}) × {i.quantity}</span>
                        <span>₹{i.unitPrice * i.quantity}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-1.5 border-t border-earth-100 flex justify-between text-earth-500 text-[11px]">
                    <span>Shipping:</span>
                    <span className="font-medium">{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span>
                  </div>
                </div>

                {/* Demo Order Form */}
                <form onSubmit={handleSimulateOrder} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-earth-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-turmeric-200 bg-white text-earth-800 focus:outline-none focus:ring-2 focus:ring-turmeric-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-earth-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-turmeric-200 bg-white text-earth-800 focus:outline-none focus:ring-2 focus:ring-turmeric-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-earth-700 mb-1">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 110001"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg border border-turmeric-200 bg-white text-earth-800 focus:outline-none focus:ring-2 focus:ring-turmeric-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-earth-700 mb-1">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      placeholder="House/Apartment, Street name"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-turmeric-200 bg-white text-earth-800 focus:outline-none focus:ring-2 focus:ring-turmeric-400"
                    />
                  </div>

                  <div className="pt-3 flex flex-col gap-2">
                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 bg-earth-500 hover:bg-earth-600 text-white font-semibold text-xs rounded-xl shadow transition text-center"
                    >
                      Simulate Test Checkout (₹{finalTotal})
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppOrder}
                      className="w-full py-2.5 px-4 bg-olive-600 hover:bg-olive-700 text-white font-semibold text-xs rounded-xl shadow transition flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Place / Enquire via WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
