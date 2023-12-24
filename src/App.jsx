import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { PlayerList } from "./components/PlayerList";
import { Log } from "./components/Log";

function App() {
  const [currentSymbol, setCurrentSymbol] = useState("X");
  const [logs, setLogs] = useState([]);

  const handleClick = (rowIndex, colIndex) => {
    const clickedData = logs.find(
      (data) => data.rowIndex === rowIndex && data.colIndex === colIndex
    );
    const symbol = clickedData ? clickedData.symbol : null;
    let hasValue = logs && logs.length > 0 && symbol !== null;
    if (hasValue) return;

    setCurrentSymbol((currentSymbol) => (currentSymbol === "X" ? "O" : "X"));

    setLogs((logs) => {
      let symbol = "X";
      if (logs.length > 0) {
        const lastLog = logs[0];
        symbol = lastLog.symbol === "X" ? "O" : "X";
      }

      const newLogs = [{ rowIndex, colIndex, symbol: symbol }, ...logs];
      return newLogs;
    });
  };

  return (
    <main>
      <div id="game-container">
        <PlayerList currentSymbol={currentSymbol} />
        <GameBoard onClick={handleClick} logs={logs} />
        <Log logs={logs} />
      </div>
    </main>
  );
}

export default App;
