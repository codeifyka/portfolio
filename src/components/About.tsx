import { scrollToCallToAction } from "@/utils/scrollTo";
import { Icon } from "@iconify/react/dist/iconify.js";
import TeamMembers from "./TeamMembers";

export default function About() {
  return (
    <div id="about" className="w-full flex flex-col">
      <div className="text-4xl text-black font-semibold">ABOUT OUR TEAM</div>
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-20 mt-4">
        <div className="text-accent font-medium text-xl">{"[About us]"}</div>
        <div>
          <div className="text-black text-base w-80">
            {
              "With a passion for design and development, we take projects from ideation to launch, ensuring a seamless journey that leaves a lasting positive impact on the digital landscape and your business. "
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
        </div>
      </div>
      <TeamMembers />
    </div>
  );
}
