import {
  ARROW_DOWN_PNG,
  COUNTER_BG_PNG,
  HERO_TEXT,
  HERO_TEXT_2,
  LOGO_PNG,
} from "@/utils/consts";
import { scrollToCallToAction } from "@/utils/scrollTo";
import { Icon } from "@iconify/react";

export default function HeroSection() {
  return (
    <div className="w-full flex flex-col items-center justify-between">
      <div className="w-11/12 flex flex-col py-4">
        <div className="h-10 w-fit">
          <img
            className="w-full h-full rounded-full"
            src={LOGO_PNG}
            alt="logo"
          />
        </div>
        <div className="w-1/2 mt-4 text-black/75 text-base">{HERO_TEXT}</div>
      </div>
      <div className="w-11/12 flex items-center justify-between text-accent/75 mt-16">
        <div className="w-1/2 flex items-start">
          <Icon
            icon="iconamoon:arrow-up-1"
            className="text-6xl rotate-[135deg]"
          />
          <div
            className="flex flex-col items-center justify-center bg-red-500"
            style={{
              background: `url(${COUNTER_BG_PNG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: 120,
              width: 120,
              height: 120,
            }}
          >
            <div className="text-base">Projects</div>
            <div className="font-semibold text-xl">22</div>
          </div>
          <div
            className="flex flex-col items-center justify-center bg-red-500"
            style={{
              background: `url(${COUNTER_BG_PNG})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: 120,
              width: 120,
              height: 120,
            }}
          >
            <div className="text-base">Client</div>
            <div className="font-semibold text-xl">12</div>
          </div>
        </div>

        <div className="w-1/3 flex items-start gap-2">
          <img src={ARROW_DOWN_PNG} className="h-6" />
          <div>
            <div className="text-black/75 font-medium">{HERO_TEXT_2}</div>
            <div
              onClick={scrollToCallToAction}
              className="w-fit px-4 py-2 mt-4 rounded-lg cursor-pointer active:scale-105 transition-all duration-200 hover:opacity-95 bg-black/75 text-white flex items-center gap-4"
            >
              <div>Get in touch</div>
              <div className="text-3xl rounded from-primary to-secondary bg-gradient-to-br">
                <Icon icon="iconamoon:arrow-right-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
