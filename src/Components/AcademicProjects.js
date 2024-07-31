import React from "react";
import ProjectCard from "../Components/ProjectCards";
import emowell1 from "../Pictures/emowell1.png";
import emowell2 from "../Pictures/emowell2.png";
import emowell3 from "../Pictures/emowell3.png";
import medapp1 from "../Pictures/medapp1.jpg";
import medapp2 from "../Pictures/medapp2.jpg";
import medapp3 from "../Pictures/medapp3.jpg";
import todo1 from "../Pictures/todo1.png";
import todo2 from "../Pictures/todo2.png";
import todo3 from "../Pictures/todo3.png";
import inf1 from "../Pictures/inf1.png";
import inf2 from "../Pictures/inf2.png";
import inf3 from "../Pictures/inf3.png";
import inf4 from "../Pictures/inf4.png";
import hms1 from "../Pictures/hms1.png";
import hms2 from "../Pictures/hms2.png";
import hms3 from "../Pictures/hms3.png";

const projects = [
  {
    title: "Emowell - Depression Detection Chatbot",
    description:
      "Officia nostrud laboris proident cillum esse eiusmod consequat ullamco ex sit ut reprehenderit ipsum elit. Qui in exercitation officia irure velit qui ut consequat. Mollit cillum laboris reprehenderit sint deserunt aliqua et amet exercitation.",
    hueA: 340,
    hueB: 10,
    images: [emowell1, emowell2, emowell3],
    githubLink: "https://github.com/EmoWell",
  },
  {
    title: "Meditation app",
    description:
      "Sunt eu irure minim amet ullamco excepteur incididunt esse exercitation non occaecat esse fugiat cillum. Excepteur elit exercitation magna commodo nisi sint tempor pariatur amet est deserunt ullamco do. Exercitation eiusmod nostrud ipsum voluptate consectetur adipisicing dolor ea. Exercitation sunt magna pariatur anim exercitation cillum eu magna esse. Qui cupidatat id minim ut Lorem tempor non voluptate officia.",
    hueA: 20,
    hueB: 40,
    images: [medapp1, medapp2, medapp3],
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Extensive to-do list",
    description:
      "Ipsum sint elit amet duis velit et et commodo. Et et commodo incididunt consequat eu dolore nulla Lorem cillum esse. Do cupidatat id exercitation qui ea aliquip qui. Occaecat excepteur laborum ullamco id labore culpa exercitation nisi irure eu. Deserunt fugiat eu ullamco voluptate deserunt qui consectetur aliqua eiusmod tempor. Aliqua et nulla laboris commodo nisi ipsum id excepteur deserunt. Occaecat dolore qui ea sunt irure esse cupidatat officia quis quis esse nostrud proident.",
    hueA: 60,
    hueB: 90,
    images: [todo1, todo2, todo3],
    githubLink: "https://github.com/yourusername/project3",
  },
  {
    title: "Influencer Dashboard",
    description:
      "Enim non ea sint minim ullamco veniam adipisicing velit pariatur reprehenderit do. Id et nulla proident commodo incididunt duis magna tempor eiusmod eiusmod. Aliqua mollit id ad ut laboris eiusmod cupidatat do cillum aute commodo.",
    hueA: 80,
    hueB: 120,
    images: [inf1, inf2, inf3, inf4],
    githubLink: "https://github.com/yourusername/project4",
  },
  {
    title: "Hospital Management Application",
    description:
      "Officia nostrud laboris proident cillum esse eiusmod consequat ullamco ex sit ut reprehenderit ipsum elit. Qui in exercitation officia irure velit qui ut consequat. Mollit cillum laboris reprehenderit sint deserunt aliqua et amet exercitation.",
    hueA: 340,
    hueB: 10,
    images: [hms1, hms2, hms3],
    githubLink: "https://github.com/EmoWell",
  },
];

export default function AcademicProjects() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-white mt-5 text-4xl font-bold">Academic Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          index={index}
          title={project.title}
          description={project.description}
          hueA={project.hueA}
          hueB={project.hueB}
          images={project.images}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
}
