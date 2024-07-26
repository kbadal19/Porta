import React, { useEffect, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
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
  gitIcon,
  gcpIcon,
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
  { proficiency: 80, IconComponent: gitIcon, name: "Git" },
  { proficiency: 70, IconComponent: gcpIcon, name: "GCP" },
];

const radius = 40;
const circumference = 2 * Math.PI * radius;

const getProgress = (proficiency) => {
  const offset = circumference - (proficiency / 100) * circumference;
  return offset;
};

const Skills = () => {
  const circlesRef = useRef([]);

  useEffect(() => {
    circlesRef.current.forEach((circle, index) => {
      if (circle) {
        circle.style.strokeDashoffset = getProgress(skills[index].proficiency);
      }
    });
  }, []);

  return (
    <div className="flex flex-wrap justify-center z-50">
      {skills.map((skill, index) => (
        <Tooltip
          key={index}
          title={`${skill.name}: ${skill.proficiency}%`}
          placement="top"
          arrow
        >
          <motion.div
            className="relative flex justify-center items-center m-4 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 text-center"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1.2 }}
            whileHover={{ scale: 1.5 }}
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
                className="text-cyan-600"
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="80"
                cy="80"
                initial={{ strokeDashoffset: circumference }}
                animate={{
                  strokeDashoffset: getProgress(skills[index].proficiency),
                  transition: { duration: 1 },
                }}
                whileHover={{
                  strokeDashoffset: getProgress(100),
                  transition: { duration: 0.5 },
                }}
                style={{
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
          </motion.div>
        </Tooltip>
      ))}
    </div>
  );
};

export default Skills;
