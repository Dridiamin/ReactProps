import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div>
      <h1>PlayersList</h1>
      {players.map((player, i) => (
        <Player key={i} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
