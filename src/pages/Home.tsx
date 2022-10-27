import React from "react";
import Footer from "../parts/footer/Footer";
import Hero from "../parts/hero/Hero";
import Projects from "../parts/projects/Projects";
import Service from "../parts/services/Service";
import Teams from "../parts/teams/Teams";
import Testimonials from "../parts/testimonials/Testimonials";
import Values from "../parts/values/Values";
import "../utlities/basecss.scss";

type Props = {};

function Home({}: Props) {
  return (
    <div className='home-container'>
      <Hero />
      <Service />
      <Projects />
      <Values />
      <Teams />
      <Testimonials />
    </div>
  );
}

export default Home;
