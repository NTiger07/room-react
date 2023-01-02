import React from "react";
import "./About.css";
import blackChair from "../assets/image-about-dark.jpg";
import whiteChair from "../assets/image-about-light.jpg";

export default function About() {
  return (
    <div className="about_section">
      <div className="about_section-img">
        <img src={blackChair} alt="chair" />
      </div>
      <div className="about_section-content">
        <h2>ABOUT OUR FUNITURE</h2>
        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className="about_section-img">
        <img src={whiteChair} alt="chair" />
      </div>
    </div>
  );
}
