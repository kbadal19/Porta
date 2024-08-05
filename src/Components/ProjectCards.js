import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1.2,
    },
  },
};

const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const ProjectCard = ({
  index,
  title,
  description,
  hueA,
  hueB,
  images,
  githubLink,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  const isMedapp = title.toLowerCase().includes("meditation");
  const isEmowell = title.toLowerCase().includes("emowell");

  return (
    <motion.div
      className={`card-container w-5/6 bg-white rounded-md z-50 shadow-md mt-32 p-4 flex flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
    >
      <div className="w-full md:w-2/4 relative aspect-w-16 aspect-h-9">
        <AnimatePresence initial={false}>
          <motion.img
            key={images[currentImage]}
            src={images[currentImage]}
            alt={title}
            className={`w-full h-full ${
              isMedapp ? "object-cover" : "object-contain"
            } rounded-md`}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
      <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p
            className="proj-desc"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              View on GitHub
            </button>
          </a>
          {isEmowell && (
            <a
              href="https://66b076611a567e8603e383e2--unrivaled-moonbeam-259772.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View Live Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
