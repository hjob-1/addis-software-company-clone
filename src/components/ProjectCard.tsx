import React from "react";
import { Projectcard } from "../utlities/interfaces";
import { Link } from "react-router-dom";
function ProjectCard({ Projectcard }: Projectcard) {
  return (
    <div className='card project-card'>
      <div className='card-image'>
        <img src={Projectcard.image} alt='images' />
      </div>
      <div className='card-title'>
        <h3>{Projectcard.title}</h3>{" "}
        <a href={Projectcard.sitelink}>Visit Site </a>
      </div>
      <div className='card-description'>
        <p>{Projectcard.description}</p>
      </div>
      <div className='card-bottom'>
        <Link to={`/portfolios/${Projectcard.id}`}>Read More</Link>
        <div className='card-bottom-right'>
          {Projectcard.techstack.slice(0, 2).map((tech) => (
            <span>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
