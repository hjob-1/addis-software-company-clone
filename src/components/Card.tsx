import React from "react";
import { Cardinfo } from "../utlities/interfaces";

function Card({ cardinfo }: Cardinfo) {
  return (
    <div className='card'>
      <div className='card-image card'>{cardinfo.svg}</div>
      <div className='card-title'>
        <h3>{cardinfo.title}</h3>{" "}
      </div>
      <div className='card-description'>
        <p>{cardinfo.description}</p>
      </div>
    </div>
  );
}

export default Card;
