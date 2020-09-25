import React from "react";
import photo from "../../assets/images/mabel.png";
import "./CardPic.styles.scss";

function CardPic() {
  return (
    <div className="photo-id">
      <img src={photo} alt="mabel" />
    </div>
  );
}

export default CardPic;
