import React, { Component } from "react";
import { Container, Card} from "react-bootstrap";
import cSimg from "../images/christian.png";
import aHimg from "../images/aaron.png";
import sCimg from "../images/steven.png";
import bZimg from "../images/brandon.png";
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
            <h3 className="header">Project Contributors</h3>
            <br></br>
            <br></br>
            <Carousel responsive={responsive}>
              <div>
                <Card style={{ width: "18rem" }} className="card-bg">
                  <Card.Img variant="top" src={cSimg}></Card.Img>
                  <Card.Title className="card-header">
                    Christian Sargusingh<br></br> B.Eng Computer Systems
                  </Card.Title>
                  <Card.Text className="card-text">
                    Lead systems engineer and team coordinator developing system hardware, firmware and embedded IoT components.{" "}
                  </Card.Text>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }} className="card-bg">
                  <Card.Img variant="top" src={sCimg}></Card.Img>
                  <Card.Title className="card-header">
                    Steven Zhou<br></br> B.Eng Computer Systems
                  </Card.Title>
                  <Card.Text className="card-text">
                    Systems, software and QA engineer responsible for and implementing and quality control of system components.{" "}
                  </Card.Text>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }} className="card-bg">
                  <Card.Img variant="top" src={bZimg}></Card.Img>
                  <Card.Title className="card-header">
                    Brandon Zhu<br></br> B.Eng Electrical
                  </Card.Title>
                  <Card.Text className="card-text">
                    Webfront and systems developer heading the Computer Vision project for efficient 3D spatial decoding.{" "}
                  </Card.Text>
                </Card>
              </div>
              <div>
                <Card style={{ width: "18rem" }} className="card-bg">
                  <Card.Img variant="top" src={aHimg}></Card.Img>
                  <Card.Title className="card-header">
                    Aaron Huang<br></br> B.Eng Electrical
                  </Card.Title>
                  <Card.Text className="card-text">
                    Hardware engineer and designer of the original 64-bit LEAP transmitter prototype.{" "}
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
