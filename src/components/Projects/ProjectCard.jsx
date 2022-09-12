import React from "react";
import "./ProjectCard.css";
import myProjects from "./myProjects";

const ProjectCard = () => {
  const projects = myProjects.map((project) => {
    return (
      <div className="card">
        <h3 className="title">{project.projectName}</h3>
        <div className="languages">
          <p>Linguagens usadas:</p>
          <p>{project.usedLanguages}</p>
        </div>
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
        </div>
        <div className="links-projects">
          <button className="project-button">
        <a href={project.link} target="_blank" rel="noopener noreferrer">Link do Site</a>
          </button>
          <button className="project-button">
        <a href={project.gitHub} target="_blank" rel="noopener noreferrer">Repositorio do projeto</a>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="project-card">
      {myProjects.length === 0 ? (
        <h1 className="no-project">Nenhum projeto disponivel no momento</h1>
      ) : (
        <div className="container">{projects}</div>
      )}
    </div>
  );
};

export default ProjectCard;
