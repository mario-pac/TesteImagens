import React, { useEffect, useState } from "react";
import axios from "axios";

import * as S from "./styles";
import Spacer from "../../Spacer";
import { Image } from "../../../definitions/image";
import { backendUrl } from "../../../utils/utils";
import ImageCard from "../../../components/ImageCard";

interface Props {
  albumId: number;
}

const AlbumView: React.FC<Props> = ({ albumId }) => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
        backendUrl + `/images/byIdAlbum/${albumId}`
      );
      setImages(response.data);
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  const [images, setImages] = useState<Image[]>([]);
  const [filtered, setFiltered] = useState<Image[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filter.length) {
      const filt = images.filter((img) => img.title.includes(filter));
      setFiltered(filt);
    } else {
      setFiltered([]);
    }
  }, [filter]);

  return (
    <S.Container>
      <h1 style={{ width: "100%", textAlign: "center" }}>Imagens do álbum</h1>
      <Spacer height={12} />

      <h2
        style={{
          width: "95vw",
          textAlign: "center",
        }}
      >
        Filtrar por nome da imagem:
      </h2>

      <S.TextInput value={filter} />
      <Spacer height={48} />
      <S.AlbumsRenderer>
        {filtered.length
          ? filtered.map((img, idx) => (
              <ImageCard
                src={img.thumbnailUrl}
                key={idx}
                alt={img.title}
                title={img.title}
              />
            ))
          : images.map((img, idx) => (
              <ImageCard
                src={img.thumbnailUrl}
                key={idx}
                alt={img.title}
                title={img.title}
              />
            ))}
      </S.AlbumsRenderer>
    </S.Container>
  );
};

export default AlbumView;
