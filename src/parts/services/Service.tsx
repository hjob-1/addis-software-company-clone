import React from "react";
import Button from "../../components/Button";
import Cards from "../../components/Cards";
import cardsinfo from "../../utlities/servicefile";
import "./service.scss";
type Props = {};

export default function Service({}: Props) {
  return (
    <article className='baselayout service-container commonlayout'>
      <div className='base-title service-title'>
        <h1>
          <span className='o-color'>O</span>UR SERVICES
        </h1>
      </div>
      <div className='base-description service-description'>
        <p>
          We help our clients to build state of the art software products and
          empower the tech sector with innovative solutions and approaches. The
          services we give are in parallel with the best practices set by the
          global community, including tech giants. We make sure our team is
          up-to date with the technologies used, and therefore delivering the
          best possible solution to the problem on hand.
        </p>
      </div>
      <div className='service-cards'>
        <Cards cardsinfo={cardsinfo} />
      </div>
      <div className='service-btn'>
        <Button value='Join Us' />
      </div>
    </article>
  );
}
