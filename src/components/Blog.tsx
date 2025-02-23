import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlogProps {
    index: number;
    blog: Blog;
  }
  
export const Blog = ({ blog, index }: BlogProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="col-span-1 row-span-1 bg-black rounded-xl flex flex-col p-6"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="text-2xl text-white font-semibold mb-3"
        >
          {blog.title}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="text-lightGray mb-3"
        >
          {blog.description}
        </motion.div>
        <motion.div 
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <div className="w-full sm:w-fit text-base text-white">
            Writed by <span className="text-accent">{blog.author}</span> in{" "}
            <span>{blog.created_at}</span>
          </div>
          <motion.div 
            className="w-full sm:w-fit flex items-center gap-1 text-accent cursor-pointer"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div>Read more</div>
            <Icon icon="iconamoon:arrow-right-1" />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };