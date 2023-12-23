import React from "react";
import { PlayerItem } from "./PlayerItem";

export const PlayerList = ({ currentSymbol }) => {
  return (
    <ol id="players" className="highlight-player">
      <PlayerItem
        initialName="Player 1"
        symbol="X"
        isActive={currentSymbol === "X" ? "active" : ""}
      />
      <PlayerItem
        initialName="Player 2"
        symbol="O"
        isActive={currentSymbol === "O" ? "active" : ""}
      />
    </ol>
  );
};
