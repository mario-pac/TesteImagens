import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 24px;
`;

export const TextInput = styled.input.attrs({
  type: "text",
})`
  width: 50%;
  margin: 0 25%;
  padding: 10px;
  background-color: ${({ theme }) => theme.input.backgroundColor};
  color: ${({ theme }) => theme.input.color};
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-size: ${({ theme }) => theme.input.fontSize}em;
`;
