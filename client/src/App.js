import React, { Component } from "react";
import Navs from "./components/Navbar";
import Jumbo from "./components/Jumbotron";
import Cards from "./components/Cards";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends Component {
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
export default App;
