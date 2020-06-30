import React, { Component } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
