import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import useScrollTo from "@/hooks/useScrollTo";
import { LOGO_PNG } from "@/utils/consts";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollTo } = useScrollTo();
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Smooth scroll initialization
    const lenis = new Lenis();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    // Initial header animation
    gsap.to(headerRef.current, {
      y: 0,
      duration: 1.5,
      delay: 0.3,
      ease: "power4.out",
    });

    // Logo animation
    gsap.from(logoRef.current, {
      scale: 0,
      duration: 1,
      delay: 0.5,
      ease: "back.out(1.7)",
    });

    // Nav items stagger animation
    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      delay: 0.7,
      ease: "power2.out",
    });

    // Scroll-based color change
    ScrollTrigger.create({
      start: "top -100",
      end: 99999,
      toggleClass: {
        className: "bg-white shadow-lg",
        targets: headerRef.current,
      },
    });
  }, []);

  interface ScrollToWrapperProps {
    section: string;
  }

  const scrollToWrapper = ({ section }: ScrollToWrapperProps) => {
    setIsOpen(false);
    scrollTo(section);
  };

  return (
    <header
      ref={headerRef}
      className="w-full hero -translate-y-full transition-colors duration-300 z-50"
      aria-label="hero"
    >
      <div className="w-full flex items-center justify-between py-4 px-6">
        <div ref={logoRef} className="h-8">
          <img
            className="sm:w-full h-full rounded-full"
            src={LOGO_PNG}
            alt="logo"
          />
        </div>

        <nav
          ref={navRef}
          className={`
                        sm:static fixed left-0 top-24 z-50 
                        w-full h-screen sm:h-fit sm:w-fit 
                        ${isOpen ? "flex" : "opacity-0 sm:opacity-100 sm:flex"} 
                        flex-col sm:flex-row items-center gap-8 
                        sm:bg-transparent bg-white backdrop-blur-sm
                        sm:py-0 py-8 duration-300                 
                    `}
        >
          <div
            onClick={() => scrollToWrapper({ section: "services" })}
            className=" text-base font-semibold text-black/60 cursor-pointer hover:text-black/90 active:scale-105 duration-300"
          >
            Services
          </div>
          <div
            onClick={() => scrollToWrapper({ section: "about" })}
            className=" text-base font-semibold text-black/60 cursor-pointer hover:text-black/90 active:scale-105 duration-300"
          >
            About Us
          </div>
          <div
            onClick={() => scrollToWrapper({ section: "projects" })}
            className=" text-base font-semibold text-black/60 cursor-pointer hover:text-black/90 active:scale-105 duration-300"
          >
            Projects
          </div>
          <div
            onClick={() => scrollToWrapper({ section: "blogs" })}
            className=" text-base font-semibold text-black/60 cursor-pointer hover:text-black/90 active:scale-105 duration-300"
          >
            Blogs
          </div>
          <div
            onClick={() => scrollToWrapper({ section: "testimonials" })}
            className=" text-base font-semibold text-black/60 cursor-pointer hover:text-black/90 active:scale-105 duration-300"
          >
            Testimonials
          </div>
          <div
            onClick={() => scrollToWrapper({ section: "contact" })}
            className=" text-base font-semibold text-black/60 cursor-pointer hover:text-black/90 active:scale-105 duration-300"
          >
            Contact Us
          </div>
        </nav>
        <button
          className="sm:hidden text-gray-500 w-10 h-10 relative focus:outline-none bg-white"
          onClick={() => setIsOpen((state) => !state)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>
    </header>
  );
}
