import React from "react";
import { Link } from "react-router-dom";
import "./SearchItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchStoreIngredients = drink => {
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
      <Card.Header as="h5">Store</Card.Header>
      <Card.Body>
        <Card.Title>Seach Store</Card.Title>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Store Search"
            aria-label="Store Search"
            aria-describedby="basic-addon2"
            onChange={props.handleChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={props.handleClick}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Card.Text>
          Instructions:{" "}
          {props.selectedDrink && props.selectedDrink.strInstructions}
          <p />
          Ingredients:{" "}
          {props.selectedDrink &&
            SearchStoreIngredients(props.selectedDrink).map(ingredient => (
              <div>
                <ul>{ingredient}</ul>
              </div>
            ))}
        </Card.Text>
        <Link to={props.selectedDrink ? "/shopping/" : null}>
          <Button variant="primary">Add to Cart </Button>
        </Link>
      </Card.Body>
    </Card>
  </div>
);
// {props.drinks.map(drink => (
//   <li className = 'drinkChoice'
//   key={drink.idDrink}
//   onClick={()=> {props.handleClick(drink);}}
//   >{drink.strDrink}</li>
// ))}

export default Ingredients;
