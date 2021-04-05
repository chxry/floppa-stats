import React from "react";

import Header from "./Header";
import PlayerCardController from "./PlayerCardController";

const App = () => {
  const players = [
    "890d1d92-55de-4a88-b1b8-002ac0be4b12",
    "5ca3924d-f092-4f75-8e75-77432cb61728",
    "22a65e61-9903-4e4c-9305-d5239cc3798d",
    "4b9d4251-521c-48e9-9c07-d4ee4a9ddcf5",
    "b501a7e5-6902-4d57-bb81-dcfcce56f1c0"
  ];

  return (
    <div className="app">
      <Header />
      <div className="content">
        {players.map((player, idx) => (
          <PlayerCardController key={idx} uuid={player} />
        ))}
      </div>
    </div>
  );
};

export default App;
