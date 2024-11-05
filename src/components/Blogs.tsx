import { blogs } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import Blog from "./Blog";
import { scrollToCallToAction } from "@/utils/scrollTo";

export default function Blogs() {
  return (
    <div id="blogs" className="w-full flex flex-col">
      <div className="text-4xl text-black font-semibold">EXPLORE OUR BLOGS</div>
      <div className="flex flex-col sm:flex-col items-start gap-4 sm:gap-20 mt-4">
        <div className="text-accent font-medium text-xl">{"[Blogs]"}</div>
        <div>
          <div className="text-black text-base w-80">
            {
              " Welcome to our blogs, where we dive deep into the world of technology, innovation, and industry insights"
            }
          </div>
          <div
            onClick={scrollToCallToAction}
            className="w-fit px-4 py-2 mt-4 rounded-lg cursor-pointer active:scale-105 transition-all duration-200 hover:opacity-95 bg-black/75 text-white flex items-center gap-4"
          >
            <div>Explore more</div>
            <div className="text-3xl rounded from-primary to-secondary bg-gradient-to-br ">
              <Icon icon="iconamoon:arrow-right-1" className="rotate-45"/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-16 grid sm:grid-cols-2 gap-4">
        {blogs.map((blog, index) => {
          return <Blog key={index} index={index + 1} blog={blog} />;
        })}
      </div>
    </div>
  );
}
