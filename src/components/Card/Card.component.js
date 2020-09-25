import React from "react";
import "./Card.styles.scss";
import CardPic from "../CarPic/CardPic.component";
import CardInformation from "../CardInformation/CardInformation.component";

function Card() {
  return (
    <div className="card">
      <div className="topcard">
        <p className="highlight-text">International identification</p>
      </div>
      <CardPic />
      <CardInformation />
    </div>
  );
}

export default Card;
