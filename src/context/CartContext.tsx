"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Dress type with quantity
type Dress = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

// Context type
type CartContextType = {
  cart: Dress[];
  addToCart: (item: Omit<Dress, "quantity">) => void;
  removeFromCart: (id: number) => void;
};

// Create context
const CartContext = createContext<CartContextType | null>(null);

// Cart Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Dress[]>([]);

  // Add item or increase quantity
  const addToCart = (item: Omit<Dress, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((d) => d.id === item.id);
      if (existingItem) {
        return prevCart.map((d) =>
          d.id === item.id ? { ...d, quantity: d.quantity + 1 } : d
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
