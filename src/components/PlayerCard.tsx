import React, { useEffect, useState } from "react";
import "../assets/scss/playercard.scss";

import PlayerStat from "./PlayerStat";
import { queryParameter, queryData } from "../utils/query";
import { Data } from "../utils/types";

type PlayerCardProps = {
  uuid: string;
};

const PlayerCard = ({ uuid }: PlayerCardProps) => {
  const loadMessage = "Loading";
  const [data, setData] = useState<Data>({
    name: loadMessage,
    hours: loadMessage,
    mobs: loadMessage,
    blocks: loadMessage,
    deaths: loadMessage,
  });
  console.log(data);

  useEffect(() => {
    queryData(uuid).then((data) => setData(data));
  }, []);

  return (
    <div className="player">
      <img src={`https://crafatar.com/avatars/${uuid}?&overlay`} />
      <h2 className="name">{data.name}</h2>
      <PlayerStat emoji="alarm-clock" display="Playtime" value={data.hours} />
      <PlayerStat emoji="dagger" display="Mobs killed" value={data.mobs} />
      <PlayerStat emoji="pick" display="Blocks mined" value={data.blocks} />
      <PlayerStat
        emoji="skull-and-crossbones"
        display="Deaths"
        value={data.deaths}
      />
    </div>
  );
};

export default PlayerCard;
