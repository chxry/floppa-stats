import React, { useEffect, useState } from "react";

import { queryData } from "../utils/query";
import { PlayerData } from "../utils/types";
import PlayerCard from "./PlayerCard";

type PlayerCardControllerProps = {
  uuid: string;
};

const PlayerCardController = ({ uuid }: PlayerCardControllerProps) => {
  const [data, setData] = useState<PlayerData>({
    name: "",
    hours: "...",
    mobs: "...",
    mined: "...",
    placed: "...",
    distance: "...",
    deaths: "...",
  });

  useEffect(() => {
    queryData(uuid).then((data) => setData(data));
  }, []);

  return <PlayerCard uuid={uuid} data={data} />;
};

export default PlayerCardController;
