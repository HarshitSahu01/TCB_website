"use client"

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/Button";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Events", href: "/events" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[1440px] mx-auto flex rounded-[13px] overflow-hidden">
      <div className="w-full h-[142px] md:h-[142px] flex justify-center rounded-[13px] overflow-hidden">
        <div className="mt-[20px] md:mt-[43px] w-full max-w-[1352px] mx-auto h-14 relative px-4">
          <img
            className="absolute top-1 left-4 md:left-[161px] w-[47px] h-[47px]"
            alt="Tcb"
            src="/tcb.png"
          />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden absolute right-4 top-2 z-20 text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:inline-flex items-center gap-10 absolute top-4 left-1/2 -translate-x-1/2 cursor-pointer z-10">
            {navigationItems.map((item, index) => {
              const isActive = item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
              return (
                <div key={index} className="relative">
                  <Link
                    href={item.href}
                    className={`cursor-pointer relative mt-[-1.00px] ${
                      isActive
                        ? "[font-family:'Oxanium',Helvetica] font-medium"
                        : "[font-family:'Montserrat',Helvetica] font-medium"
                    } text-white text-lg text-center tracking-[0] leading-[normal] hover:opacity-80 transition-opacity`}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <div
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[27px] h-0.5 bg-white rounded"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Navigation Overlay */}
          <div className={`md:hidden fixed inset-0 bg-black/95 z-10 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <nav className="flex flex-col items-start justify-start h-full gap-8 pt-32 px-8">
              {navigationItems.map((item, index) => {
                const isActive = item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
                return (
                  <div key={index} className="relative w-full">
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`cursor-pointer relative block ${
                        isActive
                          ? "[font-family:'Oxanium',Helvetica] font-medium"
                          : "[font-family:'Montserrat',Helvetica] font-medium"
                      } text-white text-2xl tracking-[0] leading-[normal] hover:opacity-80 transition-opacity`}
                    >
                      {item.label}
                    </Link>
                    {isActive && (
                      <div
                        className="absolute -bottom-2 left-0 w-16 h-0.5 bg-white rounded"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="hidden md:block absolute top-[5px] right-[161px] z-10">
            <Button
              asChild
              className="cursor-pointer h-[45px] w-[125px] bg-white hover:bg-white/90 rounded-3xl [font-family:'Montserrat',Helvetica] font-bold text-black text-sm"
            >
              <Link
                href="https://www.instagram.com/thecodebreakers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow Us
              </Link>
            </Button>
          </div>

          <div className="pointer-events-none absolute top-[-9px] md:left-[93px] md:right-[93px] h-[74px] bg-[#5a5a5a33] rounded-[50px] border-2 border-solid border-[#ffffffd9] shadow-[0px_10px_40px_2px_#00000040,inset_10px_10px_40px_10px_#ffffff40] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] opacity-30 hidden md:block" />
        </div>
      </div>
    </header>
  );
};

export default Header