import { BEHANCE_PNG, GITHUB, LINKEDIN_PNG, LOGO_PNG } from "@/utils/consts";

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
                        <div className="text-black">codeifyka@gmail.com</div>
                        <div className="text-black">+21345678993</div>
                    </div>
                </div>
                <div className="flex flex-col text-center gap-4">
                    <div className="text-black whitespace-pre-line text-start">{"To see our content on\nsocial media"}</div>
                    <div className="flex items-center gap-2">
                        <img className="h-8 w-8" src={LINKEDIN_PNG} />
                        <img className="h-8 w-8" src={GITHUB} />
                        <img className="h-8 w-8" src={BEHANCE_PNG} />
                    </div>
                </div>
            </div>
            <div className="w-11/12 border-t border-black py-3 text-black text-center text-xs font-semibold mt-16">{"© 2023 Codeifyka. All rights reserved."}</div>
        </div>
    )
}