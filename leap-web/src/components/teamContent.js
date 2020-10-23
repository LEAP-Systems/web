import React, { Component } from "react";
import { Container, Card} from "react-bootstrap";
import cSimg from "../images/christian.JPG";
import aHimg from "../images/aaron.JPG";
import sCimg from "../images/steve.JPG";
import bZimg from "../images/bz.png";
import { genConnectedDots } from "./connect-dots-bg.js";
import Carousel from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class TeamContent extends Component {
  componentDidMount() {
    genConnectedDots("UInetwork4");
  }

  render() {
    return (
      <div id="team" className="d-flex justify-content-center">
        <canvas id="UInetwork4" className="canvas-pos"></canvas>
        <Container
          fluid
          className="text-container-width text-container-colour roundcorners team-pos"
        >
          <section id="team">
            <h2 class="header">Contributors to LEAP</h2>
            <Carousel responsive={responsive}>
              <div>
                <Card style={{ width: "18rem" }} className="card-bg">
                  <Card.Img variant="top" src={cSimg}></Card.Img>
                  <Card.Title className="card-header">
                    Christian Sargusingh, CSE
                  </Card.Title>
                  <Card.Text className="card-text">
                    I am the lead software developer as well as the team leader
                    for the LEAP project. I designed and implemented the
                    majority the LEAP and IRIS softwares.{" "}
                  </Card.Text>
                </Card>
              </div>
              <div>
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
              <div>
                <Card style={{ width: "18rem" }} className="card-bg">
                  <Card.Img variant="top" src={sCimg}></Card.Img>
                  <Card.Title className="card-header">
                    Steven Zhou, CSE
                  </Card.Title>
                  <Card.Text className="card-text">
                    I am the secondary developer and the front end designer for
                    the LEAP project. I helped implement and test the software.{" "}
                  </Card.Text>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }} className="card-bg">
                  <Card.Img variant="top" src={bZimg}></Card.Img>
                  <Card.Title className="card-header">
                    Brandon Zhu, EE
                  </Card.Title>
                  <Card.Text className="card-text">
                    A developer working on computer visions.{" "}
                  </Card.Text>
                </Card>
              </div>
            </Carousel>
          </section>
        </Container>
      </div>
    );
  }
}

export default TeamContent;
