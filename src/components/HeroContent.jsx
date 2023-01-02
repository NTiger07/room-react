import React from "react";
import "./HeroContent.css";
import arrow from "../assets/icon-arrow.svg";

export default function HeroContent(props) {
  return (
    <div className="hero_content-container">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <a href="#">
        <span>
          SHOP NOW <img src={arrow} alt="arrow" />
        </span>
      </a>
    </div>
  );
}
