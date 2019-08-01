import React, { Component } from "react";
import Navs from "./components/Navbar";
import Jumbo from "./components/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./App.css";
import Recipes from "./components/Recipes";
import Ingredients from "./components/Ingredients";

class App extends Component {
  render() {
    return (
      <div>
        <Navs />
        <Jumbo />
        <Container>
          <Row>
            <Col>
              <Recipes />
            </Col>
            <Col>
              <Ingredients />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
