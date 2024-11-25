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

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
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
  realStateLink, // New prop for the second live link
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
  const isRealState = title.toLowerCase().includes("real");

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
        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <h2 className="text-2xl font-bold mb-5">{title}</h2>
          {Array.isArray(description) ? (
            <ul className="proj-desc list-disc list-inside text-sm">
              {description.map((point, index) => (
                <motion.li
                  key={index}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </motion.div>
        <div className="mt-4 flex justify-center space-x-4">
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            variants={buttonVariants}
          >
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              View on GitHub
            </button>
          </motion.a>
          {isEmowell && (
            <motion.a
              href="https://66b076611a567e8603e383e2--unrivaled-moonbeam-259772.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={buttonVariants}
            >
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View Emowell
              </button>
            </motion.a>
          )}
          {isRealState && (
            <motion.a
              href="https://react-home-sage.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={buttonVariants}
            >
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                View Real Estate Website
              </button>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
