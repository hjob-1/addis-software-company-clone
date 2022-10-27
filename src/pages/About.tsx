import React from "react";
import imgabout from "../assets/about.png";
import Button from "../components/Button";
import "./about.scss";
import { Link } from "react-router-dom";
type Props = {};

function About({}: Props) {
  return (
    <div className='about-container'>
      <article>
        <div className='about-header'>
          <h1>GET TO KNOW US </h1>
        </div>
        <div className='about-company'>
          <p>
            Addis Software PLC is a Software and information technology company
            in Addis Ababa, Ethiopia serving clients nationwide and worldwide.
            We are extremely committed to delivering quality advice, sales and
            support to assist our clients to achieve the maximum from their
            investment.
          </p>
          <p>
            Addis Software PLC was started because we want to contribute our own
            share by providing opportunities to talented developers and work on
            projects that actually can bring a significant change in Ethiopia’s
            IT sector, digitalizing government services or private sector
            services and many more. We want to create an environment where
            everyone learns from each other and grow together by creating an
            open and transparent culture in our office.
          </p>
          <p>
            Started as a group of passionate software developers, and now we are
            booming with our mission to create a “digital well-being” that the
            public can enjoy, in a sense that talented programmers and tech
            enthusiasts have the ability to show their powers and talents by
            working on big scaled and challenging projects, while also learning
            to grow together.
          </p>
          <p>
            That’s why we are now forging the best communication between our
            offered services and clients while sharpening the essence of what
            the developer community can ultimately accomplish.
          </p>
          <p>
            The services range from providing IT Services, software solutions,
            websites and application solutions, consultancy, and digital
            marketing.
          </p>
          <p>
            We pride ourselves on having the elite staff in Ethiopia who have
            been providing their services and expertise for enterprise and
            startup companies for a long period of time. We want to be your
            digital partner so you can gain business success, market
            fearfulness, and undependability.
          </p>
        </div>

        <div className='contactus-btn'>
          <Link to='/contact-us'>
            <Button value='Contact Us' />
          </Link>
        </div>
      </article>

      <div className='about-image'>
        <img src={imgabout} alt='illustrater' />
      </div>
    </div>
  );
}

export default About;
