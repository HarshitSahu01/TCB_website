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
      {/* Mobile-first heading: smaller and wrapable; desktop restored at md */}
      <h1 className="w-full max-w-[1251.09px] mx-auto bg-[linear-gradient(180deg,rgba(255,255,255,1)_37%,rgba(28,28,28,1)_91%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Oxanium',Helvetica] font-bold text-transparent text-4xl md:text-[103.7px] text-center tracking-[0] leading-[normal] whitespace-normal md:whitespace-nowrap">
        The CodeBreakers Club
      </h1>

      <div className="relative min-h-[372px] py-8 md:py-0
    bg-[rgba(255,255,255,0.06)]
    rounded-[40px]
    border-[1.5px] border-solid border-[rgba(255,255,255,0.85)]
    shadow-[22px_43px_29px_rgba(0,0,0,0.10),61px_121px_38px_rgba(0,0,0,0.04)]
    backdrop-blur-[30px]
    [-webkit-backdrop-filter:blur(30px)]
    [mask-image:linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,1)_35%)]
    [-webkit-mask-image:linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,1)_15%)]
    overflow-hidden
    flex flex-col md:block
    space-y-8 md:space-y-0">
        {/* Decorative characters: hidden on mobile, visible on md+ */}
        <div className="hidden md:block md:absolute md:top-[19px] md:left-[595px] md:w-[281px] md:h-[278px] md:opacity-[0.91]">
          {characters.map((character, index) => (
            <img
              key={index}
              className={character.className}
              alt={character.alt}
              src={character.src}
            />
          ))}
        </div>

        {/* Logo + slogan: stacked & centered on mobile, absolute on md+ to preserve desktop */}
        <div className="static md:absolute md:top-[143px] md:left-32 md:w-80 md:h-[67px] w-full flex flex-col items-center md:items-start px-4 md:px-0 order-1 md:order-none">
          <img
            className="static md:absolute md:top-2 md:left-0 w-[51px] h-[51px] mb-4 md:mb-0"
            alt="Tcb"
            src="/tcb.png"
          />

          <div className="static md:absolute md:top-0 md:left-[calc(50.00%_-_101px)] md:w-[257px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-3xl tracking-[0] leading-[normal] text-center md:text-left">
            Breaking codes,
          </div>
          <div className="static md:absolute md:top-[30px] md:left-[calc(50.00%_-_101px)] md:w-[257px] w-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-bold text-transparent text-3xl tracking-[0] leading-[normal] text-center md:text-left">
            Creating minds.
          </div>
        </div>

        {/* Navigation: centered column on mobile, absolute at md+ */}
        <nav className="static md:absolute md:top-[114px] md:left-[1002px] md:w-[120px] md:h-[122px] w-full flex flex-col items-center md:items-start text-center md:text-left mt-0 order-2 md:order-none">
          <div className="w-20 h-[25px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Oxanium',Helvetica] font-bold text-transparent text-xl text-center tracking-[0] leading-[normal]">
            Explore
          </div>

          {exploreLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`${
                index === 0
                  ? "md:ml-[-68px] md:w-11 md:text-left"
                  : index === 1
                    ? "md:ml-[-68px] md:w-11 md:text-left"
                    : index === 2
                      ? "md:-ml-2 md:w-[104px] md:text-left"
                      : index === 3
                        ? "md:ml-[-55px] md:w-[57px] md:text-left"
                        : "md:ml-[-31px] md:w-[81px] md:text-left"
              } h-4 self-center mx-auto md:mx-0 ${index === 0 ? "mt-[3px]" : index === 4 ? "mt-0.5" : "mt-1"} bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Montserrat',Helvetica] font-semibold text-transparent text-[13px] tracking-[0] leading-[normal] hover:opacity-80 transition-opacity`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social buttons: centered on mobile, absolute on md+ */}
        <div className="static md:absolute md:top-[114px] md:left-[1182px] md:w-36 md:h-[120px] w-full flex flex-col items-center md:items-start mt-0 order-3 md:order-none">
          <div className="w-[108px] h-[25px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(153,153,153,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Oxanium',Helvetica] font-bold text-transparent text-xl text-center tracking-[0] leading-[normal]">
            Follow Us
          </div>

          {socialLinks.map((social, index) => (
            <ButtonFooter
              key={index}
              variant="ghost"
              asChild
              className={`flex w-[90%] md:w-[133px] max-w-[320px] h-8 ${index === 0 ? "mt-[7px]" : "mt-[9px]"} items-center justify-center md:justify-start gap-2 px-3 py-1 shadow-[2px_5px_12px_#00000026,22px_43px_29px_#0000001a,61px_121px_38px_#0000000a,0px_4px_4px_#00000040] bg-[linear-gradient(135deg,rgba(85,85,85,0.4)_0%,rgba(66,66,66,0.4)_100%)] rounded-[40px] overflow-hidden border-[none] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[40px] before:[background:linear-gradient(123deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:opacity-80 transition-opacity cursor-pointer mx-auto md:mx-0 md:ml-[9px]`}
            >
              <a 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.ariaLabel}
                className="flex items-center gap-2 w-full"
              >
                <img
                  className={`${social.iconClass}`}
                  alt={social.handle}
                  src={social.icon}
                />
                <span className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[10px] tracking-[0] leading-[normal]">
                  {social.handle}
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
