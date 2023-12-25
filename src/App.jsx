import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { PlayerList } from "./components/PlayerList";
import { Log } from "./components/Log";

function getCurrentSymbol(logs) {
  let symbol = "X";
  if (logs.length > 0) {
    const lastLog = logs[0];
    symbol = lastLog.symbol === "X" ? "O" : "X";
  }

  return symbol;
}

function App() {
  const [logs, setLogs] = useState([]);

  const symbol = getCurrentSymbol(logs);

  const handleClick = (rowIndex, colIndex) => {
    setLogs((logs) => {
      const newLogs = [{ rowIndex, colIndex, symbol }, ...logs];
      return newLogs;
    });
  };

  return (
    <main>
      <div id="game-container">
        <PlayerList symbol={symbol} />
        <GameBoard onClick={handleClick} logs={logs} />
        <Log logs={logs} />
      </div>
    </main>
  );
}

export default App;
