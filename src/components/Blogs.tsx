import { blogs } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useRef } from "react";
// import { scrollToCallToAction } from "@/utils/scrollTo";
import { Blog } from "./Blog";

export default function Blogs() {
  const headerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="blogs"
      className="w-full flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        ref={headerRef}
        className="text-4xl text-black font-semibold"
        variants={itemVariants}
      >
        EXPLORE OUR BLOGS
      </motion.div>

      <div className="flex flex-col sm:flex-col items-start gap-4 sm:gap-20 mt-4">
        <motion.div
          className="text-accent font-medium text-xl"
          variants={itemVariants}
        >
          {"[Blogs]"}
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="text-black text-base w-80">
            {
              " Welcome to our blogs, where we dive deep into the world of technology, innovation, and industry insights"
            }
          </div>

          <motion.div
            className="w-fit px-4 py-2 mt-4 rounded-lg cursor-not-allowed bg-black/50 text-white flex items-center gap-4"
          >
            <div>Explore more</div>
            <div className="text-3xl rounded ">
              <Icon icon="iconamoon:arrow-right-1" className="rotate-45" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="w-full my-16 grid sm:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {blogs.map((blog, index) => (
          <Blog key={index} index={index + 1} blog={blog} />
        ))}
        {blogs.length === 0 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="text-center text-gray-500">
              No blogs available at the moment.
            </div>
            <div className=" text-gray-500">Soon...</div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}