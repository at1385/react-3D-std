import styled from "styled-components";
import { P } from "/src/tags";

export const PopularityPinText = styled(P)`
  color: ${(props) => (props.commentsCount ? "green" : props.theme.textColor)};
`;
