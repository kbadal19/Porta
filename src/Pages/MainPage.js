import React from "react";
import TopNavbar from "../Components/TopNavbar";
import Picture from "../Components/Picture";
import { InfiniteMovingCards } from "../Components/CertificateCards";
import AcademicProjects from "../Components/AcademicProjects";
import Skills from "../Components/Skills";
import Firefly from "../Components/Firefly";
import Contact from "../Components/Contact";

const items = [
  {
    quote: "This is a sample quote.",
    name: "John Doe",
    title: "Software Engineer",
  },
  {
    quote: "Another sample quote.",
    name: "Jane Smith",
    title: "Project Manager",
  },
];

export default function MainPage() {
  return (
    <div>
      <Firefly />
      <TopNavbar />
      <Picture />
      <Skills />
      <AcademicProjects />
      <InfiniteMovingCards items={items} />
      <Contact />
    </div>
  );
}
