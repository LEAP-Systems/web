import React, { Component } from "react";
import { Container } from "react-bootstrap";

class TeamContent extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="max-width">
        <section id="team">
          <h3 class="header">Our Team</h3>
          <div id="Christian">
            <img
              src="images/christian.JPG"
              alt="Failed to load: christian.jpg"
              width="80%"
            />
            <h2>Christian Sargusingh, CSE</h2>
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
            <h2>Aaron Huang, EE</h2>
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
            <h2>Steven Zhou, CSE</h2>
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
            <h2>Brandon Zhu, EE</h2>
            <p>Newly acquired member working in development.</p>
          </div>
        </section>
      </Container>
    );
  }
}

export default TeamContent;
