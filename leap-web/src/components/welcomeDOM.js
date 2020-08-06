import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import welcomeImage from "../images/leap_proj2.jpg";

class WelcomeDOM extends Component {
  state = {};
  render() {
    return (
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <image src={welcomeImage} />
      </Parallax>
    );
  }
}

export default WelcomeDOM;
