import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../Utilities/cn";
import actualPic from "./actualPic.jpg";

const FlipWords = ({ words, duration = 3000, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn("z-10 inline-block relative text-left px-2", className)}
        key={currentWord}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <span key={currentWord + wordIndex} className="inline-block mr-1">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={currentWord + wordIndex + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: letterIndex * 0.08,
                  duration: 0.4,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default function Picture() {
  const words = [
    "Full-stack Developer",
    "UI Designer",
    "Software Engineer",
    "System Architect",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 rounded-lg text-gray-200">
      <div className="flex-grow h-72 flex flex-col justify-center lg:mr-16 border-r-2 border-black lg:border-none">
        <span className="font-extrabold text-4xl sm:text-5xl lg:text-7xl">
          Hi, I am Badal Kumar,
        </span>
        <span className="font-bold text-lg sm:text-xl lg:text-2xl mt-8">
          <FlipWords words={words} className="text-gray-200" />
          <br />
          <div className="font-light text-lg sm:text-xl lg:text-2xl mt-8">
            with a thirst for more knowledge...
          </div>
        </span>
      </div>
      <div className="cursor-pointer w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center lg:mr-36 mt-8 lg:mt-0">
        <img
          className="rounded-full shadow-2xl w-full h-full"
          src={actualPic}
          alt="Profile"
        />
      </div>
    </div>
  );
}
