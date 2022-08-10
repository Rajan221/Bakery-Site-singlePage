import React, { Component } from "react";

import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div className="topSection">
        <div className="homeOverlay">
          <div className="special">
            <span className="tortilla">Tortilla</span>

            <div style={{ fontStyle: "italic", marginLeft: 30 }}>
              A Special Bread from our Bakery.
              <br />
              -Traditionally cooked on a comal - a smooth flat griddle in Mexico
            </div>
          </div>
        </div>
      </div>
      <div>Bakery</div>
    </React.Fragment>
  );
}

export default Home;
