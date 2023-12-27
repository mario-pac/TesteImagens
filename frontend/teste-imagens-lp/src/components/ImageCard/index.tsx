import React, { ImgHTMLAttributes } from "react";

import * as S from "./styles";

const ImageCard: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <S.Container {...props} />;
};

export default ImageCard;
