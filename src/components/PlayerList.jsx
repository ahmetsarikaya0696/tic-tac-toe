import React from "react";
import { PlayerItem } from "./PlayerItem";

export const PlayerList = () => {
  return (
    <ol id="players">
      <PlayerItem name="Player 1" symbol="X" />
      <PlayerItem name="Player 2" symbol="O" />
    </ol>
  );
};
