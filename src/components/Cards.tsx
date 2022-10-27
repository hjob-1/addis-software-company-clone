import React from "react";
import { Cardsinfo } from "../utlities/interfaces";
import Card from "./Card";

function Cards({ cardsinfo }: Cardsinfo) {
  return (
    <div className='cards-wrapper'>
      {cardsinfo.map((card) => (
        <Card cardinfo={card} />
      ))}
    </div>
  );
}

export default Cards;
