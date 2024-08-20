import React, { useReducer } from "react";
import Grid from "./Grid";
import InputHandler from "./InputHandler";

const initialState = {
  currentGuess: "",
};

const wordleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LETTER":
      if (state.currentGuess.length < 5) {
        return { ...state, currentGuess: state.currentGuess + action.payload };
      }
      return state;
    case "DELETE_LETTER":
      return { ...state, currentGuess: state.currentGuess.slice(0, -1) };
    default:
      return state;
  }
};

const Game = () => {
  const [state, dispatch] = useReducer(wordleReducer, initialState);

  return (
    <div className="flex flex-col items-center">
      <Grid currentGuess={state.currentGuess} />
      <InputHandler dispatch={dispatch} />
    </div>
  );
};

export default Game;
