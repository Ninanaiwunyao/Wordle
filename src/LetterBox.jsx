import React from "react";

const LetterBox = ({ letter }) => {
  return (
    <div className="w-16 h-16 border-2 border-gray-400 flex justify-center items-center text-3xl font-bold uppercase">
      {letter}
    </div>
  );
};

export default LetterBox;
