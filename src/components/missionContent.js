import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { genConnectedDots } from "./dots.js";

class MissionContent extends Component {
  componentDidMount() {
    genConnectedDots("UInetwork2");
  }

  render() {
    return (
      <div id="mission" className="d-flex justify-content-center">
        <canvas id="UInetwork2" className="canvas-pos"></canvas>
        <Container
          fluid
          className="text-container-width text-container-colour roundcorners mission-pos"
        >
          <section id="mission">
            <h3 className="header">Mission</h3>
            <br></br>
            <br></br>
            <p>
              The Light Emitting Access Point (LEAP) Project is a proof-of-concept for a short-range, downlink, light communication system.
              Modern network infrastructure relies on encryption to keep data secure to compensate for fundamentally insecure transmission methods.
              However, encryption algorithms increase the computational load to networking systems and will grow in complexity as our systems evolve. 
            </p>
            <p>  
              We believe conventional encryption is not a universal solution for network security. The LEAP Project attempts to challenge modern encryption 
              by leveraging 3D space to encode and decode data improving transmission security.
            </p>
          </section>
        </Container>
      </div>
    );
  }
}

export default MissionContent;
