import React from "react";
import { PlayerItem } from "./PlayerItem";

export const PlayerList = ({ symbol, onPlayerNameChange }) => {
  return (
    <ol id="players" className="highlight-player">
      <PlayerItem
        initialName="Player 1"
        symbol="X"
        isActive={symbol === "X" ? "active" : ""}
        onPlayerNameChange={onPlayerNameChange}
      />
      <PlayerItem
        initialName="Player 2"
        symbol="O"
        isActive={symbol === "O" ? "active" : ""}
        onPlayerNameChange={onPlayerNameChange}
      />
    </ol>
  );
};
