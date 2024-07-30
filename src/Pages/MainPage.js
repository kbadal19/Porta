import React from "react";
import TopNavbar from "../Components/TopNavbar";
import Picture from "../Components/Picture";
import { InfiniteMovingCards } from "../Components/CertificateCards";
import AcademicProjects from "../Components/AcademicProjects";
import Skills from "../Components/Skills";
import Firefly from "../Components/Firefly";
import Contact from "../Components/Contact";
import devops from "../Pictures/Certificates/devops.png"
import icmri from "../Pictures/Certificates/ICMRI.png"
import jp from "../Pictures/Certificates/JPMorgan.png"
import js from "../Pictures/Certificates/JS.png"
import prob from "../Pictures/Certificates/probSolving.png"
import sql from "../Pictures/Certificates/SQL.png"
import flipkart from "../Pictures/Certificates/flipkart.png"
import react from "../Pictures/Certificates/react.png"

const items = [
  {
    title: "Flipkart Grid 5.5",
    image: flipkart,
    link: "https://unstop.com/certificate-preview/c856e4f7-5d80-4fcb-ad28-41b5f7cc08a2",
  },
  {
    title: "Javascript Intermediate",
    image: js,
    link: "https://www.hackerrank.com/certificates/c652ce3cd79f",
  },
  {
    title: "DevOps Udemy",
    image: devops,
    link: "https://www.udemy.com/certificate/UC-ee8129e0-a21c-4aca-9d0d-f313c1cc798b/",
  },
  {
    title: "Problem Solving Intermediate",
    image: prob,
    link: "https://www.hackerrank.com/certificates/987990dd3d13",
  },
  {
    title: "International Conference Publication",
    image: icmri,
  },
  {
    title: "JP Morgan Chase & Co",
    image: jp,
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/Wb4yEmHvZrC2qxiyX_JPMorgan%20Chase%20&%20Co._rEEutu6f2XYKyE3dx_1718373245788_completion_certificate.pdf",
  },
  {
    title: "SQL Intermediate",
    image: sql,
    link: "https://www.hackerrank.com/certificates/a52a53182eab",
  },
  {
    title: "Frontend Developer(React)",
    image: react,
    link: "https://www.hackerrank.com/certificates/9711c0ed64d8",
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
