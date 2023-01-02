import React from "react";
import logo from "../assets/logo.svg";
import ham from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import "./HeroImage.css";

export default function HeroImage(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  function toggle() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return (
    <>
      <div className="navbar_container">
        <img src={isOpen ? close : ham} onClick={toggle} alt="ham" />
        <div className="logo_container">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="navlinks_container">
          <ul className="nav-list">
            <li className="nav-links">
              <a href="#">home</a>
            </li>
            <li className="nav-links">
              <a href="#">shop</a>
            </li>
            <li className="nav-links">
              <a href="#">about</a>
            </li>
            <li className="nav-links">
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
        {isOpen && (
          <div id="mobileNav">
            <div class="mobile_nav-content">
              <ul class="nav-list-mobile">
                <li class="nav-links-mobile">
                  <a href="#">home</a>
                </li>
                <li class="nav-links-mobile">
                  <a href="#">shop</a>
                </li>
                <li class="nav-links-mobile">
                  <a href="#">about</a>
                </li>
                <li class="nav-links-mobile">
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <img className="hero-image" src={props.imgSrc} alt="img" />
    </>
  );
}
