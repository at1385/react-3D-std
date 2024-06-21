import styled from "styled-components";

export const CounterWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
  margin-left: ${(props) => props.theme.indent};
`;

export const Count = styled.input`
  width: auto;
  font-family: inherit;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border: none;
`;
