"use client";

import useScrollTo from "@/hooks/useScrollTo";
import { LOGO_PNG } from "@/utils/consts";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollTo } = useScrollTo();

    const scrollToWrapper = (section: string) => {
        setIsOpen(false);
        scrollTo(section);
    }

    return (
        <div className="w-full flex items-center justify-between py-8">
            <div className="h-8">
                <img className="sm:w-full h-full rounded-full" src={LOGO_PNG} alt="logo" />
            </div>
            <div className={`sm:static fixed left-0 top-24 z-50 w-full h-screen sm:h-fit sm:w-fit ${isOpen ? "flex" : "opacity-0 sm:opacity-100 sm:flex"} flex-col sm:flex-row items-center gap-8 sm:bg-transparent bg-white sm:py-0 py-8 duration-300`}>
                <div onClick={() => scrollToWrapper("services")} className={styles.navItem}>Services</div>
                <div onClick={() => scrollToWrapper("about")} className={styles.navItem}>About Us</div>
                <div onClick={() => scrollToWrapper("projects")} className={styles.navItem}>Projects</div>
                <div onClick={() => scrollToWrapper("blogs")} className={styles.navItem}>Blogs</div>
                <div onClick={() => scrollToWrapper("testimonials")} className={styles.navItem}>Testimonials</div>
                <div className={styles.navItem}>Contact Us</div>
            </div>
            <button className="sm:hidden text-gray-500 w-10 h-10 relative focus:outline-none bg-white" onClick={() => setIsOpen(state => !state)}>
                <span className="sr-only">Open main menu</span>
                <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                    <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}></span>
                    <span aria-hidden="true" className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${isOpen ? "opacity-0" : ""}`} ></span>
                    <span aria-hidden="true" className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}></span>
                </div>
            </button>
        </div>
    )
}


const styles = {
    navItem: "text-base font-semibold text-black/60 cursor-pointer active:scale-105 duration-300",
};