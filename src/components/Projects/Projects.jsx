import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css"

const Projects = () => {

  return (
    <section id="projects">
        <h1 className="h1-title">Projetos</h1>
        <ProjectCard />
        <a
        className="repositories-button"
          href={'https://github.com/jvictorcabral?tab=repositories'}
          target="_blank"
          rel="noopener noreferrer"
        >Repositórios no GitHub</a>
      </section>
  )
}

export default Projects;