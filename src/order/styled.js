import styled from "styled-components";

export const OrderLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 63%;
  margin-bottom: ${(props) => props.theme.indent};
`;
