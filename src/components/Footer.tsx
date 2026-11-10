import { LINKEDIN_PNG, LOGO_PNG } from "@/utils/consts";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center border-t border-black/20 rounded-t-3xl pt-16">
      <div className="w-11/12 flex flex-col md:flex-row items-start justify-between gap-12 pb-12">
        {/* Left 50%: Big Codeifyka Logo & Brand Description */}
        <div className="w-full md:w-1/2 flex flex-col items-start pr-0 md:pr-12">
          <div className="w-72 sm:w-80 md:w-[400px] max-w-full">
            <img
              className="w-full h-auto object-contain"
              src={LOGO_PNG}
              alt="Codeifyka logo"
            />
          </div>
          <p className="text-black/60 text-sm sm:text-base max-w-md mt-5 leading-relaxed">
            A collective of talented freelancers dedicated to delivering exceptional digital products, web experiences, and creative solutions.
          </p>
          <div className="flex items-center gap-2.5 mt-6 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-medium text-black/80">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </div>
        </div>

        {/* Right 50%: Contact & Socials */}
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-start md:justify-end gap-12 sm:gap-16 lg:gap-24">
          <div>
            <div className="font-semibold text-xl text-black mb-4">Contact</div>
            <div className="flex flex-col gap-2.5 text-sm text-black/75">
              <a
                href="mailto:codeifyka@gmail.com"
                className="hover:text-black hover:underline transition-colors duration-200"
              >
                codeifyka@gmail.com
              </a>
              <a
                href="tel:0798816073"
                className="hover:text-black hover:underline transition-colors duration-200"
              >
                +213 798 816 073
              </a>
              <a
                href="tel:0784630529"
                className="hover:text-black hover:underline transition-colors duration-200"
              >
                +213 784 630 529
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="font-semibold text-xl text-black">Social Media</div>
            <div className="text-sm text-black/75">
              Follow our work & updates
            </div>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.linkedin.com/company/codeifyka"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="hover:scale-110 active:scale-95 transition-transform duration-200"
              >
                <img className="h-9 w-9 object-contain" src={LINKEDIN_PNG} alt="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com/codeifyka"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="bg-black hover:bg-neutral-800 text-white p-2 rounded-full hover:scale-110 active:scale-95 transition-all duration-200"
              >
                <Icon
                  icon="lets-icons:insta-fill"
                  width="20"
                  height="20"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573659932418"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="bg-black hover:bg-neutral-800 text-white p-2 rounded-full hover:scale-110 active:scale-95 transition-all duration-200"
              >
                <Icon
                  icon="line-md:facebook"
                  width="20"
                  height="20"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 border-t border-black/10 py-6 text-black/60 flex flex-col sm:flex-row items-center justify-between text-xs font-medium gap-2">
        <div>{"© " + new Date().getFullYear() + " Codeifyka. All rights reserved."}</div>
        <div className="text-black/40">Crafted with passion & precision</div>
      </div>
    </div>
  );
}
