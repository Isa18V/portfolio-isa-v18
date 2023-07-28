import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="project-links">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={project.netlifyLink} target="_blank" rel="noopener noreferrer">
          Netlify
        </a>
      </div>
    </div>
  );
}
