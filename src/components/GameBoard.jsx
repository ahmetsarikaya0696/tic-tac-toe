import React from "react";

export const GameBoard = ({ onClick, boardValues }) => {
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
