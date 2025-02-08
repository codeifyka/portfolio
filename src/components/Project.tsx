import { SECONDARY_STAR_PNG } from "@/utils/consts";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ProjectProps {
  index: number;
  project: Project;
}

export default function Project({ index, project }: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = project.other_images || [];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const selectImage = (index: number) => setCurrentImageIndex(index);

  return (
    <div className="w-full flex flex-col border-t border-lightGray py-16">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between mb-8">
        <div className="w-full sm:w-fit text-3xl font-semibold text-white">
          {`[${index}]`}
        </div>
        <div className="w-full sm:w-1/2 flex items-center justify-between">
          <Link
            href={project.preview_url || project.source_code_url || ""}
            target="_blank"
          >
            <div className="text-3xl font-semibold text-white">
              {project.title}
            </div>
          </Link>
          <div className="h-12">
            <img src={SECONDARY_STAR_PNG} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-8">
        <div className="w-full">
          <div className="text-base text-white">{project.description}</div>
          <div className="mt-4 flex items-center flex-wrap gap-2">
            {project.categories.map((category, index) => (
              <div key={index} className="text-xs">
                {category}
              </div>
            ))}
            {project.source_code_url && (
              <Link href={project.source_code_url} target="_blank">
                <div className="text-xs underline">Source Code</div>
              </Link>
            )}
            {project.preview_url && (
              <Link href={project.preview_url} target="_blank">
                <div className="text-xs underline">Preview</div>
              </Link>
            )}
          </div>
          <div className="mt-8 flex items-center flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <div
                key={index}
                className="text-xs border border-white rounded-full p-2"
              >
                {skill}
              </div>
            ))}
            <div
              key={index}
              className="text-xs text-black bg-white border-white rounded-full p-2"
            >
              {project.created_at}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div
            className="w-full aspect-video bg-gray-500 rounded-xl cursor-pointer"
            onClick={openModal}
          >
            <img
              src={project.thumbnail_url}
              className="w-full aspect-video bg-gray-500 rounded-xl object-contain"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative bg-white/25 p-8 rounded-xl max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[currentImageIndex]}
                  src={images[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  className="w-full max-h-[80vh] rounded-lg object-contain"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-black transition-all duration-200 hover:text-white hover:bg-black  bg-lightGray rounded-full p-2"
              >
                <Icon
                  icon="ion:close-sharp"
                  width="24"
                  height="24"
                />
              </button>

              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform text-black transition-all duration-200 hover:text-white hover:bg-black -translate-y-1/2 bg-lightGray p-3 rounded-full"
              >
                <Icon
                  icon="ic:outline-navigate-next"
                  width="24"
                  height="24"
                  className="rotate-180"
                />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform text-black transition-all duration-200 hover:text-white hover:bg-black -translate-y-1/2 bg-lightGray p-3 rounded-full"
              >
                <Icon
                  icon="ic:outline-navigate-next"
                  width="24"
                  height="24"
                />
              </button>

              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`w-4 h-4 rounded-full cursor-pointer ${
                      currentImageIndex === index
                        ? "bg-secondary"
                        : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
