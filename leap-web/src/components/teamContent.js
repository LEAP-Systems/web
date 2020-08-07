import React, { Component } from "react";
import { Container } from "react-bootstrap";

class TeamContent extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="text-container-width">
        <section id="team">
          <h2 class="header">Our Team</h2>
          <div id="Christian">
            <img
              src="images/christian.JPG"
              alt="Failed to load: christian.jpg"
              width="80%"
            />
            <h3>Christian Sargusingh, CSE</h3>
            <p>
              I am the lead software developer as well as the team leader for
              the LEAP project. I designed and implemented the majority the LEAP
              and IRIS softwares.
            </p>
          </div>
          <div id="Aaron">
            <img
              src="images/aaron.JPG"
              alt="Failed to load: aaron.jpg"
              width="80%"
            />
            <h3>Aaron Huang, EE</h3>
            <p>
              I am the lead hardware designer. I was responsible for designing
              the physical cube. I designed the cube specifically to be used for
              the LEAP software.
            </p>
          </div>
          <div id="Steven">
            <img
              src="images/steve.JPG"
              alt="Failed to load: steve.jpg"
              width="79%"
            />
            <h3>Steven Zhou, CSE</h3>
            <p>
              I am the secondary developer and the front end designer for the
              LEAP project. I helped implement and test the software, as well as
              created this website.
            </p>
          </div>
          <div id="Steven">
            <img
              src="images/steve.JPG"
              alt="Failed to load: steve.jpg"
              width="79%"
            />
            <h3>Brandon Zhu, EE</h3>
            <p>Newly acquired member working in development.</p>
          </div>
        </section>
      </Container>
    );
  }
}

export default TeamContent;
