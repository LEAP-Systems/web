import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { genConnectedDots } from "./connect-dots-bg.js";

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
              The Light Emitting Access Point (LEAP) Project is proof-of-concept for a downlink, light communication system. 
            </p>
            <p>
              Modern network infrastructure relies on encryption to keep data secure due to compensate for the insecurity of their transmission architectures.
              Encryption algorithms are inherently inefficient and complex, increasing computational load to networking systems. 
            </p>
            <p>  
              We believe conventional encryption is not a universal solution for network security. LEAP attempts to challenge modern encryption by leveraging 
              3D space to encode and decode data for enhanced transmission security. 
            </p>
          </section>
        </Container>
      </div>
    );
  }
}

export default MissionContent;
