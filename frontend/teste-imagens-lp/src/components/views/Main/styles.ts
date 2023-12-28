import styled from "styled-components";

export const Container = styled.div`
  width: 95vw;
  padding: 24px;
`;

export const TextInput = styled.input.attrs({
  type: "text",
})`
  width: 50%;
  margin: 0 23%;
  padding: 10px;
  background-color: ${({ theme }) => theme.input.backgroundColor};
  color: ${({ theme }) => theme.input.color};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-size: ${({ theme }) => theme.input.fontSize}em;
`;

export const AlbumsRenderer = styled.div`
  width: 95vw;

  display: flex;
  flex-wrap: wrap;

  gap: 20vh;
`;
