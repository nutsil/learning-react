import React from "react";
import photo from "./mabel.png";
import "./App.scss";

function App() {
  return (
    <div>
      <div className="top">
        <p className="highlight-text">not a fake card</p>
      </div>

      <div className="card">
        <div className="topcard">
          <p className="highlight-text">International identification</p>
        </div>
        <div className="photo-id">
          <img src={photo} alt="mabel" />
        </div>
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
    </div>
  );
}

export default App;
