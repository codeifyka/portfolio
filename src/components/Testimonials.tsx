import { testimonials } from "@/utils/data";
import { scrollToCallToAction } from "@/utils/scrollTo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonial = (index: number) => {
    if (scrollContainerRef.current) {
      const testimonialWidth =
        scrollContainerRef.current.firstElementChild?.clientWidth || 0;

      scrollContainerRef.current.scrollTo({
        left: testimonialWidth * index,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToTestimonial(selectedIndex);
  }, [selectedIndex]);

  return (
    <div id="testimonials" className="w-full flex flex-col">
      <div className="w-full flex flex-col sm:flex-row items-start justify-between">
        <div className="text-4xl text-black font-semibold whitespace-pre-line">
          {"Don't take my word\nfor it"}
        </div>
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-20 mt-4">
          <div className="text-accent font-medium text-xl">
            {"[Testimonials]"}
          </div>
          <div>
            <div className="text-black text-base sm:w-96 text-justify">
              {
                "Here's what my clients say about our collaboration. Their satisfaction and meeting expectations are my top priorities, ensuring the best experience possible."
              }
            </div>
            <div
              onClick={scrollToCallToAction}
              className="w-fit cursor-pointer active:scale-105 transition-all duration-200 hover:opacity-95 mt-10 px-2 py-1 rounded-lg bg-black/75 text-white flex items-center gap-4"
            >
              <div>{"Let's discuss"}</div>
              <div className="text-4xl rounded from-primary to-secondary bg-gradient-to-br">
                <Icon icon="iconamoon:arrow-right-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full flex flex-col md:flex-row gap-2 items-center mt-8 relative">
        <div
          className="bg-black cursor-pointer px-4 py-2 rounded-full text-white"
          onClick={() => setSelectedIndex((state) => Math.max(state - 1, 0))}
        >
          Prev
        </div>
        <div
          ref={scrollContainerRef}
          className="w-full overflow-hidden flex gap-4 mx-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 items-center w-full bg-black rounded-xl p-4"
              style={{ scrollSnapAlign: "start", minWidth: "100%" }}
            >
              <div className="text-white text-base">{testimonial.body}</div>
              <div className="w-full flex flex-col md:flex-row items-center justify-between mt-4">
                <div className="text-white text-xl">{testimonial.client}</div>
                <div className="text-accent font-medium">
                  {testimonial.services}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() =>
            setSelectedIndex((state) =>
              Math.min(state + 1, testimonials.length - 1)
            )
          }
          className="bg-black cursor-pointer px-4 py-2 rounded-full text-white"
        >
          Next
        </div>
      </div>
    </div>
  );
}
