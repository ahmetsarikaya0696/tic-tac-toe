import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { PlayerList } from "./components/PlayerList";
import { Log } from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

function getCurrentSymbol(logs) {
  let symbol = "X";
  if (logs.length > 0) {
    const lastLog = logs[0];
    symbol = lastLog.symbol === "X" ? "O" : "X";
  }

  return symbol;
}

function getWinner(logs) {
  let message = null;

  WINNING_COMBINATIONS.find((combination) => {
    if (logs.length > 0) {
      let symbols = [];

      combination.forEach((position) => {
        const { row, col } = position;
        let log = logs.find(
          (log) => log.rowIndex === row && log.colIndex === col
        );

        symbols.push(log ? log.symbol : null);
      });

      const xWins = symbols.every((symbol) => symbol === "X");
      const oWins = symbols.every((symbol) => symbol === "O");
      const isGameOver = xWins || oWins || logs.length === 9;

      if (isGameOver) {
        if (xWins) message = "X wins!";
        else if (oWins) message = "O wins!";
        else message = "It's tie!";
      }
    }

    return message;
  });

  return message;
}

function App() {
  const [logs, setLogs] = useState([]);

  const message = getWinner(logs);

  const symbol = getCurrentSymbol(logs);

  const handleClick = (rowIndex, colIndex) => {
    setLogs((logs) => {
      const newLogs = [{ rowIndex, colIndex, symbol }, ...logs];
      return newLogs;
    });
  };

  return (
    <main>
        {message && <h1>{message}</h1>}
      <div id="game-container">
        <PlayerList symbol={symbol} />
        <GameBoard onClick={handleClick} logs={logs} />
        <Log logs={logs} />
      </div>
    </main>
  );
}

export default App;
