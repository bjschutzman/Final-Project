import React, { Component } from "react";
// import Navs from "./components/Navbar/Navbar";
// import Jumbo from "./components/Jumbotron/Jumbotron";
// import Cards from "./components/Cards/Cards";
// import "bootstrap/dist/css/bootstrap.min.css";
import Search from '../src/Pages/SearchRec/SearchRec'

import "./App.css";

class App extends Component {
  render() {
    return(
      <div>
        <Search/>
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
