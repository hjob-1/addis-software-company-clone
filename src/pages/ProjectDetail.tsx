import React from "react";
import { useParams } from "react-router-dom";
import "./projectdetail.scss";
import { useState, useEffect } from "react";
import { projectCard } from "../utlities/interfaces";
import projectfile from "../utlities/projectfile";

type Props = {};

const ProjectDetail = (props: Props) => {
  const { id } = useParams();
  const [project, setProject] = useState<projectCard>();

  useEffect(() => {
    const fetchdata = () => {
      const project = projectfile.find((item) => item.id === id);
      setProject(project);
    };
    fetchdata();
  }, []);

  return (
    <main>
      <div className='wrapper'>
        <div className='image'>
          <img src={project?.image} alt='' />
        </div>
        <div className='content-wrapper'>
          <h2>Project Detail</h2>
          <ul>
            {project?.techstack.map((s) => (
              <li key={s}>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='content-description'>
          <p>{project?.description}</p>
          <h4>Tech Stack</h4>
          <ul>
            {project?.language.map((lan) => (
              <li key={lan.name}>
                <img src={lan.icon} alt={lan.name} />
                <span>{lan.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
