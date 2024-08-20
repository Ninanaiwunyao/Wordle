import PropTypes from "prop-types";

const LetterBox = ({ letter, color }) => {
  const bgColor = color
    ? color === "green"
      ? "bg-green"
      : color === "yellow"
      ? "bg-yellow"
      : color === "grey"
      ? "bg-grey"
      : ""
    : "";
  const textColor = bgColor ? "text-white" : "text-black";
  return (
    <div
      className={`w-16 h-16 ${bgColor} border-2 border-gray-400 flex justify-center items-center text-3xl font-bold uppercase ${textColor}`}
    >
      {letter}
    </div>
  );
};

LetterBox.propTypes = {
  letter: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default LetterBox;
