import React from "react";
import "../assets/scss/playerstat.scss";
import Emoji from "react-apple-emojis";

type PlayerStatProps = {
  display: string;
  value: string;
  emoji: string;
};

const PlayerStat = ({ display, value, emoji }: PlayerStatProps) => {
  return (
    <div className="playerstat">
      <Emoji name={emoji} />
      <span>{display}: </span>
      {value}
    </div>
  );
};

export default PlayerStat;
