import { Icon } from "@iconify/react/dist/iconify.js";
import { projects } from "@/utils/data";
import Project from "./Project";
import { scrollToCallToAction } from "@/utils/scrollTo";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProjectWithAnimation = ({ index, project }:{index:number, project: Project}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Project index={index} project={project} />
    </motion.div>
  );
};

export default function Projects() {
  const headerRef = useRef(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      id="projects" 
      className="w-full flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div 
        ref={headerRef}
        className="text-4xl text-white font-semibold"
        variants={itemVariants}
      >
        SELECTED WORKS
      </motion.div>
      
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-20 mt-4">
        <motion.div 
          className="text-accent font-medium text-xl"
          variants={itemVariants}
        >
          {"[Works]"}
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="text-white text-base w-80">
            {"Selected Works Discover a curated collection of our finest projects, showcasing our diverse expertise and creativity."}
          </div>
          
          <motion.div
            onClick={scrollToCallToAction}
            className="w-fit px-4 text-black bg-white py-2 mt-4 rounded-lg cursor-pointer active:scale-105 transition-all duration-200 hover:opacity-95 flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div>Explore more</div>
            <div className="text-white text-3xl rounded from-primary to-secondary bg-gradient-to-br">
              <Icon
                icon="iconamoon:arrow-right-1"
                className="rotate-45"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full flex flex-col my-16">
        {projects.map((project, index) => (
          <ProjectWithAnimation 
            key={index} 
            index={index + 1} 
            project={project} 
          />
        ))}
      </div>
    </motion.div>
  );
}
