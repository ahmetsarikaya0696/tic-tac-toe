import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { PlayerList } from "./components/PlayerList";

function App() {
  const [currentSymbol, setCurrentSymbol] = useState("X");

  const handleSymbolChange = () => {
    setCurrentSymbol((turn) => (turn === "X" ? "O" : "X"));
  };

  return (
    <main>
      <div id="game-container">
        <PlayerList currentSymbol={currentSymbol} />
        <GameBoard
          onSymbolChange={handleSymbolChange}
          currentSymbol={currentSymbol}
        />
      </div>
    </main>
  );
}

export default App;
