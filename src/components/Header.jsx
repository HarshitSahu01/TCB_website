"use client"

import React from "react";
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

  return (
    <header className="w-full max-w-[1440px] mx-auto flex rounded-[13px] overflow-hidden">
      <div className="w-full h-[142px] flex justify-center rounded-[13px] overflow-hidden">
        <div className="mt-[43px] w-full max-w-[1352px] mx-auto h-14 relative px-4">
          <img
            className="absolute top-1 left-[161px] w-[47px] h-[47px]"
            alt="Tcb"
            src="/tcb.png"
          />

          <nav className="inline-flex items-center gap-10 absolute top-4 left-1/2 -translate-x-1/2 cursor-pointer z-10">
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

          <div className="absolute top-[5px] right-[161px] z-10">
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

          <div className="pointer-events-none absolute top-[-9px] left-[93px] right-[93px] h-[74px] bg-[#5a5a5a33] rounded-[50px] border-2 border-solid border-[#ffffffd9] shadow-[0px_10px_40px_2px_#00000040,inset_10px_10px_40px_10px_#ffffff40] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] opacity-30" />
        </div>
      </div>
    </header>
  );
};

export default Header
