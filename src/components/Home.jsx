import React, { Component } from "react";
import axios from "axios";
import QuoteBox from "./QuoteBox";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      loaded: false,
    };
  }
  async componentDidMount() {
    const body = await axios.get("https://type.fit/api/quotes");
    this.quotes = body.data;
    setTimeout(()=> {
      this.setState({
        quote: this.quotes[Math.floor(Math.random() * this.quotes.length)].text,
        loaded: true,
      });
    }, 5000)
  }
  handleClick = async () => {
    this.setState({
      quote: this.quotes[Math.floor(Math.random() * this.quotes.length)].text,
    });
  };

  render() {
    return (
      <div className="container">
        <QuoteBox
          className=""
          quote={this.state.quote}
          handleClick={this.handleClick}
          loaded={this.state.loaded}
        />
      </div>
    );
  }
}

export default Home;
