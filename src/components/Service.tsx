import { STAR_PNG } from "@/utils/consts";

interface ServiceProps {
    index: number;
    service: Service;
};

export default function Service({ index, service }: ServiceProps) {
    return (
        <div className="w-full flex flex-col border-t border-accent py-16">
            <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between mb-4">
                <div className="w-full sm:w-fit text-3xl font-semibold text-black">{`[${index}]`}</div>
                <div className="w-full sm:w-2/3 flex items-center justify-between">
                    <div className="text-3xl font-semibold text-black">{service.title}</div>
                    <div className="h-12">
                        <img src={STAR_PNG} />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3">

                </div>
                <div className="w-full sm:w-2/3 flex flex-col">
                    <div className="text-base text-black">{service.description}</div>
                </div>
            </div>
        </div>
    )
}