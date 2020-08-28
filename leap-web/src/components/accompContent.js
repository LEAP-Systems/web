import React, { Component } from "react";
import { Container, Media } from "react-bootstrap";
import { genConnectedDots } from "./connect-dots-bg.js";
import CULogo from "../images/CULogo.png";

class AccompContent extends Component {
  componentDidMount() {
    genConnectedDots("UInetwork2");
  }

  render() {
    return (
      <div id="accomplishments" className="d-flex justify-content-center">
        <canvas id="UInetwork2" className="canvas-pos"></canvas>
        <Container
          fluid
          className="text-container-width text-container-colour roundcorners accomp-pos"
        >
          <section id="acc">
            <h3 class="header">Accomplishments</h3>
            <p>
            The Cowie Innovation Award is given on the recommendation of the Dean of the Faculty of 
            Engineering and Design, to one student or one team of students in the final year of a 
            Bachelor of Engineering degree for demonstrating top quality innovation in Engineering. 
            It was established in 2006 by Alexandra Cowie in memory of her late husband, Wilbur 
            Elliott Cowie, BASc, MASc (Toronto), PEng.
            </p>
            <p>
            Carleton University SCE Department Video Competition, First Place April 2020<br></br>
            Issuer: Systems and Computer Engineering Department, Carleton University
            <br></br>
            Promotional video for the Light Emitting Access Point (LEAP) Project 
            https://www.youtube.com/watch?v=aiTprGXODSQ. Awarded $1000 and eventual feature on the 
            SCE departments' recruitment web-page.
            </p>
          </section>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src={CULogo}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>W.E Cowie Innovation Award</h5>
              <p>
                Systems Capstone Project Won the W.E Cowie Innovation Award 2020
              </p>
            </Media.Body>
          </Media>
        </Container>
      </div>
    );
  }
}

export default AccompContent;
