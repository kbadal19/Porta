import { motion } from "framer-motion";
import React, { useState } from "react";
import actualPic from "./actualPic.jpg";
import ReactCardFlip from "react-card-flip";

export default function Picture() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg">
      <div className="text-black flex-grow h-72 flex flex-col justify-center mr-16 border-r-2 border-black">
        <span className="font-extrabold text-7xl">Hi, I am Badal Kumar,</span>
        <span className="text-lg">
          a full-stack software developer
          <br />
          with focus on front-end
        </span>
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onClick={handleClick}
          className="cursor-pointer w-72 h-72 flex items-center justify-center mr-36"
        >
          <img
            className="rounded-full shadow-2xl w-full h-full"
            src={actualPic}
            alt="Profile"
          />
        </div>

        <div
          onClick={handleClick}
          className="cursor-pointer flex items-center justify-center w-72 h-72 bg-white rounded-full mr-36"
        >
          <span className="text-black">This is the back of the card.</span>
        </div>
      </ReactCardFlip>
    </div>
  );
}
