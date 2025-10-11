"use client";
import EventsDiv from "@/components/EventsDiv";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function EventsPage() {
  const eventsContainerRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const eventsData = [
    {
      eventName: "Code Construct",
      eventDate: "September 2025",
      imageUrl: "./IMG_6635.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    },
    {
      eventName: "Code Construct",
      eventDate: "September 2025",
      imageUrl: "./IMG_6635.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    },
    {
      eventName: "Code Construct",
      eventDate: "September 2025",
      imageUrl: "./IMG_6635.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    },
    {
      eventName: "Code Construct",
      eventDate: "September 2025",
      imageUrl: "./IMG_6635.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss"
    }
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const eventsContainer = eventsContainerRef.current;
      const eventsSection = eventsSectionRef.current;
      
      if (!eventsContainer || !eventsSection) return;

      const numberOfEvents = eventsData.length;
      const viewportWidth = window.innerWidth;
      const paddingLeft = 170; // pl-[170px]
      const paddingRight = 100; // pr-[100px]
      
      // Calculate the available width for content
      const availableWidth = viewportWidth - paddingLeft - paddingRight;
      
      // Calculate total scroll distance: (number of events - 1) * available width
      // This moves exactly one card width per scroll, showing the next card
      const scrollDistance = (numberOfEvents - 1) * availableWidth;
      
      // Generate snap points dynamically based on number of events
      const snapPoints = [];
      for (let i = 0; i < numberOfEvents; i++) {
        snapPoints.push(i / (numberOfEvents - 1));
      }

      gsap.to(eventsContainer, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: eventsSection,
          scroller: "body",
          start: "top -5%",
          end: "top -100%",
          pin: true,
          scrub: 1,
          snap: {
            snapTo: snapPoints,
            duration: 0.2,
            delay: 0,
            ease: "none"
          },
          onUpdate: (self) => {
            // Calculate which event is currently active based on progress
            const progress = self.progress;
            const currentIndex = Math.round(progress * (numberOfEvents - 1));
            setActiveIndex(currentIndex);
          }
        }
      });
    });
  }, [eventsData.length]);

  return (
    <div style={{ position: "relative" }}>
      <section ref={eventsSectionRef} className="eventsection w-full overflow-hidden flex-col justify-center items-center pt-[5vh] pb-[16vh]">
        <h2 className="pb-20 text-center justify-start text-5xl font-bold font-['Oxanium'] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(180deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Events at TCB
        </h2>
        <div ref={eventsContainerRef} className="events w-full flex flex-row justify-flex-start items-center pl-[170px] pr-[100px]">
          {eventsData.map((event, index) => (
            <EventsDiv
              key={index}
              eventName={event.eventName}
              eventDate={event.eventDate}
              imageUrl={event.imageUrl}
              description={event.description}
              isLast={index === eventsData.length - 1}
              isActive={index === activeIndex}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
