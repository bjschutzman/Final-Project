import React from "react";
import "./Ingredients.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Ingredients = () => (
  <div>
    <Card>
      <Card.Header as="h5">Ingredients</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Ingredients;
