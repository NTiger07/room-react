import React from "react";
import HeroContent from "./HeroContent.jsx";
import HeroImage from "./HeroImage.jsx";
import leftArrow from "../assets/icon-angle-left.svg";
import rightArrow from "../assets/icon-angle-right.svg";
import data from "./data.js";
import "./HeroContainer.css";

export default function HeroContainer() {
  const [index, setIndex] = React.useState(0);

  data.map((item) => {
    return <HeroContent key={item.id} title={item.title} text={item.text} />;
  });

  function next() {
    setIndex(index + 1);
    if (index === 2) {
      setIndex(0);
    }
  }

  function previous() {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(2);
    }
  }

  return (
    <div className="hero_section">
      <div className="hero_section-image">
        <HeroImage imgSrc={data[index].img_src} />
      </div>
      <div className="hero_section-content">
        <HeroContent
          key={data[index].id}
          title={data[index].title}
          text={data[index].text}
        />
        <div className="button_container">
          <button onClick={previous}>
            <img src={leftArrow} alt="left" />
          </button>
          <button onClick={next}>
            <img src={rightArrow} alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
