import styled from "styled-components";
import Heading from "/src/heading/heading";
import { P } from "/src/tags";

export const CommentsHeading = styled(Heading)`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;

export const CommentAuthor = styled(Heading)`
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.textColorMuted};
  margin-bottom: 5px;
`;

export const CommentText = styled(P)`
  margin-bottom: ${(props) => props.theme.indent};
`;
