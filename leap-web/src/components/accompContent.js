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
            <h3 className="header">Accomplishments</h3>
            <br></br>
            <br></br>
            <h2 className="header">
              Recipient of the Cowie Innovation Award 2020
            </h2>
            <p>
              The fourth year capstone project Light Emitting Access Point (LEAP) has won the 2020
              W.E. Cowie Innovation Award presented by Carleton University, which is valued at $27,000.
              The Cowie Innovation Award is given on the recommendation of the Dean of the Faculty
              of Engineering and Design, to one student or one team of students in the final year
              of a Bachelor of Engineering degree for demonstrating top quality
              innovation in Engineering. It was established in 2006 by Alexandra
              Cowie in memory of her late husband, Wilbur Elliott Cowie, BASc,
              MASc (Toronto), PEng.
            </p>
            <Media>
              <a href="https://carleton.ca/sce/2020/systems-capstone-project-won-the-w-e-cowie-innovation-award/">
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src={CULogo}
                  alt="Generic placeholder"
                />
              </a>
              <Media.Body>
                <h5>W.E Cowie Innovation Award</h5>
                <a href="https://carleton.ca/sce/2020/systems-capstone-project-won-the-w-e-cowie-innovation-award/">
                  <p>
                    Systems Capstone Project Won the W.E Cowie Innovation Award
                    2020
                  </p>
                </a>
              </Media.Body>
            </Media>
            <br></br>
            <br></br>
            <h2 className="header">
              Winner of Carleton University SCE Video Competition 2020
            </h2>
            <p>
              The LEAP Project team won the nomination for best promotional
              video by Carleton University's SCE Department. The team was
              awarded $1000 and featured on the SCE departments' recruitment
              web-page.
            </p>
          </section>
          <div className="iframe-container">
            <iframe
              title="leap"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aiTprGXODSQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </div>
    );
  }
}

export default AccompContent;
