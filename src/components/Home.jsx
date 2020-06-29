import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "Loading quotes...",
    };
  }
  async componentDidMount() {
    const body = await axios.get("https://type.fit/api/quotes");
    this.quotes = body.data;
    this.setState({
      quote: this.quotes[Math.floor(Math.random() * this.quotes.length)].text,
    });
  }
  handleClick = async () => {
    this.setState({
      quote: this.quotes[Math.floor(Math.random() * this.quotes.length)].text,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="quote-box">
          <div className="quote-content">{this.state.quote}</div>
          <div className="quote-refresh">
            <button className="quote-refresh-button" onClick={this.handleClick}>
              Get new Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
