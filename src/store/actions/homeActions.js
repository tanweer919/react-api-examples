import { INITHOME, SETRANDOMQUOTE } from "./types";
export const initHome = (quote, quotes) => {
  return {
    type: INITHOME,
    payload: {
      quote,
      quotes,
    },
  };
};
export const setRandomQuote = () => {
  return {
    type: SETRANDOMQUOTE,
  };
};
