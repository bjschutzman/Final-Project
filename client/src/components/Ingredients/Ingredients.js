import React from "react";
import "./Ingredients.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Ingredients = () => (
  <div>
    <Card>
      <Card.Header as="h5">Ingredients</Card.Header>
      <Card.Body>
        <Card.Title>Cocktail Ingredients</Card.Title>
        <Card.Text>
          These are used to make your cocktail.
        </Card.Text>
        <Button variant="primary">Make Shopping List</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Ingredients;
