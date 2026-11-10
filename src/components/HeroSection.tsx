import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  ARROW_DOWN_PNG,
  COUNTER_BG_PNG,
  HERO_TEXT,
  HERO_TEXT_2,
  LOGO_PNG,
} from "@/utils/consts";
import { scrollToCallToAction } from "@/utils/scrollTo";
import { Icon } from "@iconify/react";
import { GRADIENT_1_PNG, GRADIENT_2_PNG, GRADIENT_5_PNG } from "@/utils/consts";
import { projects } from "@/utils/data";

interface HeroSectionProps {
  isStarted?: boolean;
}

export default function HeroSection({ isStarted = true }: HeroSectionProps) {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const heroTextRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRef = useRef(null);
  const gradient1Ref = useRef(null);
  const gradient2Ref = useRef(null);
  const gradient5Ref = useRef(null);

  useEffect(() => {
    if (!isStarted) return;

    const tl = gsap.timeline();

    tl.fromTo(
      gradient1Ref.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 0.9, ease: "power3.out" }
    )
      .fromTo(
        gradient2Ref.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(
        gradient5Ref.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.9, ease: "power3.out" },
        "-=0.7"
      )
      .fromTo(
        logoRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "power4.out" },
        "-=0.5"
      )
      .fromTo(
        heroTextRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" },
        "-=0.5"
      )
      .fromTo(
        statsRef.current,
        { x: -35, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power4.out" },
        "-=0.5"
      )
      .fromTo(
        counterRefs.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { x: 35, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power4.out" },
        "-=0.6"
      )
      .fromTo(
        arrowRef.current,
        { rotate: 0, opacity: 0 },
        { rotate: 135, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.5"
      );

    counterRefs.current.forEach((counter, index) => {
      if (counter) {
        const targetValue = index === 0 ? projects.length : 3;
        gsap.fromTo(
          counter.querySelector(".counter-value"),
          {
            innerText: 0,
          },
          {
            innerText: targetValue,
            duration: 1.4,
            ease: "power2.out",
            snap: { innerText: 1 },
            delay: 0.2,
            stagger: 0.15,
          }
        );
      }
    });

    // Arrow continuous floating Animation
    const arrowTween = gsap.to(arrowRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
      arrowTween.kill();
    };
  }, [isStarted]);

  return (
    <div
      ref={containerRef}
      className="w-full relative flex flex-col items-center justify-between"
    >
      <img
        ref={gradient1Ref}
        className="absolute top-0 right-0 -z-50"
        src={GRADIENT_1_PNG}
        alt="Gradient 1"
        fetchPriority="high"
        decoding="async"
      />
      <img
        ref={gradient2Ref}
        className="absolute left-0 -z-50"
        src={GRADIENT_2_PNG}
        alt="Gradient 2"
        fetchPriority="high"
        decoding="async"
      />
      <img
        ref={gradient5Ref}
        className="absolute right-0 bottom-0 -z-50"
        src={GRADIENT_5_PNG}
        alt="Gradient 5"
        fetchPriority="high"
        decoding="async"
      />
      <div className="w-11/12 flex flex-col py-4">
        <div ref={logoRef} className="h-10 w-fit">
          <img
            className="sm:w-full h-full rounded-full"
            src={LOGO_PNG}
            alt="logo"
          />
        </div>
        <div
          ref={heroTextRef}
          className="w-full sm:w-1/2 mt-4 text-black/75 text-base text-justify"
        >
          {HERO_TEXT}
        </div>
      </div>
      <div className="w-11/12 flex flex-col sm:flex-row gap-8 sm:gap-0 items-center justify-between text-accent/75 mt-16">
        <div ref={statsRef} className="w-full sm:w-1/2 flex items-start">
          <Icon
            ref={arrowRef}
            icon="iconamoon:arrow-up-1"
            className="text-6xl rotate-[135deg]"
          />
          <div
            ref={(el) => {
              counterRefs.current[0] = el;
            }}
            className="flex flex-col items-center justify-center"
            style={{
              background: `url(${COUNTER_BG_PNG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: 120,
              width: 120,
              height: 120,
            }}
          >
            <div className="text-base">Projects</div>
            <div className="font-semibold text-xl counter-value">0</div>
          </div>
          <div
            ref={(el) => {
              counterRefs.current[1] = el;
            }}
            className="flex flex-col items-center justify-center"
            style={{
              background: `url(${COUNTER_BG_PNG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: 120,
              width: 120,
              height: 120,
            }}
          >
            <div className="text-base">Client</div>
            <div className="font-semibold text-xl counter-value">0</div>
          </div>
        </div>
        <div ref={ctaRef} className="w-full sm:w-1/3 flex items-start gap-2">
          <img src={ARROW_DOWN_PNG} className="h-6" />
          <div>
            <div className="text-black/75 font-medium text-justify">{HERO_TEXT_2}</div>
            <div
              onClick={scrollToCallToAction}
              className="group w-fit px-4 py-2 mt-4 rounded-lg cursor-pointer active:scale-105 transition-all duration-200 hover:opacity-95 bg-black/75 text-white flex items-center gap-4"
            >
              <div>Get in touch</div>
              <div className="text-3xl rounded from-primary to-secondary bg-gradient-to-br transition-transform duration-200 group-hover:scale-125">
                <Icon icon="iconamoon:arrow-right-1" className="group-hover:-rotate-45 transition-all duration-500"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}