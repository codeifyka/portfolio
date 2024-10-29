import { STAR_PNG } from "@/utils/consts";

interface ServiceProps {
    index: number;
    service: Service;
};

export default function Service({ index, service }: ServiceProps) {
    return (
        <div className="w-full flex border-t border-accent py-16">
            <div className="w-1/3">
                <div className="text-3xl font-semibold text-black">{`[${index}]`}</div>
            </div>
            <div className="w-2/3 flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="text-3xl font-semibold text-black">{service.title}</div>
                    <div className="h-12">
                        <img src={STAR_PNG} />
                    </div>
                </div>
                <div className="mt-4 text-base text-black">{service.description}</div>
            </div>
        </div>
    )
}