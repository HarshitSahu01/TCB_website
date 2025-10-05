"use client";
import React from "react";
import { Oxanium, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import NextImage from "next/image";

// Font imports
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Icon positions and sources
const icons = [
  { src: "/icons/react.svg", x: -450, y: 50 },
  { src: "/icons/nodejs.svg", x: 550, y: -120 },
  { src: "/icons/python.svg", x: -300, y: 250 },
  { src: "/icons/figma.svg", x: 650, y: 250 },
  { src: "/icons/rust.svg", x: -100, y: -100 },
  { src: "/icons/java.svg", x: 350, y: 380 },
];

export default function Home() {
  return (
    <main className="relative flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden text-white">
      
      {/* Floating Tech Icons */}
      <div className="absolute w-full h-full flex items-center justify-center">
        {icons.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={{
              x: icon.x,
              y: icon.y,
              opacity: 1,
              scale: 1,
              transition: {
                delay: i * 0.15,
                type: "spring",
                stiffness: 120,
                damping: 15,
              },
            }}
            whileHover={{ scale: 1.1 }}
            className="absolute"
          >
            <motion.div
              animate={{
                y: [0, -15, 0, 15, 0, -15],
                rotate: [0, 5, 0, -5, 0, 5],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <NextImage
                src={icon.src}
                alt="icon"
                width={300}
                height={300}
                className="drop-shadow-lg opacity-80"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="text-center z-10 px-4">
        <h1
          className={`${oxanium.className} text-7xl md:text-8xl font-bold tracking-tight text-[#C1C1C1]`}
        >
          The Codebreakers Club
        </h1>
        <p
          className={`${montserrat.className} text-xl md:text-2xl text-[#C1C1C1] mt-4 font-semibold`}
        >
          Breaking Codes, Creating Minds
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-gray-800 rounded-full text-[#C1C1C1] font-semibold hover:bg-gray-700 transition-all"
        >
          Explore Now
        </motion.button>
      </div>
    </main>
  );
}