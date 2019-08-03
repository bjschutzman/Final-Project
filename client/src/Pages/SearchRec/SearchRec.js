import React, { Component } from "react";
import Navs from "../../components/Navbar/Navbar";
import Jumbo from "../../components/Jumbotron/Jumbotron";
import Recipes from "../../components/Recipes/Recipes";
import Ingredients from "../../components/Ingredients/Ingredients"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";


class Search extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}
export default Search;