import React, { Component } from "react";

import Search from '../src/Pages/SearchRec/SearchRec'

import "bootstrap/dist/css/bootstrap.min.css";

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
