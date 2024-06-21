import styled from "styled-components";
import { P } from "/src/tags";

export const Wrapper = styled(P)`
  margin-bottom: 40px;
`;

export const Date = styled.span`
  margin-left: ${(props) => props.theme.indent};
  color: green;
`;
