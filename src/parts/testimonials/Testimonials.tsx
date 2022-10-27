import React from "react";
import TestCard from "../../components/TestCard";
import "./test.scss";
type Props = {};

function Testimonials({}: Props) {
  return (
    <div className='testimonial-container'>
      <h1>
        TESTIM
        <span className='o-color'>O</span>NIALS
      </h1>
      <TestCard />
      <div className='about-addissoftware'>
        <h1>SOFTWARE DEVELOPMENT IN ETHIOPIA</h1>
        <p>
          Addis Software PLC is a Software and information technology company in
          Addis Ababa, Ethiopia serving clients nationwide and worldwide. We are
          extremely committed to delivering quality advice, sales and support to
          assist our clients to achieve the maximum from their investment.
        </p>
        <p>
          Addis Software PLC was started because we want to contribute our own
          share by providing opportunities to talented developers and work on
          projects that actually can bring a significant change in Ethiopia’s IT
          sector, digitalizing government services or private sector services
          and many more. We want to create an environment where everyone learns
          from each other and grow together by creating an open and transparent
          culture in our office.
        </p>
      </div>
    </div>
  );
}

export default Testimonials;
