import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import cSimg from "../images/christian.JPG";
import aHimg from "../images/aaron.JPG";
import sCimg from "../images/steve.JPG";
import bZimg from "../images/bz.png";
import { genConnectedDots } from "./connect-dots-bg.js";
import { Fade } from "react-slideshow-image";

class TeamContent extends Component {
  componentDidMount() {
    genConnectedDots("UInetwork4");
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        <canvas id="UInetwork4" className="canvas-pos"></canvas>
        <Container
          fluid
          className="text-container-width text-container-colour roundcorners team-pos"
        >
          <section id="team">
            <h2 class="header">Our Team</h2>
            <div className="slide-container slide-pic-pos">
              <Fade>
                <div className="each-fade">
                  <Card style={{ width: "18rem" }} className="card-bg">
                    <Card.Img variant="top" src={cSimg}></Card.Img>
                    <Card.Title className="card-header">
                      Christian Sargusingh, CSE
                    </Card.Title>
                    <Card.Text className="card-text">
                      I am the lead software developer as well as the team
                      leader for the LEAP project. I designed and implemented
                      the majority the LEAP and IRIS softwares.{" "}
                    </Card.Text>
                  </Card>
                </div>
                <div className="each-fade">
                  <Card style={{ width: "18rem" }} className="card-bg">
                    <Card.Img variant="top" src={aHimg}></Card.Img>
                    <Card.Title className="card-header">
                      Aaron Huang, EE
                    </Card.Title>
                    <Card.Text className="card-text">
                      I am the lead hardware designer. I was responsible for
                      designing the physical cube. I designed the cube
                      specifically to be used for the LEAP software.{" "}
                    </Card.Text>
                  </Card>
                </div>
                <div className="each-fade">
                  <Card style={{ width: "18rem" }} className="card-bg">
                    <Card.Img variant="top" src={sCimg}></Card.Img>
                    <Card.Title className="card-header">
                      Steven Zhou, CSE
                    </Card.Title>
                    <Card.Text className="card-text">
                      I am the secondary developer and the front end designer
                      for the LEAP project. I helped implement and test the
                      software.{" "}
                    </Card.Text>
                  </Card>
                </div>
                <div className="each-fade">
                  <Card style={{ width: "18rem" }} className="card-bg">
                    <Card.Img variant="top" src={bZimg}></Card.Img>
                    <Card.Title className="card-header">
                      Brandon Zhu, EE
                    </Card.Title>
                    <Card.Text className="card-text">
                      Newly acquired developer working on computer visions.{" "}
                    </Card.Text>
                  </Card>
                </div>
              </Fade>
            </div>
          </section>
        </Container>
      </div>
    );
  }
}

export default TeamContent;
