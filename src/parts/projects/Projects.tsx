import React from "react";
import Button from "../../components/Button";
import ProjectCardList from "../../components/ProjectCardList";
import projectsfile from "../../utlities/projectfile";
import "./project.scss";

type Props = {};

function Projects({}: Props) {
  return (
    <article className='baselayout project-container '>
      <div className='base-title project-title'>
        <h1>
          PR<span className='o-color'>O</span>JECTS
        </h1>
      </div>
      <section>
        <div className='left'>
          <div className='base-description project-description'>
            <p>
              We help our clients to build state of the art software products
              and empower the tech sector with innovative solutions and
              approaches. The services we give are in parallel with the best
              practices set by the global community, including tech giants. We
              make sure our team is up-to date with the technologies used, and
              therefore delivering the best possible solution to the problem on
              hand.
            </p>
          </div>
          <div className='project-cards'>
            <ProjectCardList projectCard={projectsfile.slice(0, 2)} />
          </div>
        </div>
        <div className='right'>
          <div className='bar-one'>
            <div className='round' />
            <div className='circle' />
            <div className='round' />
          </div>
          <div className='bar-two'>
            <div className='circle medium'></div>
            <div className='circle small'></div>
          </div>
        </div>
      </section>
      <div className='project-btn'>
        <Button value='Explore More' className='pro_btn' />
      </div>
    </article>
  );
}

export default Projects;
