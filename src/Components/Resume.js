import React from "react";

export default function Resume() {
  return (
    <div className="container mx-auto p-6 w-3/5 bg-gray-100 dark:bg-zinc-900">
      <Header />
      <div className="p-6 space-y-4 text-left">
        <Section title="Work Experience">
          <Experience
            company="Super Mentor Technologies"
            period="03/2024 – present"
            position="SDE Intern"
            achievements={[
              "Enhanced algorithm efficiency by 80% through the implementation of advanced techniques.",
              "Developed fully responsive User Interface design with React.js for a more intuitive experience.",
              "Optimized APIs, resulting in exponential reduction in load time of up to 2000ms.",
            ]}
          />
        </Section>

        <Section title="Education">
          <Education
            institution="JSS Academy of Technical Education, Bengaluru"
            degree="Bachelor of Engineering (B.E.) in Computer Science"
            period="Dec 2020 – Present"
            gpa="8.25 CGPA"
            coursework="Programming Fundamentals, Operating System, Data Structures and Applications, Design and Analysis of Algorithms, Object Oriented Concepts, Discrete Mathematics, Computer Networks, Automata Theory, System Software and Compiler Design, Computer Organization, Machine Learning Concepts, Web Technology and Applications, Big Data Analytics, Internet of Things"
          />
        </Section>

        <Section title="Academic Projects">
          <Project
            title="Emowell – Depression Detection Chatbot using Machine Learning"
            period="10/2023 - present"
            details={[
              "Seamlessly melded React.js, Next.js, and Tailwind CSS to forge an immersive chatbot website.",
              "Engineered a secure Django backend with PostgreSQL, featuring Knox authentication for seamless login/signup, reducing login time by 50%.",
              "Enhanced user well-being with advanced mental health assessments like PHQ-9 and BDI-2, bolstered by LSTM algorithms, resulting in a 25% increase in users taking steps towards managing their mental health.",
            ]}
          />
          <Project
            title="Weather Forecast application"
            period="07/2023 - 08/2023"
            details={[
              "Designed an interactive web application using React.js to provide real-time weather information using Fetch API that can store up to 10 cards simultaneously and display information of up to 5 days in advance.",
              "This project demonstrates proficiency in React.js, API integration, and user interface design, showcasing the ability to create practical solutions.",
            ]}
          />
          <Project
            title="Hospital Management System"
            period="12/2022 - 02/2023"
            details={[
              "Successfully partnered with a team member to create a user-friendly hospital management website using Flask, HTML, and CSS.",
              "Effectively managed a MySQL database housing extensive data for 20 doctors and over 450 patients, implementing various complex queries to facilitate seamless information retrieval.",
            ]}
          />
        </Section>

        <Section title="Skills">
          <Skills
            languages="Java, JavaScript (with jQuery), Python, C, HTML"
            frameworks="React.js, Next.js, Django, Flask, Node.js, Tailwind CSS, SCSS"
            databases="SQL, PostgreSQL, MongoDB"
            others="Git, Linux/Unix"
            softSkills="Leadership, Communication, Team work"
          />
        </Section>

        <Section title="Certifications">
          <Certifications
            certifications={[
              "Associate Cloud Engineer - Google Cloud",
              "Operating System Fundamentals - edX",
              "SQL (Intermediate) - Hackerrank",
              "DevOps Beginners to Advanced – Udemy",
            ]}
          />
        </Section>

        <Section title="Achievements">
          <Achievements
            achievements={[
              "Lead a team of 4 to publish a research paper about “Machine Learning Algorithms used to predict mental health” in International Conference on Multidisciplinary Research and Innovation (ICMRI 2024).",
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
    <div className="text-left py-10">
      <h1 className="text-3xl font-bold">Badal Kumar</h1>
      <p className="text-xl">
        Bengaluru, IND | +91 9122027847 |{" "}
        <a href="mailto:k.badal19@gmail.com" className="underline">
          k.badal19@gmail.com
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
      <div className="flex justify-between">
        <strong>{company}</strong>
        <span className="text-right">({period})</span>
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
      <div className="flex justify-between">
        <div>
          <strong>{institution}</strong>
          <br />
          <em>{degree}</em>
        </div>
        <em className="text-right">({period})</em>
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
        <div className="flex justify-between">
          <strong>{title}</strong>
          <span className="text-right">({period})</span>
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
