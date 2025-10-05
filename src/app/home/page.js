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
        <>
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
                        className="
  bg-white/12        /* translucent background */
  backdrop-blur-md    /* blurs content behind */
  border border-white/30 
  rounded-full
  px-6 py-2          /* padding */
  text-white         /* text color */
  font-semibold
  hover:bg-white/20  /* slightly brighter on hover */
  transition
  duration-300
  ease-in-out
  mt-8
">
                        Explore Now
                    </motion.button>
                </div>
            </main >

            {/* Who we are section */}
            <div className="py-20 bg-black text-[#C1C1C1] text-start">
                <h1 className={`${oxanium.className} text-5xl font-bold mb-10 text-center`}>Who We Are</h1>

                {/* Container */}
                <div className="mx-auto max-w-6xl bg-white/10 border-1 border-white/20 backdrop-blur-lg rounded-4xl flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">

                    {/* Left: Text + Button */}
                    <div className="flex-1 flex flex-col items-start">
                        <p className={`${montserrat.className} text-lg md:text-xl text-[#C1C1C1] font-semibold mb-6`}>
                            The CodeBreakers is a passionate student community empowering members across all backgrounds to discover, learn, and shine in tech and creative fields. Whether you’re into coding, design, content, or event planning, you’ll find your place—and your people—right here.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className=" bg-gradient-to-r from-white/3 to-black/20
          backdrop-blur-md
          border border-white/30
          rounded-full
          px-6 py-2
          text-white
          hover:bg-white/20
          transition
          duration-300
          ease-in-out
        "
                        >
                            Learn More →
                        </motion.button>
                    </div>

                    {/* Right: Image */}
                    <div className="flex-1 flex justify-end">
                        <div className="h-60 w-60 md:h-72 md:w-72 rounded-2xl overflow-hidden">
                            <img
                                src="/sample_img.png"
                                alt="Who We Are"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}