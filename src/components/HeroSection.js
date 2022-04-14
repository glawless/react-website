import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Adventure Awaits</h1>
      <p>Explore The World</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Let's Go
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Videos <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
