import React from "react";
import Musiclist from "./Musiclist";
import Footer from "./Footer";
import Banner from "./Banner";

function Maincontainer(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <div className="maincontainer">
        <Banner />
        <div className="view">
          <ul className="view-list">
            <li>
              <a href="https://spotify.com">All Songs</a>
            </li>
            <li>
              <a href="https://spotify.com">Albums</a>
            </li>
            <li>
              <a href="https://spotify.com">Artists</a>
            </li>
            <li>
              <a href="https://spotify.com">Favourite</a>
            </li>
          </ul>
          <hr></hr>
        </div>
        <div className="musiclist">
          <p className="para">
            Sort by <span>Recently added</span>
          </p>
        </div>
        <Musiclist />
        <hr></hr>
        <Musiclist />
        <hr></hr>
        <Musiclist />
        <hr></hr>
        <Musiclist />
        <hr></hr>
        <Musiclist />
        <hr></hr>
        <Musiclist />
        <hr></hr>
        <Footer />
      </div>
    </main>
  );
}

export default Maincontainer;
