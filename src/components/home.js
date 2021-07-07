import React, { Component } from "react";
// import tesseract from "../images/LEAP_BANNER_INV_NT.png";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import anime from "animejs/lib/anime.es.js";
import logo from "../images/LEAP_BANNER_INV.png";

class Home extends Component {
  componentDidMount() {
    genConnectedDots("UInetwork5");
    anime({
      targets: ".title-main",
      duration: 4000,
      opacity: 1,
      easing: "cubicBezier(.5, .05, .1, .3)",
    });
    anime({
      targets: ".logo-main",
      duration: 3000,
      opacity: 1,
      easing: "cubicBezier(.5, .05, .1, .3)",
    });
  }
  render() {
    return (
      <div id="home" className="d-flex justify-content-center">
        <canvas id="UInetwork5" className="canvas-pos"></canvas>
        <Container fluid className="max-width main-pg-container">
          {/*<canvas id="UInetwork" className="canvas-pos"></canvas>*/}
          <Image className="logo-main" src={logo} />
          {/* <div className="bg-black">
            <Image className="para-img" src={tesseract} />
          </div> */}
          <div className="title-pos">
            <h1 className="title-w-size title-main">LEAP Systems Online</h1>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
