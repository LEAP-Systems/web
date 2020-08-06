import React, { Component } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import welcomeImage from "../images/leap_proj2.jpg";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

class ParallaxWelcomeImage extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <ParallaxProvider>
          <Parallax z={[-20, 20]} tagOuter="figure">
            <Image src={welcomeImage} fluid />
          </Parallax>
        </ParallaxProvider>
      </Container>
    );
  }
}

export default ParallaxWelcomeImage;
