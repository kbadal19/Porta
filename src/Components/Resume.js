import React from "react";

export default function Resume() {
  return (
    <div className="container mx-auto p-4 sm:p-6 w-full sm:w-3/5 bg-gray-100 dark:bg-zinc-900">
      <Header />
      <div className="p-4 sm:p-6 space-y-4 text-left">
        <Section title="Work Experience">
          <Experience
            company="Super Mentor Technologies"
            period="12/2023 – 06/2024"
            position="SDE Intern"
            achievements={[
              "Created a fully responsive, secure user interface using React.js along with server-side rendering using Spring framework.",
              "Deployed and maintained various web applications using GitLab and FluxCD.",
              "Converted backend from monolithic to microservices, improving scalability and reducing downtime by 40%.",
              "Re-engineered the PostgreSQL database schema, optimizing data storage and improving overall system efficiency.",
            ]}
          />
        </Section>

        <Section title="Education">
          <Education
            institution="JSS Academy of Technical Education, Bengaluru"
            degree="Bachelor of Engineering (B.E.) in Computer Science"
            period="12/2020 – 06/2024"
            gpa="8.4 CGPA"
            coursework="Programming Fundamentals, Operating System, Data Structures and Applications, Design and Analysis of Algorithms, Object Oriented Concepts, Discrete Mathematics, Computer Networks, Automata Theory, System Software and Compiler Design, Computer Organization, Machine Learning Concepts, Web Technology and Applications, Big Data Analytics, Internet of Things"
          />
        </Section>

        <Section title="Academic Projects">
          <Project
            title="Code Automation Bot"
            period="10/2024 - Present"
            details={[
              "Developing an intelligent bot that generates code in multiple programming languages based on user prompts, creating language-specific file structures.",
              "Integrated components and libraries as specified by users, enabling seamless setup for projects using various front-end and back-end frameworks like React, Django, and Node.js.",
              "Implemented support for a wide range of frameworks and technologies, reducing development setup time by over 70%.",
            ]}
          />
          <Project
            title="Emowell – Depression Detection Chatbot using Machine Learning"
            period="10/2023 – 05/2024"
            details={[
              "Crafted a visually appealing user interface with Tailwind CSS, improving accessibility and user experience metrics, which led to a 35% increase in user retention over a three-month period.",
              "Engineered a secure Django backend with PostgreSQL, featuring Knox authentication for seamless login/signup, reducing login time by 50%.",
              "Enhanced user well-being with advanced mental health assessments like PHQ-9 and BDI-2, bolstered by ensemble learning using voting classifier algorithm, resulting in an accuracy of 94.6%.",
            ]}
          />
          <Project
            title="Influencer Dashboard"
            period="07/2023 - 09/2023"
            details={[
              "Built a unified social media dashboard with React.js, Spring Boot, and MongoDB, providing a 360-degree view of statistics collected via various social media platforms like YouTube and Instagram.",
              "Implemented real-time data retrieval via web sockets and graphical data visualization using chart.js.",
              "Secured data with JWT authentication, server-side rendering, and SHA-256 encryption.",
            ]}
          />
        </Section>

        <Section title="Skills">
          <Skills
            languages="Java, JavaScript (with jQuery), Python, Typescript, C, HTML"
            frameworks="React.js, Next.js, Vue.js, Django, Flask, Node.js, Tailwind CSS, Spring Boot, Angular"
            databases="MySQL, PostgreSQL, MongoDB"
            others="Git, Linux/Unix, Redis, RESTful APIs, Nginx, CI/CD pipelines, Docker, GitLab, Flux"
            softSkills="Leadership, Communication, Teamwork"
          />
        </Section>

        <Section title="Certifications">
          <Certifications
            certifications={[
              "Google Cloud: Associate Cloud Engineer",
              "edX: Operating System Fundamentals",
              "IBM: SPSS V3 Modeler",
              "Udemy: DevOps Beginner to Advanced",
              "Hackerrank: React.js Developer",
            ]}
          />
        </Section>

        <Section title="Achievements">
          <Achievements
            achievements={[
              "Lead a team of 4 to publish a research paper about 'Machine Learning Algorithms used to predict mental health' in International Conference on Multidisciplinary Research and Innovation (ICMRI 2024).",
              "Stood among top 3 teams out of 25 participating teams from 7 colleges in Inter-college hackathon.",
              "Qualified level 2 of Flipkart Grid 5.5 in collaboration with 2 other team members.",
              "Raised 12 issues in Hacktoberfest 2023 and contributed 4 times.",
            ]}
          />
        </Section>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="text-left py-6 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold">Badal Kumar</h1>
      <p className="text-lg sm:text-xl">
        Bengaluru, IND | +91 9122027847 |{" "}
        <a href="mailto:k.badal19@gmail.com" className="underline">
          k.badal19@gmail.com
        </a>
      </p>
      <p className="text-lg sm:text-xl">
        <a
          href="https://www.linkedin.com/in/badal-kumar-3b1173277/"
          className="underline"
        >
          LinkedIn
        </a>{" "}
        |{" "}
        <a href="https://github.com/kbadal19" className="underline">
          GitHub
        </a>{" "}
        |{" "}
        <a href="https://porta-taupe.vercel.app/" className="underline">
          Portfolio Website
        </a>
      </p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <div className="bg-gray-400 inline-block w-full px-2 mb-2">
        <h2 className="text-lg font-semibold text-left">{title}</h2>
      </div>
      <div className="text-sm">{children}</div>
    </section>
  );
}

function Experience({ company, period, position, achievements }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between">
        <strong>{company}</strong>
        <span className="text-left sm:text-right">({period})</span>
      </div>
      <em>{position}</em>
      <ul className="list-disc list-inside text-left">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}

function Education({ institution, degree, period, gpa, coursework }) {
  return (
    <div className="text-left">
      <div className="flex flex-col sm:flex-row justify-between">
        <div>
          <strong>{institution}</strong>
          <br />
          <em>{degree}</em>
        </div>
        <em className="text-left sm:text-right">({period})</em>
      </div>
      <em>{gpa}</em>
      <p>
        <strong>Relevant Coursework:</strong> {coursework}
      </p>
    </div>
  );
}

function Project({ title, period, details }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between">
        <strong>{title}</strong>
        <span className="text-left sm:text-right">({period})</span>
      </div>
      <ul className="list-disc list-inside text-left mb-4">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}

function Skills({ languages, frameworks, databases, others, softSkills }) {
  return (
    <div className="text-left">
      <p>
        <strong>Languages:</strong> {languages}
      </p>
      <p>
        <strong>Frameworks:</strong> {frameworks}
      </p>
      <p>
        <strong>Databases:</strong> {databases}
      </p>
      <p>
        <strong>Others:</strong> {others}
      </p>
      <p>
        <strong>Soft Skills:</strong> {softSkills}
      </p>
    </div>
  );
}

function Certifications({ certifications }) {
  return (
    <ul className="list-disc list-inside text-left">
      {certifications.map((certification, index) => (
        <li key={index}>{certification}</li>
      ))}
    </ul>
  );
}

function Achievements({ achievements }) {
  return (
    <ul className="list-disc list-inside text-left">
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
  );
}
