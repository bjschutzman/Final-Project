import React, { Component } from "react";
import Navs from "../../components/Navbar/Navbar";
import Jumbo from "../../components/Jumbotron/Jumbotron";
import Cards from "../../components/Cards/Cards"
import "bootstrap/dist/css/bootstrap.min.css";


class Search extends Component {
  render() {
    return (
      <div>
        <Navs />
        <Jumbo />
        <Cards />
      </div>
    );
  }
}
export default Search;