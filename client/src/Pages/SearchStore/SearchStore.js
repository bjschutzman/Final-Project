import React, { Component } from "react";
// import axios from 'axios'
<<<<<<< HEAD
import API from '../../utils/API'
import SearchItem from '../../components/SearchItem/SearchItem'
=======
import API from "../../utils/API";
>>>>>>> dcf8dee7dd0ab2e6e3f786861cf61f8c525e19cb
import Navs from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Jumbo from "../../components/JumbotronTwo/Jumbotron";
import Recipes from "../../components/Recipes/Recipes";
import Ingredients from "../../components/Ingredients/Ingredients";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./SearchStore.css";
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< HEAD

class Store extends Component {
  state = {
    recipe: {}
  };

  // componentDidMount() {
  //   API.getDrinks(this.props.paramas.idDrink)
  //   .then(res => this.setState({recipe: res.data}))
  //   .catch(err => console.log(err));
  //   console.log("COMPDID: "  )
  // }

=======
class Search extends Component {
  state = {
    drinks: [],
    userInput: "",
    selectedDrink: null
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
>>>>>>> dcf8dee7dd0ab2e6e3f786861cf61f8c525e19cb

  // will take the drink clicked by the user and set the state to that drink
  userDrinkClicked = event => {
    event.preventDefault();
    const valueTwo = event.target.value;
    console.log(event);
    this.setState({
      drinkClicked: valueTwo
    });
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
              <Ingredients selectedDrink={this.state.selectedDrink} />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Store;
