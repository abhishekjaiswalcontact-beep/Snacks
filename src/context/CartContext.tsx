"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types";
import { BRAND_CONFIG } from "@/data/products";

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity?: number,
    selectedWeight?: string,
    unitPrice?: number
  ) => void;
  removeFromCart: (productId: string, selectedWeight: string) => void;
  updateQuantity: (
    productId: string,
    selectedWeight: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  shippingFee: number;
  finalTotal: number;
  freeShippingRemaining: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize from localStorage safely
  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem("aayusha_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (isMounted) {
      try {
        localStorage.setItem("aayusha_cart", JSON.stringify(items));
      } catch (e) {
        console.error("Failed to save cart to localStorage", e);
      }
    }
  }, [items, isMounted]);

  const addToCart = (
    product: Product,
    quantity: number = 1,
    selectedWeight?: string,
    unitPrice?: number
  ) => {
    const weight = selectedWeight || product.weight;
    const price = unitPrice !== undefined ? unitPrice : product.price;

    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedWeight === weight
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            quantity,
            selectedWeight: weight,
            unitPrice: price,
          },
        ];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, selectedWeight: string) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(item.product.id === productId && item.selectedWeight === selectedWeight)
      )
    );
  };

  const updateQuantity = (
    productId: string,
    selectedWeight: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedWeight);
      return;
    }

    setItems((prev) =>
      prev.map((item) => {
        if (
          item.product.id === productId &&
          item.selectedWeight === selectedWeight
        ) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );

  const freeShippingThreshold = BRAND_CONFIG.freeShippingThreshold;
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee =
    subtotal === 0 || subtotal >= freeShippingThreshold
      ? 0
      : BRAND_CONFIG.standardShippingFee;
  const finalTotal = subtotal + shippingFee;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        totalItems,
        subtotal,
        shippingFee,
        finalTotal,
        freeShippingRemaining,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
