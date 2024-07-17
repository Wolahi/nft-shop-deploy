import { INFT } from "../interfaces/INFT.ts";
import { FC } from "react";

interface INFTitem {
  item: INFT;
}

const NFT: FC<INFTitem> = ({ item }) => {
  return <div>{item.author}</div>;
};
export default NFT;
