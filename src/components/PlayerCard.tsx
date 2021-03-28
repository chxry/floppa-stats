import React from "react";
import "../assets/scss/playercard.scss";
import Emoji from "react-apple-emojis";

import PlayerStat from "./PlayerStat";
import { PlayerData } from "../utils/types";

export type PlayerCardProps = {
  uuid: string;
  data: PlayerData;
};

const PlayerCard = ({ uuid, data }: PlayerCardProps) => {
  const { name, hours, mobs, mined, placed, distance, deaths } = data;

  return (
    <div className="player">
      <img src={`https://crafatar.com/avatars/${uuid}?&overlay`} />
      <h2 className="name">
        {!!name ? (
          name
        ) : (
          <>
            <Emoji name="hourglass-not-done" />
            Loading
          </>
        )}
      </h2>
      <PlayerStat emoji="alarm-clock" display="Playtime" value={hours} />
      <PlayerStat emoji="dagger" display="Mobs Killed" value={mobs} />
      <PlayerStat emoji="pick" display="Blocks Mined" value={mined} />
      <PlayerStat emoji="brick" display="Blocks Placed" value={placed} />
      <PlayerStat emoji="person-running" display="Travelled" value={distance} />
      <PlayerStat
        emoji="skull-and-crossbones"
        display="Deaths"
        value={deaths}
      />
    </div>
  );
};

export default PlayerCard;
