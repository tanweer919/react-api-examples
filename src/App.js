import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/login";
import Register from "./components/register";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/404" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/404"></Redirect>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
