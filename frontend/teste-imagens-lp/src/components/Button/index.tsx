import React, { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<Props> = (props) => {
  return (
    <S.Container {...props}>
      <S.Text> {props.title} </S.Text>
    </S.Container>
  );
};

export default Button;
