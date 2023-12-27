import React, { useEffect, useState } from "react";
import axios from "axios";

import * as S from "./styles";
import Spacer from "../../components/Spacer";
import { Image } from "../../definitions/image";
import { backendUrl } from "../../utils/utils";
import ImageCard from "../../components/ImageCard";

const Main: React.FC = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(backendUrl + "/images/getAlbums");
      setImages(response.data);
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetchData();
    console.log(images);
  }, []);

  return (
    <S.Container>
      <S.TextInput />
      <Spacer height={48} />
      {images.map((image, idx) => (
        <ImageCard key={idx} src={image.url} title={image.title} />
      ))}
    </S.Container>
  );
};

export default Main;
