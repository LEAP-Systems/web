import React, { Component } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import welcomeImage from "../images/leap_opti2.gif";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

class ParallaxWelcomeImage extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Container fluid className="max-width">
          <Image className="para-img" src={welcomeImage} />
        </Container>
      </div>
    );
  }
}

export default ParallaxWelcomeImage;
