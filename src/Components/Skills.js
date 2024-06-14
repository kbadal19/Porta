import React, { useEffect, useRef } from "react";
import {
  JavaIcon,
  PythonIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  DjangoIcon,
} from "./Icons";
import { motion } from "framer-motion";

const skills = [
  { proficiency: 80, IconComponent: JavaIcon},
  { proficiency: 90, IconComponent: PythonIcon},
  { proficiency: 75, IconComponent: ReactIcon},
  { proficiency: 70, IconComponent: NextIcon},
  { proficiency: 85, IconComponent: NodeIcon},
  { proficiency: 65, IconComponent: DjangoIcon},
];

const radius = 50;
const circumference = 2 * Math.PI * radius;

const getProgress = (proficiency) => {
  const offset = circumference - (proficiency / 100) * circumference;
  return offset;
};

export default function Skills() {
  const circlesRef = useRef([]);

  useEffect(() => {
    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        circle.style.strokeDashoffset = getProgress(skills[index].proficiency);
      }
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="relative flex justify-center items-center m-4 w-40 h-40 text-center"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <svg
            className="absolute w-full h-full animate-pulse"
            width="160"
            height="160"
          >
            <circle
              className="text-gray-300"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="80"
              cy="80"
            />
            <circle
              ref={(el) => (circlesRef.current[index] = el)}
              className="text-green-500"
              strokeWidth="6"
              strokeDasharray={circumference}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx="80"
              cy="80"
              style={{
                transition: "stroke-dashoffset 1.5s ease-out",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
                strokeDashoffset: circumference,
              }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-6xl"
            >
              <skill.IconComponent />
            </motion.div>
            <h3 className="text-xl">{skill.name}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
