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

const projects = [
  {
    title: "Project 1",
    description:
      "Officia nostrud laboris proident cillum esse eiusmod consequat ullamco ex sit ut reprehenderit ipsum elit. Qui in exercitation officia irure velit qui ut consequat. Mollit cillum laboris reprehenderit sint deserunt aliqua et amet exercitation.",
    hueA: 340,
    hueB: 10,
    images: [emowell1, emowell2, emowell3],
    githubLink: "https://github.com/EmoWell",
  },
  {
    title: "Project 2",
    description:
      "Sunt eu irure minim amet ullamco excepteur incididunt esse exercitation non occaecat esse fugiat cillum. Excepteur elit exercitation magna commodo nisi sint tempor pariatur amet est deserunt ullamco do. Exercitation eiusmod nostrud ipsum voluptate consectetur adipisicing dolor ea. Exercitation sunt magna pariatur anim exercitation cillum eu magna esse. Qui cupidatat id minim ut Lorem tempor non voluptate officia.",
    hueA: 20,
    hueB: 40,
    images: [medapp1, medapp2, medapp3],
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    description:
      "Ipsum sint elit amet duis velit et et commodo. Et et commodo incididunt consequat eu dolore nulla Lorem cillum esse. Do cupidatat id exercitation qui ea aliquip qui. Occaecat excepteur laborum ullamco id labore culpa exercitation nisi irure eu. Deserunt fugiat eu ullamco voluptate deserunt qui consectetur aliqua eiusmod tempor. Aliqua et nulla laboris commodo nisi ipsum id excepteur deserunt. Occaecat dolore qui ea sunt irure esse cupidatat officia quis quis esse nostrud proident.",
    hueA: 60,
    hueB: 90,
    images: [todo1, todo2, todo3],
    githubLink: "https://github.com/yourusername/project3",
  },
  {
    title: "Project 4",
    description:
      "Enim non ea sint minim ullamco veniam adipisicing velit pariatur reprehenderit do. Id et nulla proident commodo incididunt duis magna tempor eiusmod eiusmod. Aliqua mollit id ad ut laboris eiusmod cupidatat do cillum aute commodo.",
    hueA: 80,
    hueB: 120,
    images: [
      "https://via.placeholder.com/150/FF0000/FFFFFF?text=Image1",
      "https://via.placeholder.com/150/00FF00/FFFFFF?text=Image2",
      "https://via.placeholder.com/150/0000FF/FFFFFF?text=Image3",
    ],
    githubLink: "https://github.com/yourusername/project4",
  },
];

export default function AcademicProjects() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-white mt-5">Academic Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
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
