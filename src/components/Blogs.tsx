import { blogs } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Blog from "./Blog";

export default function Blogs() {
    return (
        <div id="blogs" className="w-full flex flex-col">
            <div className="text-4xl text-black font-semibold">EXPLORE OUR BLOGS</div>
            <div className="flex items-start gap-20 mt-4">
                <div className="text-accent font-medium text-xl">{"[Blogs]"}</div>
                <div>
                    <div className="text-black text-base w-80">
                        {" Welcome to our blogs, where we dive deep into the world of technology, innovation, and industry insights"}
                    </div>
                    <div className="w-fit mt-10 px-2 py-1 rounded-lg bg-black/75 text-white flex items-center gap-4">
                        <div>Explore more</div>
                        <div className="text-4xl rounded from-primary to-secondary bg-gradient-to-br">
                            <Icon icon="iconamoon:arrow-right-1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full my-16 grid grid-cols-2 gap-4">
                {
                    blogs.map((blog, index) => {
                        return (
                            <Blog key={index} index={index + 1} blog={blog} />
                        )
                    })
                }
            </div>
        </div>
    )
}