"use client";
import React from "react";
import { Oxanium, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { useState } from "react";

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
    const [activeTab, setActiveTab] = useState("tech");

    // const domains = activeTab === "tech" ? techDomains : nonTechDomains;

    return (
        <>
            <main className="relative flex items-center justify-center h-screen bg-black overflow-hidden text-white" style={{ backgroundImage: "url('/bg_hero.svg')" }}>

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
                        className={`${oxanium.className} text-7xl md:text-8xl font-bold tracking-tight bg-[linear-gradient(to_right,_#02232A,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#02232A)] bg-clip-text text-transparent`}
                    >
                        The Codebreakers Club
                    </h1>
                    <p className={`${montserrat.className} text-xl md:text-2xl text-[#C1C1C1] mt-4 font-semibold`}>
                        Breaking Codes, Creating Minds
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/12 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 text-white font-semibold hover:bg-white/20 transition duration-300 ease-in-out mt-8">
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

            {/* Domains section */}
            <div className="py-20 bg-black text-[#C1C1C1] text-center">
                <h1 className={`${oxanium.className} text-5xl font-bold mb-2 text-center`}>Explore Domains at TheCodeBreakers</h1>
                <p className={`${montserrat.className} text-sm bg-gradient-to-b from-[#C1C1C1] via-[#C1C1C1] to-gray-900 md:text-xl w-[700px] mx-auto font-semibold bg-clip-text text-transparent`}>
                    A vibrant space for every passion—whether you’re a coder, designer, writer, or event wizard.
                </p>

                {/* Capsule Toggle */}
                <div className="flex justify-center mb-8 mt-8">
                    <div className="flex bg-white/10 rounded-full p-0 border border-white/20">
                        <button
                            onClick={() => setActiveTab("tech")}
                            className={`px-7 py-1.5 rounded-full transition-all ${activeTab === "tech"
                                ? "bg-white/10 text-white font-semibold"
                                : "text-white hover:text-gray-300 "
                                }`}
                        >
                            Tech
                        </button>
                        <button
                            onClick={() => setActiveTab("nontech")}
                            className={`px-7 py-1.5 rounded-full transition-all ${activeTab === "nontech"
                                ? "bg-white text-black font-semibold"
                                : "text-white hover:text-gray-300"
                                }`}
                        >
                            Non Tech
                        </button>
                    </div>
                </div>

                {/* bento grid when tech*/}
                {activeTab === "tech" && (
                    <>
                        {/* Row 1 */}
                        <div className="bento flex justify-center items-center flex-wrap gap-4">
                            {/* 1️⃣ Web Development*/}
                            <div className="bento-item relative h-[230px] w-[600px] rounded-3xl overflow-hidden bg-white/10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#44A4A1_0%,_transparent_80%)] opacity-70 blur-2xl"></div>
                                <div className="relative z-10 p-6 text-left">
                                    <h2 className={`${montserrat.className} text-2xl font-bold mb-2 text-white`}>Web Development</h2>
                                    <p className="text-md text-gray-300 leading-relaxed">
                                        Build and design interactive websites and web apps using modern
                                        technologies like React, Next.js, and Tailwind CSS.
                                    </p>
                                </div>
                            </div>

                            {/* 2️⃣ Competitive Programming  */}
                            <div className="bento-item relative h-[230px] w-[350px] rounded-3xl overflow-hidden bg-white/10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#44A4A1_0%,_transparent_70%)] opacity-70 blur-2xl"></div>
                                <div className="relative z-10 p-6 text-left">
                                    <h2 className={`${montserrat.className} text-2xl font-bold mb-2 text-white`}>
                                        Competitive Programming
                                    </h2>
                                    <p className="text-md text-gray-300 leading-relaxed">
                                        Solve coding challenges, boost problem-solving skills, and prepare
                                        for global tech contests.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="bento flex justify-center items-center flex-wrap gap-4 mt-4">
                            {/* 3️⃣ Machine Learning */}
                            <div className="bento-item relative h-[230px] w-[350px] rounded-3xl overflow-hidden bg-white/10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#44A4A1_0%,_transparent_70%)] opacity-70 blur-2xl"></div>
                                <div className="relative z-10 p-6 text-left">
                                    <h2 className={`${montserrat.className} text-2xl font-bold mb-2 text-white`}>Machine Learning</h2>
                                    <p className="text-md text-gray-300 leading-relaxed">
                                        Explore real-world AI with hands-on projects using Python, TensorFlow,
                                        and data-driven insights.
                                    </p>
                                </div>
                            </div>

                            {/* 4️⃣ Blockchain */}
                            <div className="bento-item relative h-[230px] w-[600px] rounded-3xl overflow-hidden bg-white/10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#44A4A1_0%,_transparent_70%)] opacity-70 blur-2xl"></div>
                                <div className="relative z-10 p-6 text-left">
                                    <h2 className={`${montserrat.className} text-2xl font-bold mb-2 text-white`}>Blockchain</h2>
                                    <p className="text-md text-gray-300 leading-relaxed">
                                        Learn the technology behind cryptocurrencies, decentralized apps, and
                                        smart contracts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* bento grid when nontech*/}
                {activeTab === "nontech" && (
                    <>
                        {/* Row 1 */}
                        <div className="bento flex justify-center items-center flex-wrap gap-4">
                            {/* 1️⃣ Web Development*/}
                            <div className="bento-item relative h-[230px] w-[350px] rounded-3xl overflow-hidden bg-white/10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#44A4A1_0%,_transparent_80%)] opacity-70 blur-2xl"></div>
                                <div className="relative z-10 p-6 text-left">
                                    <h2 className={`${montserrat.className} text-2xl font-bold mb-2 text-white`}>Content Writing</h2>
                                    <p className="text-md text-gray-300 leading-relaxed">
                                        Craft engaging stories and blogs that connect ideas with people.
                                    </p>
                                </div>
                            </div>

                            {/* 2️⃣ Competitive Programming  */}
                            <div className="bento-item relative h-[230px] w-[600px] rounded-3xl overflow-hidden bg-white/10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#44A4A1_0%,_transparent_70%)] opacity-70 blur-2xl"></div>
                                <div className="relative z-10 p-6 text-left">
                                    <h2 className={`${montserrat.className} text-2xl font-bold mb-2 text-white`}>
                                        Event Management
                                    </h2>
                                    <p className="text-md text-gray-300 leading-relaxed">
                                        Plan, organize, and execute exciting campus and tech events.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="bento flex justify-center items-center flex-wrap gap-4 mt-4">
                            {/* 3️⃣ Machine Learning */}
                            <div className="bento-item relative h-[230px] w-[600px] rounded-3xl overflow-hidden bg-white/10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#44A4A1_0%,_transparent_70%)] opacity-70 blur-2xl"></div>
                                <div className="relative z-10 p-6 text-left">
                                    <h2 className={`${montserrat.className} text-2xl font-bold mb-2 text-white`}>Graphic Designing</h2>
                                    <p className="text-md text-gray-300 leading-relaxed">
                                        Explore creativity with UI/UX and graphic design experiences.
                                    </p>
                                </div>
                            </div>

                            {/* 4️⃣ Blockchain */}
                            <div className="bento-item relative h-[230px] w-[350px] rounded-3xl overflow-hidden bg-white/10">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#44A4A1_0%,_transparent_70%)] opacity-70 blur-2xl"></div>
                                <div className="relative z-10 p-6 text-left">
                                    <h2 className={`${montserrat.className} text-2xl font-bold mb-2 text-white`}>PR & Marketing</h2>
                                    <p className="text-md text-gray-300 leading-relaxed">
                                        Promote events, engage audiences, and build strong community presence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>

            {/* Moments section */}
            <div className="py-20 bg-black text-[#C1C1C1] text-center">
                <h1 className={`${oxanium.className} text-5xl font-bold mb-2 text-center`}>Moments at TheCodeBreakers</h1>
                <img src='/sample_img.png' alt='Moments' className='mx-auto mt-20 rounded-2xl w-[400px] h-[300px] object-cover' />
            </div>

        </>
    );
}