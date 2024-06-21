import styled from "styled-components";
import { Ul } from "/src/tags";
import { Link } from "react-router-dom";

export const List = styled(Ul)`
  margin-top: ${(props) => props.theme.indent};
  font-size: 0;
  text-align: center;
`;

export const ListItem = styled.li`
  display: inline-block;
  width: 200px;
  margin-bottom: ${(props) => props.theme.indent};
  margin-left: ${(props) => props.theme.indent};
  padding: 5px;
  font-size: 16px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.textColorMuted};
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textColor};
`;
