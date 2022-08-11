import React, { Component } from "react";
import sour from "./img/sour.jpg";
import black from "./img/black.jpg";

import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const Data1 = ["hello ", "hello ", "hello ", "hello "];
  const Data2 = ["content2 ", "content2 ", "content2 ", "content2 "];
  return (
    <React.Fragment>
      {/* top section start */}
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

      {/* mid section start */}
      <div>
        <span className="watermark">Bakery</span>
        {/* recommended content section */}
        <div className="midContent">
          <div id="midItems1">
            <div>
              <span className="sour">Sourdough</span>
              <br />
              <br />
              <span className="sourContents">
                Sourdough bread contains higher levels of vitamins, minerals,
                and antioxidants than other breads.
              </span>
              <div className="button">Shop Now</div>
            </div>

            <img src={sour} alt="SourDough" className="sourDough" />
          </div>

          <div id="midItems2">
            <div>
              <span className="sour">Black Forest</span>
              <br /> <br />
              <span className="sourContents">
                The traditional version consists of multiple layers of chocolate
                sponge cake with whipped cream and cherries, covered on each
                side with whipped cream and chocolate chips.
              </span>
              <div className="button">Shop Now</div>
            </div>

            <img src={black} alt="SourDough" className="sourDough" />
          </div>
        </div>

        {/* video section start */}
        <div className="recipes">
          <div id="recipeOverlay">
            <div>
              <div>
                <span id="recipeHead">Recipes</span>
                <br />
                <br />
                <span id="recipeMid">
                  See the Video Making Process of our recipes.
                  <br /> Be the Pateron and get the special access to the
                  special recipes as well.
                </span>
              </div>

              <div id="seeRecipe">
                See Our Recipe <span style={{ fontSize: 20 }}> &nbsp; →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connect section */}
        <div className="social">
          <span className="watermarkConnect">Social</span>
          <div className="connect">
            <span id="connectUs">Connect</span>
            <div style={{ fontSize: 15 }}>Our_Bakery</div>
          </div>

          <div id="gallery">
            {Data1.map((data) => {
              return <div>{data}</div>;
            })}
          </div>

          <div id="gallery">
            {Data2.map((data) => {
              return <div>{data}</div>;
            })}
          </div>
        </div>

        {/* footer section */}
        <div id="footer"></div>
      </div>
    </React.Fragment>
  );
}

export default Home;
