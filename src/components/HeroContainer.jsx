import React from "react";
import HeroContent from "./HeroContent.jsx";
import HeroImage from "./HeroImage.jsx";
import Buttons from "./Buttons.jsx";
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

  const [isOpen, setIsOpen] = React.useState(false);
  function toggle() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div className="hero_section">
      <div className="hero_section-image">
        <div className="hero_buttons">
          <Buttons next={next} previous={previous} />
        </div>
        <HeroImage
          toggle={toggle}
          isOpen={isOpen}
          imgSrc={data[index].img_src}
        />
      </div>
      <div className="hero_section-content">
        <HeroContent
          key={data[index].id}
          title={data[index].title}
          text={data[index].text}
        />
        <div className="content_buttons">
          <Buttons next={next} previous={previous} />
        </div>
      </div>
    </div>
  );
}
