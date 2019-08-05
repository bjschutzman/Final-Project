import React from "react";
import "./Jumbotron.css";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Jumbo = () => (
  <div>
    <Jumbotron fluid className="backImage">
      <Container>
        <h1>Cocktail Wizard</h1>
        <p>
          Search for your desired cocktail and see what it takes to make it.
          Then, create a shopping cart of the items your need to make your
          favorite drink.{" "}
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
