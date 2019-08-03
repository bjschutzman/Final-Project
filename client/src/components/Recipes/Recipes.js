import React from "react";
import "./Recipes.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Recipes = () => (
  <div>
    <Card>
      <Card.Header as="h5">Recipes</Card.Header>
      <Card.Body>
        <Card.Title>These results match your search.</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">See Ingredients</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Recipes;
