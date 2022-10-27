import React from "react";
import ProjectCardList from "../components/ProjectCardList";
import projectfile from "../utlities/projectfile";
import "../parts/projects/project.scss";
type Props = {};

const Portfolios = (props: Props) => {
  return (
    <main>
      <div className='portfolio-header'>
        <h1>SOME OF OUR WORKS</h1>
        <em>
          We are a group of young experts that are eager to provide excellent
          products to European businesses. We have expertise in a variety of
          fields, including edtech, e-commerce, affiliate marketing, and
          SEO-driven development. We have constructed a number of projects using
          cutting-edge technology. Our team consists of 25 engineers that
          collaborate to build high-quality products.
        </em>
      </div>
      <section className='project-container portfolio-container'>
        <div className='portfolio-cards'>
          <ProjectCardList projectCard={projectfile} />
        </div>
      </section>
    </main>
  );
};

export default Portfolios;
