import React from "react";

import Header from "./Header";
import PlayerCard from "./PlayerCard";

const App = () => {
  const players = [
    "890d1d92-55de-4a88-b1b8-002ac0be4b12",
      "5ca3924d-f092-4f75-8e75-77432cb61728",
  ];

  return (
    <div className="app">
      <Header />
      <div className="content">
        {players.map((player, idx) => (
          <PlayerCard key={idx} uuid={player} />
        ))}
      </div>
    </div>
  );
};

export default App;
