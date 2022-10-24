import React from "react";
import artist from "../image/artist.jpg";
import { CiHeart } from "react-icons/ci";

function Musiclist() {
  return (
    < >
      <div className="music-menu-list">
        <div className="img-artist">
          <img src={artist} alt="" className="artist2" />
          <span classNme="artistname">Richie</span>
        </div>
        <p className="music-tag">Mr. Money with the vibe</p>
        <span className="year">2022</span>
        <p className="duration"> 2.30</p>
        <p className="music-type">Afro</p>
        <CiHeart />
      </div>
    </>
  );
}

export default Musiclist;
