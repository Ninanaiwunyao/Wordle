import React from "react";
import LetterBox from "./LetterBox";

const Grid = ({ currentGuess }) => {
  return (
    <div className="grid grid-cols-5 gap-2 mb-4">
      {[...Array(5)].map((_, i) => (
        <LetterBox key={i} letter={currentGuess[i] || ""} />
      ))}
    </div>
  );
};

export default Grid;
