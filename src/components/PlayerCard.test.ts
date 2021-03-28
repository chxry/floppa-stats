import { render, screen } from "@testing-library/react";
import PlayerCard, { PlayerCardProps } from "./PlayerCard";

it("should render player card", () => {
  const playerCardProps: PlayerCardProps = {
    uuid: "890d1d92-55de-4a88-b1b8-002ac0be4b12",
    data: {
      name: "chxry",
      hours: "88.62h",
      mobs: "7962",
      mined: "85574",
      placed: "29426",
      distance: "516.75km",
      deaths: "25",
    },
  };

  render(PlayerCard(playerCardProps));
  Object.keys(playerCardProps.data).forEach((prop) => {
    // @ts-ignore
    expect(screen.getByText(playerCardProps.data[prop])).toBeInTheDocument();
  });
});
