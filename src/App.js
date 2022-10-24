import { useState } from "react";
import "./App.css";
import Maincontainer from "./component/Maincontainer";
import Sidebar from "./component/Sidebar";

function App() {
  const [darkMode, setDarkMode] = useState();
  const [musicData, setMusicData] = useState();

  function toggleDarkMode() {
    setDarkMode((prevDark) => !prevDark);
  }

  fetch("'https://spotify81.p.rapidapi.com/top_200_tracks'");
  .then(response => response(JSON()))
  .then (data. setDarkMode(data))

  return (
    <div className="App">
      <div className="container">
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Maincontainer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
