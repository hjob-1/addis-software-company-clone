import React from "react";
import Button from "../components/Button";
import career from "../assets/career.png";
import "./career.scss";
type Props = {};

const Careers = (props: Props) => {
  return (
    <div className='career-container'>
      <article>
        <div className='career-header'>
          <h1>A CAREER THAT AMPLIFIES YOUR TALENT </h1>
        </div>
        <div className='career-description'>
          <em>
            At Addis Software, we pride ourselves on our team feeling. We
            believe that by working together, we can achieve more than we ever
            could alone. That's why we offer competitive salaries and 20 days of
            paid leave per year. But it's not just about the money. We also have
            a flat organization, which means that everyone has a voice and an
            equal say in decision-making. This helps to create a more
            collaborative environment where everyone can contribute their best
            ideas. So if you're looking for a software company that values
            teamwork and creativity, look no further than Addis Software. We'll
            be happy to welcome you to our team
          </em>
          <p>NO JOB AVAILABLE</p>
        </div>

        <div className='contactus-btn'>
          <Button value='Contact Us' />
        </div>
      </article>

      <div className='career-image'>
        <img src={career} alt='illustrater' />
      </div>
    </div>
  );
};

export default Careers;
