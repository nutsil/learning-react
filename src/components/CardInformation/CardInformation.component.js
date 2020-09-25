import React from "react";
import "./CardInformation.styles.scss";

function CardInformation() {
  return (
    <div className="information">
      <p className="caption">Given name:</p>
      <p className="data">Mabel</p>
      <p className="caption">Surname:</p>
      <p className="data">Pines</p>
      <p className="caption">Number ID:</p>
      <p className="data">1234567</p>
      <p className="caption">Nacionality:</p>
      <p className="data">United States</p>
      <p className="caption">Date of Birth:</p>
      <p className="data">23 / 32 / 1708</p>
      <p className="caption">Residence:</p>
      <p className="data">Gravity Falls</p>
    </div>
  );
}

export default CardInformation;
