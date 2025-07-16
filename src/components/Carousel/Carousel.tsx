"use client";

import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Make sure these image paths exist inside your /public/images folder
const images = [
  "/images/shop3.webp",
  "/images/shop5.jpeg",
  "/images/shop4.jpeg",
  "/images/shop2.webp",
  "/images/shop6.jpeg", // Changed duplicate
];

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-[1480px] h-[500px] mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-0 overflow-hidden rounded-lg w-full h-[400px]">
                  <Image
                    src={src}
                    alt={`Carousel Image ${index + 1}`}
                    width={980}
                    height={400}
                    priority={index === 0}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
