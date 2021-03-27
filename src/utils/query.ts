import config from "../config.json";
import { Data } from "./types";

const queryParameter = (uuid: string, param: string) => {
  return new Promise<string>((resolve, reject) => {
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
      .catch((err) => resolve("Error"));
  });
};

const queryData = async (uuid: string) => {
  return new Promise<Data>(async (resolve, reject) => {
    let name = await queryParameter(uuid, "player_name");
    let playTime = await queryParameter(uuid, "statz_time_played");
    let mobs = await queryParameter(uuid, "statz_mobs_killed");
    let blocks = await queryParameter(uuid, "statz_blocks_broken");
    let deaths = await queryParameter(uuid, "statz_deaths");

    let hours = (parseInt(playTime) / 60).toFixed(2) + "h";

    let data: Data = { name, hours, mobs, blocks, deaths };
    resolve(data);
  });
};

export { queryParameter, queryData };
