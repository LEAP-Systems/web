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
import logo from "../images/LEAP_BANNER_INV.png";

class TopBar extends Component {
  state = {};
  render() {
    return (
      <Navbar className="nav-colour-bg" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className="nav-colour-text" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-colour-text" href="#link">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopBar;
