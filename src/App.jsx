import React from "react";
import Game from "./Game";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* <h1 className="text-3xl font-bold mb-6">Wordle Game</h1> */}
      <Game />
    </div>
  );
}

export default App;
