"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const carouselImages = [
  "/carousel/tcb_1.png",
  "/carousel/tcb_2.png",
  "/carousel/tcb_3.png",
  "/carousel/4.jpg",
  "/carousel/5.jpg",
  "/carousel/6.jpg",
  "/carousel/sample_img.png",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const length = carouselImages.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + length) % length);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const getPositionStyle = (index) => {
    const diff = (index - currentIndex + length) % length;

    // Center image
    if (diff === 0) {
      return {
        x: 0,
        scale: 1.1,
        zIndex: 30,
        blur: "blur-0",
        opacity: 1,
      };
    }

    // Left image (previous)
    if (diff === length - 1) {
      return {
        x: -380,
        scale: 0.9,
        zIndex: 20,
        blur: "[filter:blur(1.3px)]",
        opacity: 0.6,
      };
    }

    // Right image (next)
    if (diff === 1) {
      return {
        x: 400,
        scale: 0.9,
        zIndex: 20,
        blur: "[filter:blur(1.3px)]",
        opacity: 0.6,
      };
    }

    // All others hidden
    return {
      x: 0,
      scale: 0.7,
      zIndex: 0,
      blur: "blur-lg",
      opacity: 0,
    };
  };

  return (
    <div className="relative w-full flex items-center justify-center p-12 bg-black">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-22 z-50 w-10 h-10 rounded-full bg-gradient-to-r from-teal-300 to-teal-900 text-white flex items-center justify-center hover:bg-teal-600 transition"
      >
        &#8592;
      </button>

      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full max-w-8xl h-[400px] overflow-hidden">
        {carouselImages.map((src, index) => {
          const { x, scale, zIndex, blur, opacity } = getPositionStyle(index);

          return (
            <motion.div
              key={index}
              className={`absolute ${blur}`}
              style={{ zIndex, opacity }}
              animate={{ x, scale, opacity }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              <div className="relative w-130 h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
                <Image
                  src={src}
                  alt={`carousel-${index}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-17 z-50 w-10 h-10 rounded-full bg-gradient-to-r from-teal-300 to-teal-900 text-white flex items-center justify-center transition"
      >
        &#8594;
      </button>
    </div>
  );
}