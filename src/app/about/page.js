"use client";
import { useState, useEffect, useRef } from "react";
import TeamCard from "@/components/TeamCard";

const makeMembers = (baseName, count = 8) =>
  Array.from({ length: count }).map((_, i) => ({
    member_name: `${baseName} ${i + 1}`,
    position: i % 2 === 0 ? "Engineer" : "Designer",
    image: "/billa.jpg",
    accounts: [
      { name: "GitHub", url: "#", logo: "/github.svg" },
      { name: "LinkedIn", url: "#", logo: "/linkedin.svg" },
      // { name: "Instagram", url: "#", logo: "/instagram.svg" },
    ],
  }));

export default function AboutPage() {
  const rows = [
    { title: "Core Team", members: makeMembers("Core", 8) },
    { title: "Tech Team", members: makeMembers("Tech", 8) },
    {
      title: "Graphics, Publicity & Socials Team",
      members: makeMembers("Socials", 8),
    },
  ];

  function Row({ title, members }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const rowRef = useRef(null);

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 768);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
      const handler = (e) => {
        if (!rowRef.current) return;
        if (!rowRef.current.contains(e.target)) setActiveIndex(null);
      };
      document.addEventListener("pointerdown", handler);
      return () => document.removeEventListener("pointerdown", handler);
    }, []);

    const lift = 0;
    const activeScale = 1.15;
    const rotate = 0;
    const baseGap = 20;
    const stepGap = 14;
    const maxGap = 120;

    return (
      <section className="relative mb-8 md:mb-12">
        {/* <h3 className="mb-4 px-4 sm:px-8 lg:px-16 text-lg sm:text-xl md:text-2xl">
          {title}
        </h3> */}

        <div className="relative overflow-visible">
          <div
            ref={rowRef}
            className="flex items-center overflow-x-auto overflow-y-visible no-scrollbar snap-x snap-mandatory py-6 sm:py-8 md:py-10 pl-6 sm:pl-8 lg:pl-16 focus-visible:outline focus-visible:outline-[rgba(255,255,255,0.06)] focus-visible:outline-offset-8"
            role="list"
            aria-label={`${title} list`}
            tabIndex={0}
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className="snap-start flex-none w-5 sm:w-6 lg:w-10" aria-hidden="true" />

            <div className="snap-start flex-none mr-2 relative z-10">
              <TeamCard team_name={title} />
            </div>

            {members.map((m, idx) => {
              const isActive = activeIndex === idx;

              let translateX = 0;
              if (activeIndex !== null && idx !== activeIndex) {
                const distance = Math.abs(idx - activeIndex) - 1;
                const extra = Math.max(0, distance);
                const raw = baseGap + extra * stepGap;
                const capped = Math.min(raw, maxGap);
                translateX = idx > activeIndex ? capped : -capped;
              }

              const enabledMotion = !isMobile || isMobile;

              const translateY = enabledMotion && isActive ? lift : 0;
              const scale = enabledMotion && isActive ? activeScale : 1;
              const cardRotate = enabledMotion && isActive ? rotate : 0;

              const marginRight = idx === 0 ? "0" : "-0.9rem";
              const paddingRight = idx === members.length - 1 ? "1.5rem" : "0";

              const style = {
                marginRight,
                paddingRight,
                transform: `translate(${translateX}px, ${translateY}px) rotate(${cardRotate}deg) scale(${scale})`,
                transformOrigin: "center center",
                transition:
                  "transform 320ms cubic-bezier(0.2,0.9,0.2,1), box-shadow 220ms ease",
                zIndex: isActive ? 60 : activeIndex !== null ? 30 : 20,
                willChange: "transform",
                cursor: "pointer",
              };

              const handleEnter = () => {
                if (!isMobile) setActiveIndex(idx);
              };
              const handleLeave = () => {
                if (!isMobile) setActiveIndex(null);
              };
              const handleClick = (e) => {
                e.stopPropagation();
                if (isMobile) {
                  setActiveIndex((cur) => (cur === idx ? null : idx));
                } else {
                  setActiveIndex((cur) => (cur === idx ? null : idx));
                }
              };

              return (
                <div
                  key={idx}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  onClick={handleClick}
                  onFocus={handleEnter}
                  onBlur={handleLeave}
                  className="snap-start flex-none relative"
                  aria-hidden={false}
                >
                  <TeamCard
                    member_name={m.member_name}
                    position={m.position}
                    image={m.image}
                    accounts={m.accounts}
                    style={style}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen w-full py-8 mt-[10vh] bg-[#000000] overflow-x-hidden">
      <h2 className="text-2xl sm:text-3xl mt-4 mb-6 px-4 sm:px-8 lg:px-16">
        Our Team
      </h2>

  <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {rows.map((r) => (
          <Row key={r.title} title={r.title} members={r.members} />
        ))}
      </div>
    </div>
  );
}
