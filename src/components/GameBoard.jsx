import React from "react";

const initialBoardValues = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = ({ onClick, logs }) => {
  let boardValues = initialBoardValues;

  logs.forEach((log) => {
    const { rowIndex, colIndex, symbol } = log;
    boardValues[rowIndex][colIndex] = symbol;
  });

  return (
    <ol id="game-board">
      {boardValues.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((item, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => onClick(rowIndex, columnIndex)}
                  disabled={item !== null}
                >
                  {item}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
