import React from "react";
import { PlayerItem } from "./PlayerItem";

export const PlayerList = () => {
  return (
    <ol id="players">
      <PlayerItem initialName="Player 1" symbol="X" />
      <PlayerItem initialName="Player 2" symbol="O" />
    </ol>
  );
};
