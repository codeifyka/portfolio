import { BEHANCE_PNG, DEFAULT_MEMBER_PNG, GITHUB, LINKEDIN_PNG } from "@/utils/consts";
import { teamMembers } from "@/utils/data";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function TeamMembers() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: scrollContainerRef.current.clientWidth * selectedIndex,
                behavior: "smooth",
            });
        }
    }, [selectedIndex]);

    return (
        <div className="mt-16 w-full flex flex-col sm:flex-row items-center gap-8 sm:gap-0">
            <div className="w-full sm:w-1/2 flex flex-col">
                <div className="w-11/12">
                    <div ref={scrollContainerRef} className="w-full flex overflow-hidden" >
                        {
                            teamMembers.map((teamMember, index) => {
                                return (
                                    <div className="min-w-full" key={index}>
                                        <div className="text-4xl text-black">
                                            {teamMember.testimonial}
                                        </div>
                                        <div className="mt-16 flex items-center gap-8">
                                            <div className="text-2xl text-black/75 font-bold">{teamMember.name}</div>
                                            <div className="flex items-center gap-2">
                                                {
                                                    teamMember.linkedin_url && (
                                                        <Link href={teamMember.linkedin_url} target="_blank" title="Linkedin">
                                                            <img className="h-8 w-8" src={LINKEDIN_PNG} />
                                                        </Link>
                                                    )
                                                }
                                                {
                                                    teamMember.github_url && (
                                                        <Link href={teamMember.github_url} target="_blank" title="Github">
                                                            <img className="h-8 w-8" src={GITHUB} />
                                                        </Link>
                                                    )
                                                }
                                                {
                                                    teamMember.behance_url && (
                                                        <Link href={teamMember.behance_url} target="_blank" title="Behance">
                                                            <img className="h-8 w-8" src={BEHANCE_PNG} />
                                                        </Link>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="mt-4 flex flex-wrap items-center gap-2">
                                            {
                                                teamMember.skills.map((skill, index) => {
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
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mt-16 flex items-center justify-between">
                        <div></div>
                        <div className="flex items-center gap-2">
                            <div
                                onClick={() => setSelectedIndex(state => state > 0 ? state - 1 : state)}
                                className="text-white bg-black rounded-full px-4 py-1 cursor-pointer active:scale-105 duration-300 select-none"
                            >
                                Prev
                            </div>
                            <div
                                onClick={() => setSelectedIndex(state => state < (teamMembers.length - 1) ? state + 1 : state)}
                                className="text-white bg-black rounded-full px-4 py-1 cursor-pointer active:scale-105 duration-300 select-none"
                            >
                                Next
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col">
                <div className="w-full aspect-[4/3] rounded-xl">
                    <img className="w-full h-full aspect-[4/3] rounded-xl object-contain" src={teamMembers[selectedIndex].profile_image_url || DEFAULT_MEMBER_PNG} />
                </div>
            </div>
        </div>
    )
}