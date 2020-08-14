import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";

class TopBar extends Component {
  state = {};
  render() {
    return (
      <Navbar fixed="top" className="nav-colour-bg" expand="lg" variant="dark">
        <Navbar.Toggle
          className="nav-toggle-colour"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="nav-colour-text" href="#home">
              HOME
            </Nav.Link>
            <Nav.Link className="nav-colour-text" href="#mission">
              MISSION
            </Nav.Link>
            <Nav.Link className="nav-colour-text" href="#accomplishments">
              ACCOMPLISHMENTS
            </Nav.Link>
            <Nav.Link className="nav-colour-text" href="#about">
              ABOUT US
            </Nav.Link>
            <Nav.Link className="nav-colour-text" href="#team">
              OUR TEAM
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopBar;
