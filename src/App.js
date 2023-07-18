import "./App.css";
import React from "react";
import PlayersList from "./component/PlayersList";
import "./index.css";

const App = () => {
  return (
    <div>
      <h1>Football Players</h1>
      <PlayersList />
    </div>
  );
};

export default App;
