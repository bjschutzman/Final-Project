import React, { Component } from "react";
// import axios from 'axios'
import API from '../../utils/API'
import Navs from "../../components/Navbar/Navbar";
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
    userInput: ''
  };


//   componentDidMount () {
//     axios.get( "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" )
//         .then( response => {
          
//           const drinks = response.data.slice(0, 4);
//             const newDrinkList = drinks.map(drink => {
//                 return {
//                     ...drink,
//                 }
//                 console.log(Array.isArray(drink))
                
//             });
//             for (var i = 0; i < 5; i++) {
//               console.log(response.data.drinks[i]);
//             this.setState({drinks: newDrinkList});
//             // console.log( response );
//             }
//         } )
        
// }

handleFormSubmit = event => {
  // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  event.preventDefault();
  API.getDrinks(this.state.userInput)
    .then(res => this.setState({ drinks: res.data.drinks }))
    .catch(err => console.log(err));
    
};

handleChange = event => {
  console.log('CHANGING TEXT');
  const value = event.target.value;
  this.setState({
    userInput: value
  });
};
  

  render() {
    console.log(this.state.drinks);
    return (
      <div className= {'Search'}>
          <Navs />
          <Jumbo  
          handleClick={this.handleFormSubmit}
          handleChange={this.handleChange}/>
          <Container>
            <Row>
              <Col>
                <Recipes drinks={this.state.drinks} />
              </Col>
              <Col>
                <Ingredients />
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}
export default Search;
