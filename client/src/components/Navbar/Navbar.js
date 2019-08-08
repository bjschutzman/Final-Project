import React, { Component } from "react";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const whiteText = {
  color: "white"
};

class Navs extends Component {
  render() {
    return (
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="#home" style={whiteText}>
          Cocktail Wizard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={whiteText}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={whiteText}>
              Store/Saved
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navs;
