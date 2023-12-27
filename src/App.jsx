import { useState } from "react";
import { GameBoard } from "./components/GameBoard";
import { PlayerList } from "./components/PlayerList";
import { Log } from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { GameOver } from "./components/GameOver";

function getCurrentSymbol(logs) {
  let symbol = "X";
  if (logs.length > 0) {
    const lastLog = logs[0];
    symbol = lastLog.symbol === "X" ? "O" : "X";
  }

  return symbol;
}

function getWinner(logs, players) {
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
        if (xWins) message = `${players.X} won!`;
        else if (oWins) message = `${players.O} won!`;
        else message = "It's tie!";
      }
    }

    return message;
  });

  return message;
}

function getBoardValues(logs) {
  const initialBoardValues = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let boardValues = [...initialBoardValues.map((innerArr) => [...innerArr])];

  if (logs.length > 0) {
    logs.forEach((log) => {
      const { rowIndex, colIndex, symbol } = log;
      boardValues[rowIndex][colIndex] = symbol;
    });
  }

  return boardValues;
}

function App() {
  const [logs, setLogs] = useState([]);
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });

  const message = getWinner(logs, players);

  const symbol = getCurrentSymbol(logs);

  const boardValues = getBoardValues(logs);

  const handleClick = (rowIndex, colIndex) => {
    setLogs((logs) => {
      const newLogs = [{ rowIndex, colIndex, symbol }, ...logs];
      return newLogs;
    });
  };

  const handleRematch = () => {
    setLogs([]);
  };

  const handlePlayerName = (symbol, newName) => {
    setPlayers((players) => {
      const newPlayers = { ...players, [symbol]: newName };
      return newPlayers;
    });
  };

  return (
    <main>
      <div id="game-container">
        {message && <GameOver message={message} onClick={handleRematch} />}
        <PlayerList symbol={symbol} onPlayerNameChange={handlePlayerName} />
        <GameBoard onClick={handleClick} boardValues={boardValues} />
        <Log logs={logs} />
      </div>
    </main>
  );
}

export default App;
