"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavigationMenuDemo } from "./NavBar/NavBar";
import { useCart } from "@/context/CartContext";

type Dress = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const dresses: Dress[] = [
  { id: 1, name: "Dress1", price: 999, image: "/images/shop25.jpg" },
  { id: 2, name: "Dress2", price: 2499, image: "/images/shop21.jpg" },
  { id: 3, name: "Dress3", price: 799, image: "/images/shop22.jpg" },
  { id: 4, name: "Dress4", price: 999, image: "/images/shop16.jpg" },
  { id: 5, name: "Dress5", price: 2499, image: "/images/shop20.jpg" },
  { id: 6, name: "Dress6", price: 799, image: "/images/shop19.jpg" },
  { id: 7, name: "Dress7", price: 999, image: "/images/shop15.jpg" },
  { id: 8, name: "Dress8", price: 2499, image: "/images/shop17.jpg" },
  { id: 9, name: "Dress9", price: 799, image: "/images/shop16.jpg" },
  { id: 10, name: "Dress10", price: 999, image: "/images/shop1.webp" },
  { id: 11, name: "Dress11", price: 2499, image: "/images/shop14.jpg" },
  { id: 12, name: "Dress12", price: 799, image: "/images/shop2.webp" },
  { id: 13, name: "Dress13", price: 999, image: "/images/shop12.jpg" },
  { id: 14, name: "Dress14", price: 2499, image: "/images/shop22.jpg" },
  { id: 15, name: "Dress15", price: 799, image: "/images/shop0.jpeg" },
  { id: 16, name: "Dress16", price: 799, image: "/images/shop11.jpg" },
  { id: 17, name: "Dress17", price: 999, image: "/images/shop9.jpg" },
  { id: 18, name: "Dress18", price: 2499, image: "/images/shop23.jpg" },
  { id: 19, name: "Dress19", price: 799, image: "/images/shop24.jpg" },
  { id: 20, name: "Dress20", price: 799, image: "/images/shop0.jpeg" },
];

const Shop = () => {
  const { cart, addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 pt-10">
      <NavigationMenuDemo cart={cart} />

      <h1 className="text-3xl font-bold mb-6">🍭 Shop All Dresses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dresses.map((dress) => {
          const itemInCart = cart.find((item) => item.id === dress.id);

          return (
            <Card key={dress.id}>
              <CardHeader>
                <Image
                  src={dress.image}
                  alt={dress.name}
                  width={300}
                  height={200}
                  className="object-cover"
                />
                <CardTitle>
                  {dress.name}
                  {itemInCart && ` (x${itemInCart.quantity})`}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">₹{dress.price}</p>
                <Button
                  onClick={() => addToCart(dress)}
                  className="mt-2 w-full"
                >
                  Add to cart
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
