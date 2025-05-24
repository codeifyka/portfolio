import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ setIsOpen }: ModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gray-500/50 z-50"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="bg-foreground py-12 px-14 rounded-lg shadow-lg relative flex flex-col items-start gap-10"
      >
        <div className="text-black/75">
          Contact us and we will bring your flexible work vision to life.
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <div className="font-semibold text-black flex items-center gap-1">
              Fullname <div className="text-red-600">*</div>
            </div>
            <input
              type="text"
              className="border-b border-black/30 focus:border-black focus:placeholder:text-black hover:border-black py-2 bg-transparent outline-none duration-200 transition-all text-black hover:placeholder:text-black"
              placeholder="Enter your fullname"
            />
          </div>
          <div>
            <div className="font-semibold text-black flex items-center gap-1">
              Email <div className="text-red-600">*</div>
            </div>
            <input
              type="email"
              className="border-b border-black/30 focus:border-black focus:placeholder:text-black hover:border-black py-2 bg-transparent outline-none duration-200 transition-all text-black hover:placeholder:text-black"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="font-semibold text-black flex items-center gap-1">
            Phone Number <div className="text-red-600">*</div>
          </div>
          <input
            type="number"
            className="border-b w-full border-black/30 focus:border-black focus:placeholder:text-black hover:border-black py-2 bg-transparent outline-none duration-200 transition-all text-black hover:placeholder:text-black"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="w-fit px-4 py-2 rounded-lg cursor-pointer active:scale-105 transition-all duration-200 hover:opacity-95 bg-black/75 text-white flex items-center gap-4">
          <div>Send</div>
          <div className="text-3xl rounded from-primary to-secondary bg-gradient-to-br">
            <Icon icon="iconamoon:arrow-right-1" className="-rotate-45" />
          </div>
        </div>
        <button
          className="px-4 py-2 hover:text-opacity-70 text-accent absolute top-0 right-0 rounded"
          onClick={() => setIsOpen(false)}
        >
          <Icon icon="material-symbols:close" width="32" height="32" />
        </button>
      </motion.div>
    </motion.div>
  );
}