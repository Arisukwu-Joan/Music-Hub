import React from "react";
import search from "../image/search.png";

function Searchbar() {
  return (
    <div className="search-bar">
      <img src={search} alt="" className="search-img" />
      <input type="text" placeholder="Search" className="search-holder" />
    </div>
  );
}

export default Searchbar;
