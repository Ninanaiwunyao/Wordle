import LetterBox from "./LetterBox.jsx";
import PropTypes from "prop-types";

const Grid = ({ currentGuess, result = [] }) => {
  return (
    <div className="grid grid-cols-5 gap-2 mb-2">
      {[...Array(5)].map((_, i) => (
        <LetterBox
          key={i}
          letter={currentGuess[i]}
          color={result[i]} //空的跟undefined在這邊意義一樣
        />
      ))}
    </div>
  );
};
Grid.propTypes = {
  currentGuess: PropTypes.string,
  result: PropTypes.arrayOf(PropTypes.string),
};

export default Grid;
