import React, { useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";
import {
  JavaIcon,
  PythonIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  DjangoIcon,
  jsIcon,
  postgresIcon,
  springIcon,
  tsIcon,
  angularIcon,
  tailwindIcon,
} from "./Icons";
import { motion } from "framer-motion";

const skills = [
  { proficiency: 80, IconComponent: JavaIcon, name: "Java" },
  { proficiency: 90, IconComponent: PythonIcon, name: "Python" },
  { proficiency: 75, IconComponent: ReactIcon, name: "React" },
  { proficiency: 70, IconComponent: NextIcon, name: "Next.js" },
  { proficiency: 85, IconComponent: NodeIcon, name: "Node.js" },
  { proficiency: 65, IconComponent: DjangoIcon, name: "Django" },
  { proficiency: 80, IconComponent: jsIcon, name: "JavaScript" },
  { proficiency: 85, IconComponent: postgresIcon, name: "PostgreSQL" },
  { proficiency: 80, IconComponent: tsIcon, name: "TypeScript" },
  { proficiency: 70, IconComponent: springIcon, name: "Spring" },
  { proficiency: 60, IconComponent: angularIcon, name: "Angular" },
  { proficiency: 90, IconComponent: tailwindIcon, name: "Tailwind CSS" },
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
          className="relative flex justify-center items-center m-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 text-center"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.2 }}
          whileHover={{ scale: 1.3 }}
          data-tooltip-id={`tooltip-${index}`}
          data-tooltip-content={`${skill.name}: ${skill.proficiency}%`}
        >
          <svg
            className="absolute w-full h-full"
            width="100%"
            height="100%"
            viewBox="0 0 160 160"
            preserveAspectRatio="xMidYMid meet"
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
            <motion.circle
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
              initial={{ strokeDashoffset: getProgress(skill.proficiency) }}
              whileHover={{ strokeDashoffset: getProgress(100) }}
              style={{
                transition: "stroke-dashoffset 0.5s ease-out",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              <skill.IconComponent />
            </motion.div>
          </div>
          <Tooltip id={`tooltip-${index}`} />
        </motion.div>
      ))}
    </div>
  );
}
