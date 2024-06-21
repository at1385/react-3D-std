import styled from "styled-components";
import { ButtonTag } from "/src/tags";

export const TabsWrapper = styled.div`
  display: inline-flex;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

export const Tab = styled(ButtonTag)`
  padding: 10px ${(props) => props.theme.indent};
  font-size: 20px;
  font-weight: bold;
  color: ${(props) =>
    props.active ? props.theme.textColor : props.theme.textColorMuted};
  background-color: ${(props) => (props.active ? "#ccc" : "#ddd")};

  &:disabled {
    cursor: default;

    &:active,
    &:hover {
      background-color: #ccc;
    }
  }
`;
