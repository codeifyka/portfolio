"use client";

import { faqs } from "@/utils/data";
import { scrollToCallToAction } from "@/utils/scrollTo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="faq"
      className="w-full flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        className="text-4xl text-black font-semibold tracking-tight"
        variants={itemVariants}
      >
        FREQUENTLY ASKED QUESTIONS
      </motion.div>

      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-20 mt-4">
        <motion.div
          className="text-accent font-medium text-xl"
          variants={itemVariants}
        >
          {"[FAQ]"}
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="text-black text-base w-80 text-justify">
            {
              "Addressing tough questions upfront shows transparency and saves time. Here are answers to the most common questions before getting started."
            }
          </div>

          <div
            onClick={scrollToCallToAction}
            className="w-fit px-4 py-2 mt-4 rounded-lg cursor-pointer active:scale-105 transition-all duration-200 hover:opacity-95 bg-black/75 text-white flex items-center gap-4"
          >
            <div>Book a call</div>
            <div className="text-3xl rounded from-primary to-secondary bg-gradient-to-br">
              <Icon icon="iconamoon:arrow-right-1" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Accordion Questions List */}
      <div className="w-full flex flex-col my-16">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const formattedIndex = index + 1 < 10 ? `[0${index + 1}]` : `[${index + 1}]`;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`w-full flex flex-col border-t border-accent py-8 transition-colors ${
                index === faqs.length - 1 ? "border-b" : ""
              }`}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between cursor-pointer group select-none"
              >
                <div className="w-full sm:w-fit text-2xl sm:text-3xl font-semibold text-black/90">
                  {formattedIndex}
                </div>

                <div className="w-full sm:w-2/3 flex items-center justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black group-hover:text-accent transition-colors">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? "bg-black text-white"
                        : "bg-black/5 text-black group-hover:bg-black/10"
                    }`}
                  >
                    <Icon icon="iconamoon:arrow-down-2" width="22" height="22" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="w-full flex flex-col sm:flex-row pt-6">
                      <div className="w-full sm:w-1/3" />
                      <div className="w-full sm:w-2/3">
                        <p className="text-base text-black/80 text-justify leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
