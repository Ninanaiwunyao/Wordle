import { useEffect } from "react";

const useInputHandler = (dispatch) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) {
        dispatch({ type: "ADD_LETTER", payload: key });
      } else if (e.key === "Backspace") {
        dispatch({ type: "DELETE_LETTER" });
      } else if (e.key === "Enter") {
        dispatch({ type: "SUBMIT_GUESS" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);
};

export default useInputHandler;
