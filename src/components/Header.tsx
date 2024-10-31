"use client";

import useScrollTo from "@/hooks/useScrollTo";
import { LOGO_PNG } from "@/utils/consts";

export default function Header() {
    const { scrollTo } = useScrollTo();

    return (
        <div className="w-full flex items-center justify-between py-8">
            <div className="h-8">
                <img className="w-full h-full rounded-full" src={LOGO_PNG} alt="logo" />
            </div>
            <div className="flex items-center gap-8">
                <div onClick={() => scrollTo("services")} className="text-base font-semibold text-black/60 cursor-pointer active:scale-105 duration-300">Services</div>
                <div onClick={() => scrollTo("about")} className="text-base font-semibold text-black/60 cursor-pointer active:scale-105 duration-300">About Us</div>
                <div onClick={() => scrollTo("projects")} className="text-base font-semibold text-black/60 cursor-pointer active:scale-105 duration-300">Projects</div>
                <div onClick={() => scrollTo("blogs")} className="text-base font-semibold text-black/60 cursor-pointer active:scale-105 duration-300">Blogs</div>
                <div onClick={() => scrollTo("testimonials")} className="text-base font-semibold text-black/60 cursor-pointer active:scale-105 duration-300">Testimonials</div>
                <div className="text-base font-semibold text-black/60 cursor-pointer active:scale-105 duration-300">Contact Us</div>
            </div>
        </div>
    )
}