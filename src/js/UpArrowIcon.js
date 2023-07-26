import React from "react";
import "../css/UpArrowIcon.css";
import upArrow from "../img/upArrow.png";

export default function UpArrowIcon() {
  return (
    <div className="upArrowIconContainer">
      <div className="Icon">
        <a href="#home">
          <img id="iconUpArrowIcon" src={upArrow} alt="Logo" />
        </a>
      </div>
    </div>
  );
}
