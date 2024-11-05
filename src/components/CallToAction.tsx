import { ModalProps } from "@/types/Props";
import { WORK_GLOBALY_PNG } from "@/utils/consts";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function CallToAction({ setIsOpen }: ModalProps) {
  return (
    <div id="callToAction" className="w-full flex flex-col items-center bg-black rounded-xl py-8 relative">
      <div className="text-lg text-lightGray/75">
        {"[Need our services or inquiries?]"}
      </div>
      <div className="mt-8 text-3xl text-white">{"LET'S MAKE"}<br/> IT HAPPEN</div>

      <div
        className="w-fit mt-16 px-4 py-2 rounded-lg cursor-pointer active:scale-105 transition-all duration-200 hover:opacity-95 from-primary to-secondary bg-gradient-to-r text-white flex items-center gap-4"
        onClick={() => setIsOpen(true)}
      >
        <div>{"Let's discuss"}</div>
        <div className="text-3xl rounded bg-black text-white">
          <Icon icon="iconamoon:arrow-right-1" className="-rotate-45" />
        </div>
      </div>
      <img src={WORK_GLOBALY_PNG} className="hidden sm:block absolute bottom-6 left-4" />
    </div>
  );
}
