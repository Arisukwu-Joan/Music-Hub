import React from "react";
import { CiPause1, CiVolumeHigh, CiVolume } from "react-icons/ci";
import { IoIosShuffle } from "react-icons/io";
import { IoIosRepeat } from "react-icons/io";
import { TbPlayerSkipBack, TbPlayerSkipForward } from "react-icons/tb";
import track from "../image/track.png";

function Footer(props) {
  return (
    <section className={props.darkMode ? "dark" : ""}>
      <div className="main-footer">
        <div className="footer-artist-image">
          <img src={track} alt="" className="track" />
          <main>
            <h4>Divine</h4>
            <p>Rema</p>
          </main>
        </div>
        <div className="selected-music">
          <div className="select-icon">
            <IoIosShuffle className="track-icon" />
            <TbPlayerSkipBack className="track-icon" />
            <CiPause1 className="down-iconplay" />
            <TbPlayerSkipForward />
            <IoIosRepeat className="track-icon" />
          </div>
          <span className="music-duration">
            0:00 <input type="range" className="tracklist" /> 0:00
          </span>
        </div>
        <div>
          <CiVolume />
          <input type="range" className="tracklist" />
          <CiVolumeHigh />
        </div>
      </div>
    </section>
  );
}

export default Footer;
