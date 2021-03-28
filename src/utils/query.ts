import config from "../config.json";
import { PlayerData } from "./types";

const queryParameter = (uuid: string, param: string) => {
  return new Promise<string>((resolve) => {
    fetch(config.cors + config.api + uuid + "/" + param, {
      method: "GET",
      headers: {
        Token: config.token,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          resolve(`Error ${res.status}`);
        }
        res.json().then((data) => resolve(data.message));
      })
      .catch(() => resolve("Error"));
  });
};

const queryData = async (uuid: string) => {
  return new Promise<PlayerData>(async (resolve) => {
    const name = await queryParameter(uuid, "player_name");
    const playTime = await queryParameter(uuid, "statz_time_played");
    const mobs = await queryParameter(uuid, "statz_mobs_killed");
    const mined = await queryParameter(uuid, "statz_blocks_broken");
    const placed = await queryParameter(uuid, "statz_blocks_placed");
    const distanceBlocks = await queryParameter(
      uuid,
      "statz_distance_traveled"
    );
    const deaths = await queryParameter(uuid, "statz_deaths");

    const hours = (parseInt(playTime) / 60).toFixed(2) + "h";
    const distance = (parseInt(distanceBlocks) / 1000).toFixed(2) + "km";

    const data = { name, hours, mobs, mined, placed, distance, deaths };
    resolve(data);
  });
};

export { queryParameter, queryData };
