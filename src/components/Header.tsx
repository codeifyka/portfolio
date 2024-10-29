import { LOGO_PNG } from "@/utils/consts";

export default function Header() {
    return (
        <div className="w-full flex items-center justify-between py-8">
            <div className="h-8">
                <img className="w-full h-full rounded-full" src={LOGO_PNG} alt="logo" />
            </div>
            <div className="flex items-center gap-8">
                <div className="text-base font-semibold text-black/60">Services</div>
                <div className="text-base font-semibold text-black/60">About Us</div>
                <div className="text-base font-semibold text-black/60">Projects</div>
                <div className="text-base font-semibold text-black/60">Blogs</div>
                <div className="text-base font-semibold text-black/60">Testimonials</div>
                <div className="text-base font-semibold text-black/60">Contact Us</div>
            </div>
        </div>
    )
}