import React, { Component } from "react";
// import axios from 'axios'
import API from '../../utils/API'
import SearchItem from '../../components/SearchItem/SearchItem'
import Navs from "../../components/Navbar/Navbar";
import Jumbo from "../../components/JumbotronTwo/Jumbotron"
import StoreIngredients from "../../components/StoreIngredients/StoreIngredients";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./SearchStore.css";
import "bootstrap/dist/css/bootstrap.min.css";


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



  render() {
    // console.log(this.state.drinks);
    return (
      <div className= {'SearchStore'}>
          <Navs />
          <Jumbo />  
          <Container>
            <Row>
              <Col>
                <StoreIngredients/>
              </Col>
              <Col>
                <SearchItem/>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}
export default Store;
