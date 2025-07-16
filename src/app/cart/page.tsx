"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenuDemo } from "@/components/NavBar/NavBar";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  // ✅ Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto px-4 pt-10">
      <NavigationMenuDemo cart={[]} />
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardHeader>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">₹{item.price}</p>
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* ✅ Total Price Section */}
          <div className="text-right text-xl font-bold">
            Total: ₹{totalPrice}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
