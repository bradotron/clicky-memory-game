import React from "react";
import "./App.css";
import Game from "./components/Game";
import GameCard from "./components/GameCard";

function App() {
  return (
    <Game>
      <GameCard />
      <GameCard />
    </Game>
  );
}

export default App;
