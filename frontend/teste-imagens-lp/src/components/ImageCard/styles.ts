import styled from "styled-components";

export const Container = styled.img`
  margin-top: 6vh;
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.input.backgroundColor};
  width: 16vw;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Text = styled.h3`
  width: 15vw;
  text-align: center;
  font-size: 1.2em;
  color: ${({ theme }) => theme.text.primary};
`;
