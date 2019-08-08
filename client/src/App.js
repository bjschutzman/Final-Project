import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from '../src/Pages/SearchRec/SearchRec'
import Store from '../src/Pages/SearchStore/SearchStore';
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";


class App extends Component {
  render() {
    return(
      <Router>
      <div>
        <Route exact path = '/' component = {Search}/>
        <Route exact path = '/shopping/' component = {Store}/>

    
      </div>
      </Router>
    )
  }
}


export default App;
