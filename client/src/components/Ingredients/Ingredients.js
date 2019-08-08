import React from "react";
import "./Ingredients.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const getIngredients = drink => {
  let drinkList = [];
  for (let [key, value] of Object.entries(drink)) {
    if (value && key.indexOf("strIngredient") > -1) {
      drinkList.push(value);
    }
  }
  return drinkList;
};

const Ingredients = props => (
  <div>
    <Card>
      <Card.Header as="h5">Ingredients</Card.Header>
      <Card.Body>
        <Card.Title>Cocktail Ingredients</Card.Title>
        <Card.Text>
          Instructions:{" "}
          {props.selectedDrink && props.selectedDrink.strInstructions}
          <p />
          Ingredients:{" "}
          {props.selectedDrink &&
            getIngredients(props.selectedDrink).map(ingredient => (
              <div>
                <ul>{ingredient}</ul>
              </div>
            ))}
        </Card.Text>
        <Button variant="primary" onClick={props.save}>
          Make Shopping List
        </Button>
      </Card.Body>
    </Card>
  </div>
);

export default Ingredients;
