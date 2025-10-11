"use client";
import EventsDiv from "@/components/EventsDiv";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function EventsPage() {
  useGSAP(() => {
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.to(".eventsection .events",{
            x: "-185%",
            scrollTrigger:{
                trigger:".eventsection",
                scroller:"body",
                start:"top -5%",
                end:"top -100%",
                pin:true,
                scrub:1,
                snap: {
                    snapTo: [0, 0.28, 1],
                    duration: { max: 0.01 },
                    delay: 0,
                    duration: 0.2,
                    ease: "none"
                },
            }
        })
  });
});

  return (
  <div style={{ position: "relative" }}>
    <section className="eventsection w-[100%] overflow-hidden flex-col justify-center items-center pt-[16vh] pb-[16vh]">
      <h2 className="pb-20 text-center justify-start text-5xl font-bold font-['Oxanium'] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_linear-gradient(180deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Events at TCB</h2>
      <div className="events w-[100%] flex flex-row justify-flex-start items-center pl-[170px] pr-[100px]">
        <EventsDiv eventName="Code Construct" eventDate="September 2025" imageUrl="./IMG_6635.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss" />
        <EventsDiv eventName="Code Construct" eventDate="September 2025" imageUrl="./IMG_6635.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss" />
        <EventsDiv eventName="Code Construct" eventDate="September 2025" imageUrl="./IMG_6635.jpg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.ss" />
      </div>
    </section>
  </div>
  
  );
}
