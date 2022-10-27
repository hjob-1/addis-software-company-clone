import React from "react";
import Button from "../../components/Button";
import Cards from "../../components/Cards";
import values from "../../utlities/values";

type Props = {};

export default function Values({}: Props) {
  return (
    <article className='baselayout values-container commonlayout'>
      <div className='base-title values-title'>
        <h1>
          <span className='o-color'>O</span>UR VALUES
        </h1>
      </div>
      <div className='base-description values-description'>
        <p>
          At Addis Software, our workflow inhibits transparency in its core. We
          deeply value the relation we form with our clients and believe that
          clear communication, in every stage of the development process, is key
          for a successful partnership. Hence making sure that the output of our
          work is aligned with the desired solution.
        </p>
      </div>
      <div className='values-cards'>
        <Cards cardsinfo={values} />
      </div>
      <div className='value-btn'>
        <Button value='Join us' />
      </div>
    </article>
  );
}
