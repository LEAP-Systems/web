import React, { Component } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import welcomeImage from "../images/leap_proj2.jpg";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

class ParallaxWelcomeImage extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="max-width">
        <ParallaxProvider>
          <Parallax y={[0, 0]} tagOuter="figure">
            <Image className="para-img" src={welcomeImage} />
          </Parallax>
        </ParallaxProvider>
      </Container>
    );
  }
}

export default ParallaxWelcomeImage;
