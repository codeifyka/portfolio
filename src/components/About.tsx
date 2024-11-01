import { BLOG_PNG, GOOGLE_PNG, LINKEDIN_PNG } from "@/utils/consts";
import { scrollToCallToAction } from "@/utils/scrollTo";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function About() {
  return (
    <div id="about" className="w-full flex flex-col">
      <div className="text-4xl text-black font-semibold">ABOUT OUR TEAM</div>
      <div className="flex items-start gap-20 mt-4">
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
      <div className="mt-16 w-full flex items-center">
        <div className="w-1/2 flex flex-col">
          <div className="w-11/12">
            <div className="text-4xl text-black">
              {'"Huy is phenomenal. An absolute pleasure to work with!"'}
            </div>
            <div className="mt-16 flex items-center gap-8">
              <div className="text-2xl text-black/75 font-bold">
                kadik salah eddine
              </div>
              <div className="flex items-center gap-2">
                <img className="h-8 w-8" src={LINKEDIN_PNG} />
                <img className="h-8 w-8" src={GOOGLE_PNG} />
                <img className="h-8 w-8" src={BLOG_PNG} />
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {["Design", "Web Development"].map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="text-xs border border-black/75 text-black/75 rounded-full p-2"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
            <div className="mt-16 flex items-center justify-between">
              <div></div>
              <div className="flex items-center gap-2">
                <div className="text-white bg-black rounded-full px-4 py-1">
                  Prev
                </div>
                <div className="text-white bg-black rounded-full px-4 py-1">
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="w-full aspect-[4/3] bg-gray-950 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
