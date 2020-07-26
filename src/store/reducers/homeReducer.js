import { INITHOME, SETRANDOMQUOTE } from "../actions/types";

const homeReducer = (
  state = { quote: "", loaded: false, quotes: [] },
  action
) => {
  switch (action.type) {
    case INITHOME:
      state = {
        quote: action.payload.quote,
        loaded: true,
        quotes: action.payload.quotes,
      };
      break;

    case SETRANDOMQUOTE:
      const currentState = { ...state };
      currentState.quote =
        currentState.quotes[
          Math.floor(Math.random() * currentState.quotes.length)
        ].text;
      currentState.loaded = true;
      break;

    default:
      return state;
  }
  return state;
};

export default homeReducer;
