import { LINKEDIN_PNG, LOGO_PNG } from "@/utils/consts";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center border-t border-black/75 rounded-t-3xl">
      <div className="w-11/12 flex flex-col sm:flex-row sm:items-center gap-16 mt-16">
        <div className="h-8">
          <img className="h-full rounded-full" src={LOGO_PNG} alt="logo" />
        </div>
        <div>
          <div className="font-semibold text-2xl text-black mb-3">Contact</div>
          <div className="flex flex-col gap-1">
            <a href="mailto:codeifyka@gmail.com" className="text-black">codeifyka@gmail.com</a>
            <a href="tel:0798816073" className="text-black">+213798816073</a>
            <a href="tel:0784630529" className="text-black">+213784630529</a>
          </div>
        </div>
        <div className="flex flex-col text-center gap-4">
          <div className="text-black whitespace-pre-line text-start">
            {"To see our content on\nsocial media"}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={"https://www.linkedin.com/company/codeifyka"}
              target="_blank"
              title="Linkedin"
            >
              <img className="h-8 w-8" src={LINKEDIN_PNG} />
            </a>{" "}
            <a
              href={"https://www.instagram.com/codeifyka"}
              target="_blank"
              title="Instagram"
            >
              <div className=" bg-black p-1 rounded-full">
                <Icon
                  icon="lets-icons:insta-fill"
                  width="24"
                  height="24"
                  className="text-white "
                />
              </div>
            </a>
            <a
              href={"https://www.facebook.com/profile.php?id=61573659932418"}
              target="_blank"
              title="Facebook"
            >
              <div className=" bg-black p-1 rounded-full">
                <Icon
                  icon="line-md:facebook"
                  width="24"
                  height="24"
                  className="text-white "
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-11/12 border-t border-black py-3 text-black text-center text-xs font-semibold mt-16">
        {"© " + new Date().getFullYear() + " Codeifyka. All rights reserved."}
      </div>
    </div>
  );
}
