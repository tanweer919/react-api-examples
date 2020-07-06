import React from "react";
import Spinner from "react-spinkit";
import "./Home.css";

const QuoteBox = ({ quote, handleClick, loaded }) => {
  return (
    <div className="quote-box">
      <div className="quote-content">
        {loaded ? (
          quote
        ) : (
          <Spinner
            name="pacman"
            color="green"
            fadeIn={0}
            style={{ height: "50px" }}
          />
        )}
      </div>
      {loaded && (
        <div className="quote-refresh">
          <button className="quote-refresh-button" onClick={handleClick}>
            Get new Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default QuoteBox;
