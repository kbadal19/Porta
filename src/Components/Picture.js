import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../Utilities/cn";
import actualPic from "./actualPic.jpg";
import ReactCardFlip from "react-card-flip";

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
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
          className
        )}
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
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const words = [
    "Full-stack Developer",
    "UI Designer",
    "Software Engineer",
    "Front-end Architect",
  ];

  return (
    <div className="flex items-center justify-between p-4 rounded-lg">
      <div className="text-black flex-grow h-72 flex flex-col justify-center mr-16 border-r-2 border-black">
        <span className="font-extrabold text-7xl">Hi, I am Badal Kumar,</span>
        <span className="font-bold text-2xl mt-8">
          <FlipWords words={words} />
          <br />
          <div className="font-light text 2xl mt-8">with a thirst for more knowledge...</div>
        </span>
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="cursor-pointer w-72 h-72 flex items-center justify-center mr-36">
          <img
            className="rounded-full shadow-2xl w-full h-full"
            src={actualPic}
            alt="Profile"
          />
        </div>

        <div className="cursor-pointer flex items-center justify-center w-72 h-72 bg-white rounded-full mr-36">
          <span className="text-black">This is the back of the card.</span>
        </div>
      </ReactCardFlip>
    </div>
  );
}
