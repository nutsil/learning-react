import React from "react";
import "./Card.styles.scss";
import CardPic from "../CarPic/CardPic.component";

function Card() {
  return (
    <div className="card">
      <div className="topcard">
        <p className="highlight-text">International identification</p>
      </div>
      <CardPic />
      <div className="information">
        <p className="caption">Given name:</p>
        <p className="data highlight-text">Mabel</p>
        <p className="caption">Surname:</p>
        <p className="data highlight-text">Pines</p>
        <p className="caption">Number ID:</p>
        <p className="data highlight-text">1234567</p>
        <p className="caption">Nacionality:</p>
        <p className="data highlight-text">United States</p>
        <p className="caption">Date of Birth:</p>
        <p className="data highlight-text">23 / 32 / 1708</p>
        <p className="caption">Residence:</p>
        <p className="data highlight-text">Gravity Falls</p>
      </div>
    </div>
  );
}

export default Card;
