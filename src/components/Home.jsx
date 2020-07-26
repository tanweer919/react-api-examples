import React, { useEffect } from "react";
import axios from "axios";
import QuoteBox from "./QuoteBox";
import { connect } from "react-redux";
import { initHome, setRandomQuote } from "../store/actions/homeActions";
import "./Home.css";
const Home = ({ quote, loaded, quotes, initHome, setRandomQuote }) => {
  useEffect(() => {
    const fetchData = async () => {
      const body = await axios.get("https://type.fit/api/quotes");
      initHome(
        body.data[Math.floor(Math.random() * body.data.length)].text,
        body.data
      );
    };
    fetchData();
  }, []);
  const handleClick = async () => {
    setRandomQuote();
  };

  return (
    <div className="container">
      <QuoteBox
        className=""
        quote={quote}
        handleClick={handleClick}
        loaded={loaded}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { quote, loaded, quotes } = state.home;
  return {
    quote,
    loaded,
    quotes,
  };
};

const mapDispatchToProps = { initHome, setRandomQuote };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
