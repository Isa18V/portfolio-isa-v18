import React from "react";
import "../css/HomePage.css";
import isa from "../img/isa.jpg";

export default function HomePage() {
  return (
    <div className="HomePage" id="home">
      {/* start row */}
      <div className="row">
        <div className="col-md-6 homeContent ">
          <div className="isaImageContainer">
            <img className="isaImage" src={isa} alt="imgisa" />
          </div>
        </div>
      </div>

      {/* end row */}
    </div>
  );
}
