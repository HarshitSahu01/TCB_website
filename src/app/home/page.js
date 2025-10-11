"use client";
import React, { useEffect, useRef, useState } from "react";
import { Oxanium, Montserrat } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import Capsule from "./home_components/Capsule";
import Bento from "./home_components/Bento";
import Carousel from "./home_components/Carousel";

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
    const iconRefs = useRef([]);

    useEffect(() => {
        iconRefs.current.forEach((el, i) => {
            if (!el) return;

            // Snap quickly from center to final position
            gsap.set(el, { x: 0, y: 0, opacity: 0, scale: 0 });
            gsap.to(el, {
                x: icons[i].x,
                y: icons[i].y,
                opacity: 1,
                scale: 1,
                delay: i * 0.1,
                duration: 0.8,
                ease: "back.out(1.7)",
            });

            // Subtle random floating around final position
            const float = () => {
                gsap.to(el, {
                    x: icons[i].x + gsap.utils.random(-15, 15),
                    y: icons[i].y + gsap.utils.random(-15, 15),
                    rotation: gsap.utils.random(-8, 8),
                    duration: 1 + Math.random() * 0.5,
                    ease: "sine.inOut",
                    onComplete: float, // keep looping
                });
            };
            float();

            // Hover effects
            el.addEventListener("mouseenter", () => {
                gsap.to(el, { scale: 1.1, duration: 0.3, ease: "power2.out" });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
            });
        });
    }, []);

    return (
        <>
            {/* Hero Section */}
            <main
                className="relative flex items-center justify-center h-screen bg-black overflow-hidden text-white bg-cover"
                style={{ backgroundImage: "url('/bg_hero.svg')" }}
            >
                {/* Floating Tech Icons */}
                <div className="absolute w-full h-full flex items-center justify-center">
                    {icons.map((icon, i) => (
                        <div
                            key={i}
                            ref={(el) => (iconRefs.current[i] = el)}
                            className="absolute cursor-pointer"
                        >
                            <Image
                                src={icon.src}
                                alt="icon"
                                width={300}
                                height={300}
                                className="drop-shadow-lg opacity-80 select-none"
                                draggable="false"
                            />
                        </div>
                    ))}
                </div>

                {/* Hero Text */}
                <div className="text-center z-10 px-4">
                    <h1
                        className={`${oxanium.className} text-7xl md:text-8xl font-bold tracking-tight bg-[linear-gradient(to_right,_#02232A,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#C1C1C1,_#02232A)] bg-clip-text text-transparent`}
                    >
                        The Codebreakers Club
                    </h1>
                    <p
                        className={`${montserrat.className} text-xl md:text-2xl text-[#C1C1C1] mt-4 font-semibold`}
                    >
                        Breaking Codes, Creating Minds
                    </p>

                    <button className="bg-white/12 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 text-white font-semibold hover:bg-white/20 transition duration-300 ease-in-out mt-8">
                        Explore Now
                    </button>
                </div>
            </main>

            {/* Who We Are Section */}
            <div className="py-20 bg-black text-[#C1C1C1] text-start">
                <h1
                    className={`${oxanium.className} text-5xl font-bold mb-10 text-center`}
                >
                    Who We Are
                </h1>

                <div className="mx-auto max-w-6xl bg-white/10 border-1 border-white/20 backdrop-blur-lg rounded-4xl flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
                    <div className="flex-1 flex flex-col items-start">
                        <p
                            className={`${montserrat.className} text-lg md:text-xl text-[#C1C1C1] font-semibold mb-6`}
                        >
                            The CodeBreakers is a passionate student community empowering members
                            across all backgrounds to discover, learn, and shine in tech and
                            creative fields. Whether you’re into coding, design, content, or
                            event planning, you’ll find your place—and your people—right here.
                        </p>

                        <button className="bg-gradient-to-r from-white/3 to-black/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 text-white hover:bg-white/20 transition duration-300 ease-in-out">
                            Learn More →
                        </button>
                    </div>

                    <div className="flex-1 flex justify-end">
                        <div className="h-60 w-60 md:h-72 md:w-72 rounded-2xl overflow-hidden">
                            <img
                                src="/carousel/sample_img.png"
                                alt="Who We Are"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Domains Section */}
            <div className="py-20 bg-black text-[#C1C1C1] text-center">
                <h1
                    className={`${oxanium.className} text-5xl font-bold mb-2 text-center`}
                >
                    Explore Domains at TheCodeBreakers
                </h1>
                <p
                    className={`${montserrat.className} text-sm bg-gradient-to-b from-[#C1C1C1] via-[#C1C1C1] to-gray-900 md:text-xl w-[700px] mx-auto font-semibold bg-clip-text text-transparent`}
                >
                    A vibrant space for every passion—whether you’re a coder, designer,
                    writer, or event wizard.
                </p>

                <Capsule activeTab={activeTab} setActiveTab={setActiveTab} />

                <Bento
                    key={activeTab}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="21, 231, 225"
                    activeTab={activeTab}
                />
            </div>

            {/* Moments Section */}
            <div className="py-20 bg-black text-[#C1C1C1] text-center">
                <h1
                    className={`${oxanium.className} text-5xl font-bold mb-2 text-center`}
                >
                    Moments at TheCodeBreakers
                </h1>

                <Carousel />
            </div>
        </>
    );
}
