import React from "react";
import { ButtonFooter } from "@/components/ButtonFooter";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Events", href: "/events" },
];

const socialLinks = [
  {
    icon: "/instagram.png",
    handle: "@thecodebreakers",
    iconClass: "w-2.5 h-2.5",
    href: "https://www.instagram.com/thecodebreakers",
    ariaLabel: "Visit The CodeBreakers on Instagram",
  },
  {
    icon: "/x.png",
    handle: "@thecodebreakers",
    iconClass: "w-2.5 h-2.5",
    href: "https://www.x.com/thecodebreakers",
    ariaLabel: "Visit The CodeBreakers on X",
  },
  {
    icon: "/LinkedIn.png",
    handle: "@thecodebreakers",
    iconClass: "w-3 h-3",
    href: "https://www.linkedin.com/company/thecodebreakers-rcoem",
    ariaLabel: "Visit The CodeBreakers on LinkedIn",
  },
];

const characters = [
  {
    src: "/ty.char.png",
    alt: "Ty char",
    className: "absolute top-[130px] left-0 w-[62px] h-[119px] object-cover",
  },
  {
    src: "/sy.char.png",
    alt: "Sy char",
    className:
      "absolute top-[110px] left-[212px] w-[76px] h-[157px] object-cover",
  },
  {
    src: "/socials.char.png",
    alt: "Socials char",
    className:
      "absolute top-[83px] left-[164px] w-[78px] h-[168px] object-cover",
  },
  {
    src: "/graphics.char.png",
    alt: "Graphics char",
    className: "absolute top-[47px] left-2 w-[124px] h-56 object-cover",
  },
  {
    src: "/tech.char.png",
    alt: "Tech char",
    className: "absolute -top-px left-[84px] w-[109px] h-[279px] object-cover",
  },
];

const Footer = () => {
  return (
    <footer className="relative w-full max-w-[1440px] mx-auto flex flex-col gap-[0.1px]">
      <h1 className="ml-[11.1px] h-[74.93px] w-full max-w-[1251.09px] self-center bg-[linear-gradient(180deg,rgba(255,255,255,1)_37%,rgba(28,28,28,1)_91%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Oxanium',Helvetica] font-bold text-transparent text-[103.7px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        The CodeBreakers Club
      </h1>

      <div className="relative min-h-[372px]
    bg-[rgba(255,255,255,0.06)]
    rounded-[40px]
    border-[1.5px] border-solid border-[rgba(255,255,255,0.85)]
    shadow-[22px_43px_29px_rgba(0,0,0,0.10),61px_121px_38px_rgba(0,0,0,0.04)]
    backdrop-blur-[30px]
    [-webkit-backdrop-filter:blur(30px)]
    [mask-image:linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,1)_35%)]
    [-webkit-mask-image:linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,1)_15%)]
    overflow-hidden">
        <div className="absolute top-[19px] left-[595px] w-[281px] h-[278px] opacity-[0.91]">
          {characters.map((character, index) => (
            <img
              key={index}
              className={character.className}
              alt={character.alt}
              src={character.src}
            />
          ))}
        </div>

        <div className="absolute top-[143px] left-32 w-80 h-[67px]">
          <img
            className="absolute top-2 left-0 w-[51px] h-[51px]"
            alt="Tcb"
            src="/tcb.png"
          />

          <div className="absolute top-0 left-[calc(50.00%_-_101px)] w-[257px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-3xl tracking-[0] leading-[normal]">
            Breaking codes,
          </div>

          <div className="absolute top-[30px] left-[calc(50.00%_-_101px)] w-[257px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-3xl tracking-[0] leading-[normal]">
            Creating minds.
          </div>
        </div>

        <nav className="absolute top-[114px] left-[1002px] w-[120px] h-[122px] flex flex-col">
          <div className="w-20 h-[25px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Oxanium',Helvetica] font-bold text-transparent text-xl text-center tracking-[0] leading-[normal]">
            Explore
          </div>

          {exploreLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`${
                index === 0
                  ? "ml-[-68px] w-11"
                  : index === 1
                    ? "ml-[-68px] w-11"
                    : index === 2
                      ? "-ml-2 w-[104px]"
                      : index === 3
                        ? "ml-[-55px] w-[57px]"
                        : "ml-[-31px] w-[81px]"
              } h-4 self-center ${index === 0 ? "mt-[3px]" : index === 4 ? "mt-0.5" : "mt-1"} bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-semibold text-transparent text-[13px] tracking-[0] leading-[normal] hover:opacity-80 transition-opacity`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="absolute top-[114px] left-[1182px] w-36 h-[120px] flex flex-col">
          <div className="w-[108px] h-[25px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Oxanium',Helvetica] font-bold text-transparent text-xl text-center tracking-[0] leading-[normal]">
            Follow Us
          </div>

          {socialLinks.map((social, index) => (
            <ButtonFooter
              key={index}
              variant="ghost"
              asChild
              className={`flex ml-[9px] w-[133px] h-6 ${index === 0 ? "mt-[7px]" : index === 1 ? "mt-[9px]" : "mt-[7px]"} items-center justify-center gap-1 px-4 py-2 shadow-[2px_5px_12px_#00000026,22px_43px_29px_#0000001a,61px_121px_38px_#0000000a,0px_4px_4px_#00000040] bg-[linear-gradient(135deg,rgba(85,85,85,0.4)_0%,rgba(66,66,66,0.4)_100%)] rounded-[40px] overflow-hidden border-[none] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[40px] before:[background:linear-gradient(123deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:opacity-80 transition-opacity h-auto cursor-pointer`}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel}>
                <span className="inline-flex items-center">
                  <img
                    className={`relative ${social.iconClass} ${index === 2 ? "mt-[-2.00px] mb-[-2.00px] ml-[-6.50px]" : "mt-[-1.00px] mb-[-1.00px] ml-[-5.50px]"}`}
                    alt={social.handle}
                    src={social.icon}
                  />
                  <span
                    className={`${index === 2 ? "mr-[-6.50px]" : "mr-[-5.50px]"} relative w-[98px] h-[15px] mt-[-4.50px] mb-[-2.50px] [font-family:'Montserrat',Helvetica] font-semibold text-white text-[10px] tracking-[0] leading-[normal]`}
                  >
                    {social.handle}
                  </span>
                </span>
              </a>
            </ButtonFooter>
          ))}
        </div>
     </div>
    </footer>
  );
};

export default Footer
