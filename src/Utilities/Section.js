import React from "react";

const Section = ({ title, description, images, hueA, hueB, githubLink }) => {
  return (
    <div
      className="section"
      style={{ backgroundColor: `hsl(${hueA}, 50%, 90%)` }}
    >
      <div className="section-content">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
        <div className="image-gallery">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${title} image ${index}`} />
          ))}
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Section;
