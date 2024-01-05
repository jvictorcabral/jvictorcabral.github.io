import React from "react";
import "./ProjectCard.css";
import myProjects from "./myProjects";

const ProjectCard = () => {
  const projects = myProjects.map((project) => {
    return (
      <a
        className="project-button"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        key={project.id}
      >
      <div className="card">
        <img className="img-card" src={project.img} alt="foto do projeto"/>
        { console.log({project}) }
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
        </div>
        <h3 className="title">{project.projectName}</h3>
        <div className="languages">
          <p>Linguagens usadas:</p>
          <p>{project.usedLanguages}</p>
        </div>
      </div>
      </a>
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
