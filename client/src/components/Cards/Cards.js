import React from "react";
import "./Cards.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Cards = () => (
  <div>
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header as="h5">Cocktail Recipes</Card.Header>
            <Card.Body>
              <Card.Title>These drinks match your results</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">See Ingredients</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header as="h5">Ingredients</Card.Header>
            <Card.Body>
              <Card.Title>These ingredients are needed to make the drink.</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Buy Ingredients</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Cards;
