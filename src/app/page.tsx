"use client";
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Modal from "@/components/Modal";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import {
  GRADIENT_1_PNG,
  GRADIENT_2_PNG,
  GRADIENT_3_PNG,
  GRADIENT_4_PNG,
  GRADIENT_5_PNG,
} from "@/utils/consts";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="w-11/12 flex flex-col items-center">
        <Header />
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen}/>}
      <div className="w-full flex flex-col items-center border-t rounded-t-3xl relative z-0 overflow-hidden mt-8">
        <img className="absolute top-0 right-0 -z-50" src={GRADIENT_1_PNG} />
        <img className="absolute left-0 -z-50" src={GRADIENT_2_PNG} />
        <img className="absolute right-0 bottom-0 -z-50" src={GRADIENT_5_PNG} />
        <HeroSection />
        <div className="w-full flex flex-col items-center relative z-0">
          <div className="w-11/12 flex flex-col items-center mt-32">
            <Services />
          </div>
          <img
            className="absolute bottom-0 right-0 translate-y-1/2 -z-50"
            src={GRADIENT_3_PNG}
          />
        </div>
        <div className="w-full flex flex-col items-center mt-32 bg-black rounded-t-3xl relative z-0">
          <div className="w-11/12 flex flex-col items-center py-10">
            <Projects />
          </div>
          <img
            className="absolute left-0 bottom-0 -z-50"
            src={GRADIENT_4_PNG}
          />
        </div>
        <div className="w-11/12 flex flex-col items-center mt-32">
          <About />
        </div>
        <div className="w-11/12 flex flex-col items-center gap-32 mt-32">
          <Blogs />
          <Testimonials />
          <CallToAction setIsOpen={setIsOpen}/>
        </div>
        <div className="w-full flex flex-col items-center mt-32">
          <Footer />
        </div>
      </div>
    </div>
  );
}
