import React, { useEffect, useState } from "react";
import axios from "axios";

import { Navigate } from "react-router-dom";

import Spacer from "../../Spacer";
import AlbumCard from "../../AlbumCard";

import { Image } from "../../../definitions/image";
import { backendUrl } from "../../../utils/utils";

import * as S from "./styles";

const MainView: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [albumId, setAlbumId] = useState<number>();

  const fetchData = async () => {
    try {
      const response = await axios.get(backendUrl + "/images/getAlbums");
      setImages(response.data);
    } catch (error) {
      console.error("Erro na solicitação:", error);
    }
  };

  const [filtered, setFiltered] = useState<Image[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter.length) {
      const filt = images.filter((img) => img.albumId === Number(filter));
      setFiltered(filt);
    } else {
      setFiltered([]);
    }
  }, [filter]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <S.Container>
      {albumId && <Navigate to={`/album/${albumId}`} replace={false} />}
      <h1 style={{ width: "100%", textAlign: "center" }}>Seleção de álbuns</h1>
      <Spacer height={12} />

      <h2
        style={{
          width: "95vw",
          textAlign: "center",
        }}
      >
        Filtrar por número do álbum:
      </h2>

      <S.TextInput value={filter} onChange={(e) => setFilter(e.target.value)} />
      <Spacer height={48} />
      <S.AlbumsRenderer>
        {filter.length
          ? filtered.map((alb) => (
              <AlbumCard
                title={"Álbum #" + alb.albumId}
                onClick={() => setAlbumId(alb.albumId)}
              />
            ))
          : images.map((alb, idx) => (
              <AlbumCard
                title={"Álbum #" + (idx + 1)}
                onClick={() => setAlbumId(alb.albumId)}
              />
            ))}
      </S.AlbumsRenderer>
    </S.Container>
  );
};

export default MainView;
