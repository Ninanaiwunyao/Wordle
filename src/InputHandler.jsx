import React, { useEffect } from "react";

const InputHandler = ({ dispatch }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) {
        dispatch({ type: "ADD_LETTER", payload: key });
      } else if (e.key === "Backspace") {
        dispatch({ type: "DELETE_LETTER" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  return null; // 不需要渲染任何内容
};

export default InputHandler;
