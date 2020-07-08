import React, { useState, useEffect } from "react";
import axios from "axios";
import QuoteBox from "./QuoteBox";
import "./Home.css";
const Home = () => {
  const [state, setState] = useState({
    quote: "",
    loaded: false,
    quotes: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const body = await axios.get("https://type.fit/api/quotes");
      setState({
        quote: body.data[Math.floor(Math.random() * body.data.length)].text,
        loaded: true,
        quotes: body.data,
      });
    };
    fetchData();
  }, []);
  const handleClick = async () => {
    const currentState = { ...state };
    currentState.quote =
      currentState.quotes[
        Math.floor(Math.random() * currentState.quotes.length)
      ].text;
    currentState.loaded = true;
    setState(currentState);
  };

  return (
    <div className="container">
      <QuoteBox
        className=""
        quote={state.quote}
        handleClick={handleClick}
        loaded={state.loaded}
      />
    </div>
  );
};

export default Home;
