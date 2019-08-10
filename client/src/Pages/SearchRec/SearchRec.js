import React from "react";
// import axios from 'axios'
// import API from "../../utils/API";
import Navs from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Jumbo from "../../components/Jumbotron/Jumbotron";
import Recipes from "../../components/Recipes/Recipes";
import Ingredients from "../../components/Ingredients/Ingredients";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./SearchRec.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = props => {
  // state = {
  //   drinks: [],
  //   userInput: "",
  //   selectedDrink: null,
  //   recipeName: "",
  //   recipeInstructions: "",
  //   recipeIngredients: ""
  // };

  // handleFormSubmit = event => {
  //   // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  //   event.preventDefault();
  //   API.getDrinks(this.state.userInput)
  //     .then(res => this.setState({ drinks: res.data.drinks }))
  //     .catch(err => console.log(err));
  // };

  // // will take the drink that was clicked and
  // handleDrinkClick = drink => {
  //   console.log("DRINK:", drink);
  //   this.setState({ selectedDrink: drink });
  // };

  // // will take the drink clicked by the user and set the state to that drink
  // userDrinkClicked = event => {
  //   event.preventDefault();
  //   const valueTwo = event.target.value;
  //   console.log(event);
  //   this.setState({
  //     drinkClicked: valueTwo
  //   });
  // };

<<<<<<< HEAD
  // save = event => {
  //   console.log(this.state.selectedDrink);
  //   event.preventDefault();
  //   API.saveDrink({
  //     recipeName: this.state.selectedDrink.strDrink,
  //     recipeInstructions: this.state.selectedDrink.strInstructions,
  //     recipeIngredients: this.state.selectedDrink.strIngredient1
  //   }).catch(err => console.log(err));
  // };
=======
  save = event => {
    console.log(this.state.selectedDrink);
    event.preventDefault();
    const ingredientList = [];
    if (this.state.selectedDrink.strIngredient1 !== "") {
      ingredientList.push(this.state.selectedDrink.strIngredient1);
    }
    if (this.state.selectedDrink.strIngredient2 !== "") {
      ingredientList.push(this.state.selectedDrink.strIngredient2);
    }
    if (this.state.selectedDrink.strIngredient3 !== "") {
      ingredientList.push(this.state.selectedDrink.strIngredient3);
    }
    if (this.state.selectedDrink.strIngredient4 !== "") {
      ingredientList.push(this.state.selectedDrink.strIngredient4);
    }
    console.log(ingredientList);
    API.saveDrink({
      recipeName: this.state.selectedDrink.strDrink,
      recipeInstructions: this.state.selectedDrink.strInstructions,
      recipeIngredients: ingredientList
    }).catch(err => console.log(err));
  };
>>>>>>> dcf8dee7dd0ab2e6e3f786861cf61f8c525e19cb

  // handleChange = event => {
  //   const value = event.target.value;
  //   this.setState({
  //     userInput: value
  //   });
  // };

  
    return(
      <div className={"Search"}>
        <Navs />
        <Jumbo
          handleClick={props.handleFormSubmit}
          handleChange={props.handleChange}
        />
        <Container>
          <Row>
            <Col>
              <Recipes
                drinks={props.drinks}
                key={props.idDrink}
                handleClick={props.handleDrinkClick}
              />
            </Col>
            <Col>
              <Ingredients
                save={props.save}
                selectedDrink={props.selectedDrink}
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }

export default Search;
