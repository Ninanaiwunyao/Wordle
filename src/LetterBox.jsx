import React from "react";

const LetterBox = ({ letter }) => {
  return (
    <div className="w-12 h-12 border-2 border-gray-800 flex justify-center items-center text-2xl font-bold uppercase">
      {letter}
    </div>
  );
};

export default LetterBox;
