import React from "react";
import img1 from "../../assets/image1.jpg";
import img2 from "../../assets/image2.jpg";
import img3 from "../../assets/image3.jpg";
import img4 from "../../assets/image4.jpg";
import img5 from "../../assets/image5.jpg";
import Button from "../../components/Button";
import TeamImages from "../../components/TeamImages";
import "./teams.scss";
type Props = {};

function Teams({}: Props) {
  return (
    <section className='team-container'>
      <div className='desktop-view'>
        <div className='team-images'>
          <div className='first-img'>
            <TeamImages image={img1} />
          </div>
          <div className='row-2-col3'>
            <TeamImages image={[img2, img3, img4]} />
          </div>
          <div className='second-img'>
            <TeamImages image={img5} />
          </div>
        </div>
        <div className='team-contents'>
          <h2>
            MEET T<span>H</span>E TEAM
          </h2>
          <em>
            Addis Software PLC is a Software and information technology company
            in Addis Ababa, Ethiopia serving clients nationwide and worldwide.
            We are extremely committed to delivering quality advice, sales and
            support to assist our clients to achieve the maximum from their
            investment.
          </em>
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
          <div className='btns'>
            <span>Dedicated Team</span>
            <span>Bright Minds</span>
            <span>Creative Team</span>
            <span>Open Communication</span>
          </div>
        </div>
      </div>

      <div className='team-btn'>
        <Button value='Join Us' />
      </div>
    </section>
  );
}

export default Teams;
