import React, { useEffect, useState } from "react";
import axios from "axios";

import Spacer from "../../Spacer";
import ImageCard from "../../ImageCard";

import { Image } from "../../../definitions/image";
import { backendUrl } from "../../../utils/utils";

import * as S from "./styles";

interface Props {
  albumId: number;
}

const AlbumView: React.FC<Props> = ({ albumId }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
  }, [fetchData]);

  useEffect(() => {
    if (filter.length) {
      const filt = images.filter((img) => img.title.includes(filter));
      setFiltered(filt);
    } else {
      setFiltered([]);
    }
  }, [filter, images]);

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

      <S.TextInput value={filter} onChange={(e) => setFilter(e.target.value)} />
      <Spacer height={48} />
      <S.AlbumsRenderer>
        {filter.length
          ? filtered.map((img, idx) => (
              <a href={`/image/${img.id}`} style={{ textDecoration: "none" }}>
                <ImageCard
                  src={img.thumbnailUrl}
                  key={idx}
                  alt={img.title}
                  title={img.title}
                />
              </a>
            ))
          : images.map((img, idx) => (
              <a href={`/image/${img.id}`} style={{ textDecoration: "none" }}>
                <ImageCard
                  src={img.thumbnailUrl}
                  key={idx}
                  alt={img.title}
                  title={img.title}
                />
              </a>
            ))}
      </S.AlbumsRenderer>
    </S.Container>
  );
};

export default AlbumView;
