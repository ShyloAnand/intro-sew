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
  { id: 1, name: "Dress", price: 999, image: "/images/shop25.jpg" },
  { id: 2, name: "Dress", price: 2499, image: "/images/shop21.jpg" },
  { id: 3, name: "Dress", price: 799, image: "/images/shop22.jpg" },
  { id: 4, name: "Dress", price: 999, image: "/images/shop16.jpg" },
  { id: 5, name: "Dress", price: 2499, image: "/images/shop20.jpg" },
  { id: 6, name: "Dress", price: 799, image: "/images/shop19.jpg" },
  { id: 7, name: "Dress", price: 999, image: "/images/shop15.jpg" },
  { id: 8, name: "Dress", price: 2499, image: "/images/shop17.jpg" },
  { id: 9, name: "Dress", price: 799, image: "/images/shop16.jpg" },
  { id: 10, name: "Dress", price: 999, image: "/images/shop1.webp" },
  { id: 11, name: "Dress", price: 2499, image: "/images/shop14.jpg" },
  { id: 12, name: "Dress", price: 799, image: "/images/shop2.webp" },
  { id: 13, name: "Dress", price: 999, image: "/images/shop12.jpg" },
  { id: 14, name: "Dress", price: 2499, image: "/images/shop22.jpg" },
  { id: 15, name: "Dress", price: 799, image: "/images/shop0.jpeg" },
  { id: 16, name: "Dress", price: 799, image: "/images/shop11.jpg" },
  { id: 17, name: "Dress", price: 999, image: "/images/shop9.jpg" },
  { id: 18, name: "Dress", price: 2499, image: "/images/shop23.jpg" },
  { id: 19, name: "Dress", price: 799, image: "/images/shop24.jpg" },
  { id: 20, name: "Dress", price: 799, image: "/images/shop0.jpeg" },
];

const Shop = () => {
  const { cart, addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 pt-10">
      <NavigationMenuDemo cart={cart} />

      <h1 className="text-3xl font-bold mb-6">🍭 Shop All Dresses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {dresses.map((dress) => (
          <Card key={dress.id}>
            <CardHeader>
              <Image
                src={dress.image}
                alt={dress.name}
                width={300}
                height={200}
                className="object-cover"
              />
              <CardTitle>{dress.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">₹{dress.price}</p>
              <Button onClick={() => addToCart(dress)} className="mt-2 w-full">
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
