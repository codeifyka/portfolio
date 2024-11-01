import { Icon } from "@iconify/react/dist/iconify.js";
import Service from "./Service";
import { services } from "@/utils/data";
import { scrollToCallToAction } from "@/utils/scrollTo";

export default function Services() {
  return (
    <div id="services" className="w-full flex flex-col relative">
      <div className="text-4xl text-black font-semibold">
        HOW CAN I HELP YOU
      </div>
      <div className="flex items-start gap-20 mt-4">
        <div className="text-accent font-medium text-xl">{"[Services]"}</div>
        <div>
          <div className="text-black text-base w-80">
            {
              "Our dedicated team delivers top-notch results, tailored to meet your unique needs. Explore our services and let us bring your vision to life."
            }
          </div>
          <div
            onClick={scrollToCallToAction}
            className="w-fit px-4 py-2 mt-4 rounded-lg cursor-pointer active:scale-105 transition-all duration-200 hover:opacity-95 bg-black/75 text-white flex items-center gap-4"
          >
            <div>Discuss a project</div>
            <div className="text-3xl rounded from-primary to-secondary bg-gradient-to-br">
              <Icon icon="iconamoon:arrow-right-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col my-16">
        {services.map((service, index) => {
          return <Service key={index} index={index + 1} service={service} />;
        })}
      </div>
    </div>
  );
}
