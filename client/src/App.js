import React, { Component } from "react";
<<<<<<< HEAD
// import Navs from "./components/Navbar/Navbar";
// import Jumbo from "./components/Jumbotron/Jumbotron";
// import Cards from "./components/Cards/Cards";
// import "bootstrap/dist/css/bootstrap.min.css";
import Search from '../src/Pages/SearchRec/SearchRec'

=======
import Navs from "./components/Navbar";
import Jumbo from "./components/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
>>>>>>> 58ad519ca1fe7e6530c0d3bae86a91397493dec3
import "./App.css";
import Recipes from "./components/Recipes";
import Ingredients from "./components/Ingredients";

class App extends Component {
  render() {
    return(
      <div>
<<<<<<< HEAD
        <Search/>
=======
        <Navs />
        <Jumbo />
        <Container>
          <Row>
            <Col>
              <Recipes />
            </Col>
            <Col>
              <Ingredients />
            </Col>
          </Row>
        </Container>
>>>>>>> 58ad519ca1fe7e6530c0d3bae86a91397493dec3
      </div>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navs />
//         <Jumbo />
//         <Cards />
//       </div>
//     );
//   }
// }
export default App;
