import React, { Component } from "react";
import { Container } from "react-bootstrap";

class AboutContent extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="max-width">
        <section id="about">
          <h3 class="header">About</h3>
          <p>
            Light Emitting Access Point (LEAP) technology aims to revolutionize
            transmission security by fusing LiFi and P2MP communication by
            requiring subscribed receivers to be precisely positioned relative
            to an LED cube to interpret transmission data. LEAP technology
            includes network protocols, addressing, and real-time embedded
            hardware which will work concurrently to provide secure, fixed,
            multiple-access downlink with the potential to greatly increase
            traditional LiFi bandwidth capabilities. In the future, LEAP
            technology will be a platform for secure LiFi broadband integration
            which will make it one of the most advanced communication methods in
            modern networking.
          </p>
          <p>
            For the scope of this project, the goal is to simulate LEAP
            technology for applications in secure building-to-building or indoor
            government/business networking operations. By the end of the project
            term the project aims to demonstrate that the system/network
            architecture can be applied to broadband systems graded to operate
            close to maximum theoretical bit rates.
          </p>
        </section>
      </Container>
    );
  }
}

export default AboutContent;
