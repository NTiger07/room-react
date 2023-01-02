import React from "react";
import "./Buttons.css";
import leftArrow from "../assets/icon-angle-left.svg";
import rightArrow from "../assets/icon-angle-right.svg";

export default function Buttons(props) {
  return (
    <>
      <button onClick={props.previous}>
        <img src={leftArrow} alt="left" />
      </button>
      <button onClick={props.next}>
        <img src={rightArrow} alt="right" />
      </button>
    </>
  );
}
