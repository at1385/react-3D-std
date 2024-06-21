import styled from "styled-components";
import Heading from "/src/heading/heading";
import { P } from "/src/tags";

export const DescriptionHeading = styled(Heading)`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;

export const DescriptionText = styled(P)`
  margin-bottom: ${(props) => props.theme.indent};
`;
