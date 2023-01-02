import React from "react";
import HeroContainer from "./HeroContainer.jsx";
import About from "./About.jsx";
import "../App.css";

export default function App() {
  return (
    <div className="main_container">
      <HeroContainer />
      <About />
    </div>
  );
}
