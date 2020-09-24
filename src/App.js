import React from "react";
import photo from "./mabel.png";
import "./App.scss";

function App() {
  return (
    <div>
      <div className="top">
        <p className="title">not a fake card</p>
      </div>
      <div className="topcard">
        <p className="title">International identification</p>
      </div>
      <div className="card">
        <img src={photo} alt="mabel" />
        <div className="information">
          <p className="caption">Given name:</p>
          <p className="data title">Mabel</p>
          <p className="caption">Surname:</p>
          <p className="data title">Pines</p>
          <p className="caption">Number ID:</p>
          <p className="data title">1234567</p>
          <p className="caption">Nacionality:</p>
          <p className="data title">United States</p>
          <p className="caption">Date of Birth:</p>
          <p className="data title">23 / 32 / 1708</p>
          <p className="caption">Residence:</p>
          <p className="data title">Gravity Falls</p>
        </div>
      </div>
    </div>
  );
}

export default App;
