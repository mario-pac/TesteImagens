import styled from "styled-components";

export const Container = styled.button`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.input.backgroundColor};
  width: min-content;
  height: min-content;
  &:hover {
    transform: scale(1.28);
  }
`;

export const Text = styled.h3`
  width: 15%;
  text-align: center;
  font-size: 1.2em;
  color: ${({ theme }) => theme.text.primary};
`;
