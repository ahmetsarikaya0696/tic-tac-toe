import React, { useState } from "react";

const initialBoardValues = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const GameBoard = ({ onSymbolChange, currentSymbol }) => {
  const [boardValues, setBoardValues] = useState(initialBoardValues);

  const handleClick = (rowIndex, columnIndex) => {
    const hasValue = boardValues[rowIndex][columnIndex];
    if (hasValue) return boardValues;

    onSymbolChange();

    setBoardValues((boardValues) => {
      const newBoardValues = [...boardValues.map((row) => [...row])];
      newBoardValues[rowIndex][columnIndex] = currentSymbol;
      return newBoardValues;
    });
  };

  return (
    <ol id="game-board">
      {boardValues.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((item, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => handleClick(rowIndex, columnIndex)}>
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
