import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: fit-content;
  height: fit-content;

  padding: 6px 50px;
  background-color: ${({ theme }) => theme.button};
  border-radius: 8px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Text = styled.h2`
  text-align: center;
`;
