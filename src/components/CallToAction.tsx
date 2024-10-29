import { WORK_GLOBALY_PNG } from "@/utils/consts";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function CallToAction() {
    return (
        <div className="w-full flex flex-col items-center bg-black rounded-xl py-8 relative">
            <div className="text-xl text-lightGray">{"[Need our services or inquiries?]"}</div>
            <div className="mt-8 text-3xl text-white">{"LET'S MAKE\nIT HAPPEN"}</div>
            <div className="w-fit mt-16 px-4 py-1 rounded-lg from-primary to-secondary bg-gradient-to-r text-black flex items-center gap-4">
                <div>{"Let's discuss"}</div>
                <div className="text-4xl rounded bg-black text-white">
                    <Icon icon="iconamoon:arrow-right-1" className="-rotate-45" />
                </div>
            </div>
            <img src={WORK_GLOBALY_PNG} className="absolute bottom-6 left-4" />
        </div>
    )
}