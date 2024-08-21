import { INFTPost } from "../../../shared/config/interfaces/INFTPost.ts";
import $api from "../../../shared/api/api.ts";
import { AxiosResponse } from "axios";
import { useState } from "react";

const useCreateNft = () => {
  const [newNFT, setNewNfts] = useState<INFTPost>();

  const createNFT = async (data: INFTPost): Promise<void> => {
    const formData = new FormData();

    Object.keys(data).forEach((key ) => {
      formData.append(key, data[key as keyof INFTPost] as never);
    })

    const res: AxiosResponse<INFTPost> = await $api.post(`/nfts/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data) {
      setNewNfts(res.data);
    }
    console.log(data);
  };

  return { createNFT, newNFT };
};
//потом надо добавить это нфт к существующим, чтобы не пришлось обновлять страницу для отображения нового нфт
export default useCreateNft;
