import React from "react";

import { FaFolderClosed } from "react-icons/fa6";

import * as S from "./styles";

interface Props {
  title: string;
  onClick?: () => void;
}

const AlbumCard: React.FC<Props> = ({ title, onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <div style={{ marginLeft: "6.5%" }}>
        <FaFolderClosed style={{ width: "5vmin", height: "5vmin" }} />
      </div>
      <S.Text>{title}</S.Text>
    </S.Container>
  );
};

export default AlbumCard;
