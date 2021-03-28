import React, { useEffect, useState } from "react";
import "../assets/scss/playercard.scss";
import Emoji from "react-apple-emojis";

import PlayerStat from "./PlayerStat";
import { queryData } from "../utils/query";
import { PlayerData } from "../utils/types";

type PlayerCardProps = {
  uuid: string;
};

const PlayerCard = ({ uuid }: PlayerCardProps) => {
  const [data, setData] = useState<PlayerData>({
    name: "",
    hours: "...",
    mobs: "...",
    mined: "...",
    placed: "...",
    distance: "...",
    deaths: "...",
  });
  console.log(data);

  useEffect(() => {
    queryData(uuid).then((data) => setData(data));
  }, []);

  return (
    <div className="player">
      <img src={`https://crafatar.com/avatars/${uuid}?&overlay`} />
      <h2 className="name">
        {!!data.name ? (
          data.name
        ) : (
          <>
            <Emoji name="hourglass-not-done" />
            Loading
          </>
        )}
      </h2>
      <PlayerStat emoji="alarm-clock" display="Playtime" value={data.hours} />
      <PlayerStat emoji="dagger" display="Mobs killed" value={data.mobs} />
      <PlayerStat emoji="pick" display="Blocks mined" value={data.mined} />
      <PlayerStat emoji="brick" display="Blocks placed" value={data.placed} />
      <PlayerStat
        emoji="person-running"
        display="Travelled"
        value={data.distance}
      />
      <PlayerStat
        emoji="skull-and-crossbones"
        display="Deaths"
        value={data.deaths}
      />
    </div>
  );
};

export default PlayerCard;
