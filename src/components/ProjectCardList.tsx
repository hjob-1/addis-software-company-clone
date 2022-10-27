import React from "react";
import ProjectCard from "./ProjectCard";
import { projectCards } from "../utlities/interfaces";

function ProjectCardList({ projectCard }: projectCards) {
  return (
    <div className='cards-wrapper'>
      {projectCard.map((project) => (
        <ProjectCard Projectcard={project} />
      ))}
    </div>
  );
}

export default ProjectCardList;
