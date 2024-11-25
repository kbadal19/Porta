import React from "react";
import ProjectCard from "../Components/ProjectCards";
import emowell1 from "../Pictures/emowell1.jpg";
import emowell2 from "../Pictures/emowell2.jpg";
import emowell3 from "../Pictures/emowell3.jpg";
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
import real1 from "../Pictures/real1.png";
import real2 from "../Pictures/real2.png";
import real3 from "../Pictures/real3.png";
import real4 from "../Pictures/real4.png";
import real5 from "../Pictures/real5.png";
const projects = [
  {
    title: "Emowell - Depression Detection Chatbot",
    description: [
      "Employs advanced PHQ-9 and BDI-2 questionnaires for precise depression detection.",
      "Uses machine learning models to assess depression severity based on user responses.",
      "Applies ensemble learning with a soft voting classifier for improved accuracy.",
      "Integrates Knox authentication tokens to protect user privacy.",
      "Provides a fully responsive design for a seamless experience on all devices.",
      "Published findings in a paper at ICMRI 2024.",
    ],
    hueA: 340,
    hueB: 10,
    images: [emowell1, emowell2, emowell3],
    githubLink: "https://github.com/kbadal19/Final-Year-Project",
  },
  {
    title: "Real Estate Web Application",
    description: [
      "Built with React and TypeScript, featuring smooth animations via Framer Motion.",
      "Static property data for now; backend integration is in progress.",
      "Responsive design with Tailwind CSS, ensuring usability across all devices.",
      "Includes four key sections: Home, Properties, Contact, and About Us.",
      "Interactive UI with animated transitions and hover effects.",
      "Focused on clean, modern, and mobile-first design for a real estate experience.",
    ],
    hueA: 20,
    hueB: 40,
    images: [real1, real2, real3, real4, real5],
    githubLink: "https://github.com/kbadal19/react-home",
    realStateLink:"https://react-home-sage.vercel.app/",
  },
  {
    title: "Extensive to-do list",
    description: [
      "Create, edit, assign, delete, and manage tasks with filtering and sorting.",
      "Backend uses RESTful API with Flask and PostgreSQL in an MVC architecture.",
      "Frontend built with Angular 18, NgRx for state management, and Angular Material for styling.",
      "Features task management, assignment linking, status updates, and efficient querying.",
      "Database includes Users, Tasks, and TaskAssignments with many-to-many relationships.",
      "API endpoints handle user authentication, task operations, and assignment management.",
    ],
    hueA: 60,
    hueB: 90,
    images: [todo1, todo2, todo3],
    githubLink: "https://github.com/kbadal19/Glorified-ToDo",
  },
  {
    title: "Influencer Dashboard",
    description: [
      "Rich profiles with high-quality images, videos, and detailed bios.",
      "Advanced search with filters for categories, follower count, and engagement rate.",
      "Responsive design optimized for all devices.",
      "Live chat support and user review system.",
      "Automated profile and campaign management with CRM integration.",
      "Comprehensive SEO strategies and robust social media integration.",
    ],
    hueA: 80,
    hueB: 120,
    images: [inf1, inf2, inf3, inf4],
    githubLink: "https://github.com/yourusername/ReactTask",
  },
  {
    title: "Hospital Management Application",
    description: [
      "Comprehensive patient profiles with medical history and treatment plans.",
      "Easy appointment scheduling and management.",
      "Management tools for doctor and nurse schedules.",
      "Secure telemedicine platform for virtual consultations.",
      "Efficient search for patients, appointments, and records.",
      "Responsive design for desktop and mobile devices.",
      "Enhanced data security with encryption and access controls.",
    ],
    hueA: 340,
    hueB: 10,
    images: [hms1, hms2, hms3],
    githubLink: "https://github.com/hmsdb",
  },
];

export default function AcademicProjects() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-white mt-5 text-4xl font-bold z-50">
        Academic Projects
      </h1>
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
