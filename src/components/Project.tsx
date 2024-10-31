import { SECONDARY_STAR_PNG } from "@/utils/consts";

interface ProjectProps {
    index: number;
    project: Project;
};

export default function Project({ index, project }: ProjectProps) {
    return (
        <div className="w-full flex flex-col border-t border-lightGray py-16">
            <div className="w-full flex items-center justify-between mb-8">
                <div className="text-3xl font-semibold text-white">{`[${index}]`}</div>
                <div className="w-1/2 flex items-center justify-between">
                    <div className="text-3xl font-semibold text-white">{project.title}</div>
                    <div className="h-12">
                        <img src={SECONDARY_STAR_PNG} />
                    </div>
                </div>
            </div>
            <div className="w-full flex">
                <div className="w-1/2">
                    <div className="text-base text-white">{project.description}</div>
                    <div className="mt-4 flex items-center flex-wrap gap-2">
                        {project.categories.map((category, index) => {
                            return (
                                <div key={index} className="text-xs">{category}</div>
                            )
                        })}
                    </div>
                    <div className="mt-8 flex items-center flex-wrap gap-2">
                        {project.skills.map((skill, index) => {
                            return (
                                <div key={index} className="text-xs border border-white rounded-full p-2">{skill}</div>
                            )
                        })}
                        <div key={index} className="text-xs text-black bg-white border-white rounded-full p-2">{"2023"}</div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col">
                    <div className="w-full aspect-video bg-gray-500 rounded-xl"></div>
                </div>
            </div>
        </div>
    )
}