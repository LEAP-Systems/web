import React, { Component } from "react";
import { Container, ButtonGroup } from "react-bootstrap";
import { genConnectedDots } from "./connect-dots-bg.js";

class MissionContent extends Component {
  componentDidMount() {
    genConnectedDots("UInetwork1");
  }

  render() {
    return (
      <div id="mission" className="d-flex justify-content-center">
        <canvas id="UInetwork1" className="canvas-pos"></canvas>
        <Container
          fluid
          className="text-container-width text-container-colour roundcorners mission-pos"
        >
          <section id="mission">
            <h3 class="header">Mission</h3>
            <p>
              The Light Emitting Access Point (LEAP) Project is a proof-of-concept for a one-way, 
              encryption independent, wireless communication system. Modern network infrastructure
              such as fibre optic, fixed/mobile wireless, and satellite relies on encryption to keep
              data secure due to the nature of their transmission mediums. 
            </p>
            <p>
              Encryption algorithms are becoming increasingly complex adding computational overhead
              to networking systems. Therefore, encryption is not a sustainable solution for 
              long-term network security.
            </p>
          </section>
        </Container>
      </div>
    );
  }
}

export default MissionContent;
