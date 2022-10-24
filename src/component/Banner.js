import React from "react";
import music from "../image/music.png";
import Youtube from "../image/Youtube.webp";

function Banner() {
  return (
    <div className="banner">
      <main className="title">
        <h4>New Album</h4>
        <h2>Palmwine Music 3</h2>
        <p className="show1">Show Dem Camp</p>
        <p className="show">
          Show Dem Camp ring out their performance with a focus on love and
          romance.
        </p>
      </main>
      <div className="parent">
        <img src={music} alt="" className="music-img" />
        <img src={Youtube} alt="" className="youtube" />
      </div>
    </div>
  );
}

export default Banner;
