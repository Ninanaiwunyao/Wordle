import React from "react";
import LetterBox from "./LetterBox.jsx";

const Grid = ({ currentGuess }) => {
  return (
    <div className="grid grid-cols-5 gap-2 mb-2">
      {[...Array(5)].map((_, i) => (
        <LetterBox key={i} letter={currentGuess[i] || ""} />
      ))}
    </div>
  );
};

export default Grid;
