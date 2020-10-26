import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { genConnectedDots } from "./connect-dots-bg.js";

class AboutContent extends Component {
  componentDidMount() {
    genConnectedDots("UInetwork3");
  }
  render() {
    return (
      <div id="about" className="d-flex justify-content-center">
        <canvas id="UInetwork3" className="canvas-pos"></canvas>
        <Container
          fluid
          className="text-container-width text-container-colour roundcorners about-pos"
        >
          <section id="about">
            <h3 className="header">About</h3>
            <br></br>
            <br></br>
            <p>
              LEAP provides a platform for a new wave of secure transmission technologies that 
              operate securely independent of encryption algorithms. LEAP uses a rigorous design 
              philosophy with a custom data transfer protocol framework emphasizing data security. 
              The LEAP transmitter uses light to transmit data to a single or multiple cameras or 
              photo receiving devices over short-ranges within line-of-sight. It exploits two and 
              three-dimensional matrices enabling simultaneous communication to multiple users by 
              computing the relative position of each receiving device. 
            </p>
            <p>
              This is accomplished using a specialized encoding and decoding algorithm by applying 
              concepts in Euclidean space and infinite mathematics. Finally, added cell multiplicity
              results in a proportional increase in the theoretical bandwidth capabilities, 
              distinguishing it from conventional single-cell light communication technologies.
            </p>
          </section>
        </Container>
      </div>
    );
  }
}

export default AboutContent;
