import React, { Component } from "react";
// import axios from 'axios'
import API from "../../utils/API";
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

class Search extends Component {
  state = {
    drinks: [],
    userInput: "",
    selectedDrink: null,
    recipeName: "",
    recipeInstructions: "",
    recipeIngredients: ""
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getDrinks(this.state.userInput)
      .then(res => this.setState({ drinks: res.data.drinks }))
      .catch(err => console.log(err));
  };

  // will take the drink that was clicked and
  handleDrinkClick = drink => {
    console.log("DRINK:", drink);
    this.setState({ selectedDrink: drink });
  };

  // will take the drink clicked by the user and set the state to that drink
  userDrinkClicked = event => {
    event.preventDefault();
    const valueTwo = event.target.value;
    console.log(event);
    this.setState({
      drinkClicked: valueTwo
    });
  };

  save = event => {
    console.log(this.state.selectedDrink);
    event.preventDefault();
    API.saveDrink({
      recipeName: this.state.selectedDrink.strDrink,
      recipeInstructions: this.state.selectedDrink.strInstructions,
      recipeIngredients: this.state.selectedDrink.strIngredient1
    }).catch(err => console.log(err));
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({
      userInput: value
    });
  };

  render() {
    console.log(this.state.drinks);
    return (
      <div className={"Search"}>
        <Navs />
        <Jumbo
          handleClick={this.handleFormSubmit}
          handleChange={this.handleChange}
        />
        <Container>
          <Row>
            <Col>
              <Recipes
                drinks={this.state.drinks}
                key={this.idDrink}
                handleClick={this.handleDrinkClick}
              />
            </Col>
            <Col>
              <Ingredients
                save={this.save}
                selectedDrink={this.state.selectedDrink}
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Search;
