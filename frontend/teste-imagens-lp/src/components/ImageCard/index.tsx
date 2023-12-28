import React, { ImgHTMLAttributes } from "react";

import * as S from "./styles";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  title: string;
  onClick?: () => void;
}

const ImageCard: React.FC<Props> = (props) => {
  return (
    <S.Button onClick={props.onClick}>
      <S.Container src={props.src} alt={props.alt} {...props} />
      <S.Text>{props.title}</S.Text>
    </S.Button>
  );
};

export default ImageCard;
