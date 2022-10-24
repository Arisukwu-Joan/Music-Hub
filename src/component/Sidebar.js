import React from "react";
import logo from "../image/logo.png";
import Searchbar from "./Searchbar";
import Sidebarlist from "./Sidebarlist";
import { BiLogOut } from "react-icons/bi";
import artist from "../image/artist.jpg";

function Sidebar(props) {
  return (
    <>
      <aside className={props.darkMode ? "dark" : ""}>
        <div className="sidebar">
          <img src={logo} alt="" className="logo" />
          <Searchbar />
          <Sidebarlist />
          <div className="toggle">
            <p className="darkmodetext">Dark mode</p>
            <div className="toggle-slider" onClick={props.toggleDarkMode}>
              <div className="toggle-circle"></div>
            </div>
          </div>
          <div className="artist-info">
            <img src={artist} alt="" className="artist" />
            <main>
              <h4>Divine Samuel</h4>
              <div className="login">
                <BiLogOut />
                <p className="logout">Log out</p>
              </div>
            </main>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
