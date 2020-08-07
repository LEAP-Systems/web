import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import cSimg from "../images/christian.JPG";
import aHimg from "../images/aaron.JPG";
import sCimg from "../images/steve.JPG";
import bZimg from "../images/bz.png";

class TeamContent extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="text-container-width text-container-colour">
        <section id="team">
          <h2 class="header">Our Team</h2>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }} className="card-bg">
                <Card.Img variant="top" src={cSimg}></Card.Img>
                <Card.Title className="card-header">
                  Christian Sargusingh, CSE
                </Card.Title>
                <Card.Text className="card-text">
                  I am the lead software developer as well as the team leader
                  for the LEAP project. I designed and implemented the majority
                  the LEAP and IRIS softwares.{" "}
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card-bg">
                <Card.Img variant="top" src={aHimg}></Card.Img>
                <Card.Title className="card-header">Aaron Huang, EE</Card.Title>
                <Card.Text className="card-text">
                  I am the lead hardware designer. I was responsible for
                  designing the physical cube. I designed the cube specifically
                  to be used for the LEAP software.{" "}
                </Card.Text>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="card-bg">
                <Card.Img variant="top" src={sCimg}></Card.Img>
                <Card.Title className="card-header">
                  Steven Zhou, CSE
                </Card.Title>
                <Card.Text className="card-text">
                  I am the secondary developer and the front end designer for
                  the LEAP project. I helped implement and test the software, as
                  well as created this website.{" "}
                </Card.Text>
              </Card>
            </Col>
          </Row>
          <Row></Row>
          <Col>
            <Card style={{ width: "18rem" }} className="card-bg">
              <Card.Img variant="top" src={bZimg}></Card.Img>
              <Card.Title className="card-header">Brandon Zhu, EE</Card.Title>
              <Card.Text className="card-text">
                Newly acquired member working in development.{" "}
              </Card.Text>
            </Card>
          </Col>
        </section>
      </Container>
    );
  }
}

export default TeamContent;
