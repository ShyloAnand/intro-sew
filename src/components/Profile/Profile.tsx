"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CarouselDemo } from "../Carousel/Carousel";
import { AccordionDemo } from "../Accordion/Accordion";

type Dress = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const dresses: Dress[] = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: 999,
    image: "/images/shop1.webp",
  },
  {
    id: 2,
    name: "Elegant Evening Gown",
    price: 2499,
    image: "/images/shop0.jpeg",
  },
  {
    id: 3,
    name: "Casual Cotton Dress",
    price: 799,
    image: "/images/shop2.webp",
  },
];

const ShopApp = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDresses = dresses.filter((dress) =>
    dress.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    renderMode: "performance",
    slides: { perView: 1.2, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 15 } },
      "(min-width: 768px)": { slides: { perView: 3, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 5, spacing: 25 } },
    },
    created: (slider) => {
      setInterval(() => slider.next(), 2500);
    },
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search */}
      <div className="px-4 sm:px-6 mt-8 max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="Search dresses..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 mb-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Banner */}
      <div className="relative w-full aspect-[3/2] sm:aspect-[3/1]">
        <Image
          src="/images/meesho .webp"
          alt="Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-end px-4 sm:px-10 bg-black/40">
          <div className="max-w-[400px] text-white text-right space-y-5">
            <h1 className="text-2xl sm:text-4xl font-extrabold leading-snug drop-shadow">
              Smart Shopping <br /> Trending Fashion
            </h1>
            <Button
              className="w-full sm:w-[200px] px-4 py-2 text-sm sm:text-lg bg-white text-black font-semibold"
              onClick={() => {
                const section = document.getElementById("shop");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div
        id="shop"
        className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-12"
      >
        {filteredDresses.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No results found.
          </p>
        ) : (
          filteredDresses.map((dress) => (
            <Card key={dress.id} className="hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                <div className="w-full aspect-[3/4] relative">
                  <Image
                    src={dress.image}
                    alt={dress.name}
                    fill
                    className="object-cover rounded-t"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <CardTitle className="text-sm sm:text-lg font-semibold mb-1 text-center">
                  {dress.name}
                </CardTitle>
                <p className="text-sm sm:text-lg text-pink-600 font-bold text-center">
                  ₹{dress.price}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Carousel Section */}
      <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto mt-12">
        <CarouselDemo />
      </div>

      {/* Shop by Category */}
      <div className="px-4 sm:px-6 max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {["shop10.jpg", "shop11.jpg", "shop9.jpg", "shop14.jpg"].map(
            (img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full aspect-[3/4] relative">
                  <Image
                    src={`/images/${img}`}
                    alt="category"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center bg-white">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {img.includes("10")
                      ? "Western Wear"
                      : img.includes("11")
                      ? "Traditional"
                      : img.includes("9")
                      ? "Office Casuals"
                      : "Party Wear"}
                  </h3>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="relative w-full aspect-[4/2] mt-20">
        <Image
          src="/images/shop8ban.jpeg"
          alt="Big Sale Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-4 sm:px-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
            Big Deals on Top Brands 🎉
          </h2>
          <p className="text-white text-sm sm:text-lg mb-3">
            Upto 70% off on selected styles. Limited time offer!
          </p>
          <Button className="bg-white text-black text-sm sm:text-lg font-semibold">
            Explore Now
          </Button>
        </div>
      </div>

      {/* Just Dropped */}
      <div className="mt-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Just Dropped 🔥
        </h2>
        <div className="flex overflow-x-auto space-x-6 scrollbar-hide pb-4">
          {[
            "shop19.jpg",
            "shop22.jpg",
            "shop21.jpg",
            "shop23.jpg",
            "shop24.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="min-w-[250px] aspect-[3/4] rounded-lg overflow-hidden shadow hover:scale-105 transition-all duration-300 relative"
            >
              <Image
                src={`/images/${src}`}
                alt={`New item ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Trending Picks Slider */}
      <div className="mt-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Trending Picks 🧵
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {[
            "shop16.jpg",
            "shop15.jpg",
            "shop12.jpg",
            "shop17.jpg",
            "shop20.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="keen-slider__slide rounded overflow-hidden aspect-[3/4] relative"
            >
              <Image
                src={`/images/${src}`}
                alt={`Trending ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Accordion Section */}
      <div className="bg-white px-4 sm:px-6 mt-12">
        <AccordionDemo />
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-gray-900 text-white py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-4">SmartShop</h3>
            <p className="text-gray-300">
              Your go-to destination for affordable and trending fashion.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4 text-gray-300">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} SmartShop. All rights reserved.
        </p>
      </footer>

      {/* Scroll to Top */}
      <Button
        className="fixed bottom-4 right-4 bg-pink-600 text-white rounded-full px-4 py-2 text-sm sm:text-base shadow-lg hover:bg-pink-700"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ Top
      </Button>
    </div>
  );
};

export default ShopApp;
