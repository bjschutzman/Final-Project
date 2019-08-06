import React from "react";
import "./Recipes.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Recipes = (props) => (
  <div>
    <Card>
      <Card.Header as="h5">Recipes</Card.Header>
      <Card.Body>
        <Card.Title>These results match your search.</Card.Title>
        <Card.Text>
          <div>
            <ul>
              {props.drinks.map(drink => (
                <li key={drink.idDrink}>{drink.strDrink}</li>
              ))} 
            </ul>
          </div>
        </Card.Text>
        <Button variant="primary">See Ingredients</Button>
      </Card.Body>
    </Card>
  </div>
);

export default Recipes;
