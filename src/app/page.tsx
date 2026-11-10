"use client";
import Blogs from "@/components/Blogs";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Modal from "@/components/Modal";
import Preloader from "@/components/Preloader";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import {
  GRADIENT_3_PNG,
  GRADIENT_4_PNG,
} from "@/utils/consts";
import { useState, useEffect } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <Preloader
          onStartExit={() => setIsReady(true)}
          onComplete={() => setIsLoading(false)}
        />
      )}
      <div className="w-full flex flex-col items-center bg-white">
        <div className="w-11/12 flex flex-col items-center">
          <Header isStarted={isReady} />
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen}/>}
        <div className="w-full flex flex-col items-center border-t rounded-t-3xl relative z-0 overflow-hidden mt-8">
          <HeroSection isStarted={isReady} />
        <div className="w-full flex flex-col items-center relative z-0">
          <div className="w-11/12 flex flex-col items-center mt-32">
            <Services />
          </div>
          <img
            className="absolute bottom-0 right-0 translate-y-1/2 -z-50"
            src={GRADIENT_3_PNG}
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-32 bg-black rounded-t-3xl relative z-0">
          <div className="w-11/12 flex flex-col items-center py-10">
            <Projects />
          </div>
          <img
            className="absolute left-0 bottom-0 -z-50"
            src={GRADIENT_4_PNG}
            alt=""
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="w-11/12 flex flex-col items-center gap-32 mt-32">
          <Blogs />
          <Testimonials />
          <FAQ />
          <CallToAction setIsOpen={setIsOpen}/>
        </div>
        <div className="w-full flex flex-col items-center mt-32">
          <Footer />
        </div>
      </div>
    </div>
  </>
);
}
