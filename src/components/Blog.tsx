import { Icon } from "@iconify/react/dist/iconify.js";

interface ServiceProps {
    index: number;
    blog: Blog;
};

export default function Blog({ blog }: ServiceProps) {
    return (
        <div className="col-span-1 row-span-1 bg-black rounded-xl flex flex-col p-6">
            <div className="text-2xl text-white font-semibold mb-3">{blog.title}</div>
            <div className="text-lightGray mb-3">{blog.description}</div>
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                <div className="w-full sm:w-fit text-base text-white">
                    Writed by <span className="text-accent">{blog.author}</span> in <span>{blog.created_at}</span>
                </div>
                <div className="w-full sm:w-fit flex items-center gap-1 text-accent">
                    <div>Read more</div>
                    <Icon icon="iconamoon:arrow-right-1" />
                </div>
            </div>
        </div>
    )
}