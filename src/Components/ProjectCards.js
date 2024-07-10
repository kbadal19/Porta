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
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="card-container w-5/6 bg-white rounded-md shadow-md mt-5 p-4 flex"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardVariants}
    >
      <div className="w-1/3 relative">
        <AnimatePresence initial={false}>
          <motion.img
            key={images[currentImage]}
            src={images[currentImage]}
            alt={title}
            className="w-full h-full object-cover rounded-md absolute"
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="mt-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              View on GitHub
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
