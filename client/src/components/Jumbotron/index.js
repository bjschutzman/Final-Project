import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Jumbo = () => (
  <div>
    <Jumbotron fluid>
      <Container>
        <h1>Final Project</h1>
        <p>
          Words Words Words Words Words Words Words Words Words Words Words
          Words Words Words Words Words Words Words Words Words{" "}
        </p>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipe Search"
            aria-label="Recipe Search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Container>
    </Jumbotron>
  </div>
);

export default Jumbo;
