import { Icon } from "@iconify/react/dist/iconify.js";
import { projects } from "@/utils/data";
import Project from "./Project";
import { scrollToCallToAction } from "@/utils/scrollTo";

export default function Projects() {
  return (
    <div id="projects" className="w-full flex flex-col">
      <div className="text-4xl text-white font-semibold">SELECTED WORKS</div>
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-20 mt-4">
        <div className="text-accent font-medium text-xl">{"[Works]"}</div>
        <div>
          <div className="text-white text-base w-80">
            {
              "Selected Works Discover a curated collection of our finest projects, showcasing our diverse expertise and creativity."
            }
          </div>
          <div
            onClick={scrollToCallToAction}
            className="w-fit px-4 text-black bg-white py-2 mt-4 rounded-lg cursor-pointer active:scale-105 transition-all duration-200 hover:opacity-95 flex items-center gap-4"
          >
            <div>Explore more</div>
            <div className=" text-white text-3xl rounded from-primary to-secondary bg-gradient-to-br">
              <Icon
                icon="iconamoon:arrow-right-1"
                className="rotate-45"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col my-16">
        {projects.map((project, index) => {
          return <Project key={index} index={index + 1} project={project} />;
        })}
      </div>
    </div>
  );
}
