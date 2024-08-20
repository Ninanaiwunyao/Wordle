import { useReducer } from "react";
import Grid from "./Grid";
import useInputHandler from "./useInputHandler";

const correctWord = "REACT";
const initialState = {
  currentGuess: "",
  guesses: [],
  results: [],
  isGameOver: false,
  message: "",
  currentRow: 0,
};

const wordleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LETTER":
      if (state.currentGuess.length < 5 && !state.isGameOver) {
        return { ...state, currentGuess: state.currentGuess + action.payload };
      }
      return state;

    case "DELETE_LETTER":
      if (!state.isGameOver) {
        return { ...state, currentGuess: state.currentGuess.slice(0, -1) };
      }
      return state;

    case "SUBMIT_GUESS":
      if (state.currentGuess.length === 5 && !state.isGameOver) {
        const guessResult = checkGuess(state.currentGuess, correctWord);
        const newGuess = [...state.guesses, state.currentGuess];
        const newResults = [...state.results, guessResult];
        const isCorrect = guessResult.every((result) => result === "green");
        const isGameOver = isCorrect || newGuess.length >= 6;
        const message = isCorrect
          ? "YA! You are the winner!!"
          : newGuess.length >= 6
          ? "Oops! The game is over!!"
          : "";

        return {
          ...state,
          guesses: newGuess,
          results: newResults,
          currentGuess: isCorrect ? state.currentGuess : "",
          isGameOver,
          message,
          currentRow: isCorrect ? state.currentRow : state.currentRow + 1,
        };
      }
      return state;

    default:
      return state;
  }
};

const checkGuess = (guess, correctWord) => {
  const result = Array(5).fill("grey");
  const correctWordArray = correctWord.split("");

  guess.split("").forEach((letter, index) => {
    if (letter === correctWord[index]) {
      result[index] = "green";
      correctWordArray[index] = null;
    }
  });

  guess.split("").forEach((letter, index) => {
    if (result[index] === "grey" && correctWordArray.includes(letter)) {
      result[index] = "yellow";
      correctWordArray[correctWordArray.indexOf(letter)] = null; // 标记字母已使用
    }
  });

  return result;
};

const Game = () => {
  const [state, dispatch] = useReducer(wordleReducer, initialState);
  useInputHandler(dispatch);

  return (
    <div className="flex flex-col items-center">
      {[...Array(6)].map((_, index) => (
        <Grid
          key={index}
          currentGuess={
            index === state.currentRow
              ? state.currentGuess
              : state.guesses[index] || ""
          }
          result={state.results[index] || []}
        />
      ))}
      {state.message && <p className="mt-4 text-lg">{state.message}</p>}
    </div>
  );
};

export default Game;
