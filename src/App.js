import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./views/Home";
import Detail from './views/Detail';
import Header from './components/Header';
import './App.css';
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <Header/>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;