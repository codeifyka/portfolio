"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { LOGO_PNG } from "@/utils/consts";

interface PreloaderProps {
  onStartExit?: () => void;
  onComplete?: () => void;
}

export default function Preloader({ onStartExit, onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Use refs for callbacks so that parent state re-renders never re-trigger the animation
  const onStartExitRef = useRef(onStartExit);
  const onCompleteRef = useRef(onComplete);
  onStartExitRef.current = onStartExit;
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const tl = gsap.timeline();
    const counterObj = { value: 0 };

    // 1. Snappy entrance of logo and title
    tl.fromTo(
      [logoRef.current, textRef.current],
      { scale: 0.9, opacity: 0, y: 10 },
      { scale: 1, opacity: 1, y: 0, duration: 0.2, ease: "power2.out", stagger: 0.05 }
    )
      // 2. Fast counter from 0% to 100% and progress bar
      .to(
        counterObj,
        {
          value: 100,
          duration: 0.45,
          ease: "power2.inOut",
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.innerText = `${Math.floor(counterObj.value)}%`;
            }
            if (progressRef.current) {
              progressRef.current.style.width = `${counterObj.value}%`;
            }
          },
        },
        "-=0.1"
      )
      // 3. Immediately at 100%, trigger the hero section entrance
      .call(() => {
        onStartExitRef.current?.();
      })
      // 4. Slide the entire solid black curtain UP and off the screen
      // (Keeps background solid black so white text NEVER shows over the white hero)
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.55,
        ease: "power4.inOut",
        onComplete: () => {
          onCompleteRef.current?.();
        },
      });

    return () => {
      tl.kill();
    };
  }, []); // Run strictly ONCE on mount

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute w-[360px] h-[360px] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div
          ref={logoRef}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-2 bg-white/10 backdrop-blur-md border border-white/20 mb-6 flex items-center justify-center shadow-2xl"
        >
          <img
            src={LOGO_PNG}
            alt="Codeifyka Logo"
            className="w-full h-full rounded-full object-contain"
          />
        </div>

        <div ref={textRef} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-widest text-white uppercase">
            CODEIFYKA
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 tracking-[0.25em] uppercase mt-2">
            Creative Team & Freelance Collective
          </p>
        </div>

        <div
          ref={counterRef}
          className="text-6xl sm:text-8xl font-black font-mono tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent my-8"
        >
          0%
        </div>

        <div className="w-60 sm:w-72 h-1.5 bg-neutral-800 rounded-full overflow-hidden relative shadow-inner">
          <div
            ref={progressRef}
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full w-0"
          />
        </div>

        <div className="text-[11px] text-neutral-500 uppercase tracking-widest mt-6">
          Loading Experience...
        </div>
      </div>
    </div>
  );
}
