import { SECONDARY_STAR_PNG } from "@/utils/consts";
import Link from "next/link";

interface ProjectProps {
    index: number;
    project: Project;
};

export default function Project({ index, project }: ProjectProps) {
    return (
        <div className="w-full flex flex-col border-t border-lightGray py-16">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-8">
                <div className="w-full sm:w-fit text-3xl font-semibold text-white">{`[${index}]`}</div>
                <div className="w-full sm:w-1/2 flex items-center justify-between">
                    <Link href={project.preview_url || project.source_code_url || ""} target="_blank">
                        <div className="text-3xl font-semibold text-white">{project.title}</div>
                    </Link>
                    <div className="h-12">
                        <img src={SECONDARY_STAR_PNG} />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row gap-8 sm:gap-0">
                <div className="w-full sm:w-1/2">
                    <div className="text-base text-white">{project.description}</div>
                    <div className="mt-4 flex items-center flex-wrap gap-2">
                        {project.categories.map((category, index) => {
                            return (
                                <div key={index} className="text-xs">{category}</div>
                            )
                        })}
                        {
                            project.source_code_url && (
                                <Link href={project.source_code_url} target="_blank">
                                    <div className="text-xs underline">Source Code</div>
                                </Link>
                            )
                        }
                        {
                            project.preview_url && (
                                <Link href={project.preview_url} target="_blank">
                                    <div className="text-xs underline">Preview</div>
                                </Link>
                            )
                        }
                    </div>
                    <div className="mt-8 flex items-center flex-wrap gap-2">
                        {project.skills.map((skill, index) => {
                            return (
                                <div key={index} className="text-xs border border-white rounded-full p-2">{skill}</div>
                            )
                        })}
                        <div key={index} className="text-xs text-black bg-white border-white rounded-full p-2">{project.created_at}</div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col">
                    <div className="w-full aspect-video bg-gray-500 rounded-xl">
                        <img src={project.thumbnail_url} className="w-full aspect-video bg-gray-500 rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}