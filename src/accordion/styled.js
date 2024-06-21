import styled from "styled-components";
import { ButtonTag } from "/src/tags";

export const AccordionTab = styled(ButtonTag)`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  text-align: left;
  background-color: #ccc;
  border-bottom: 1px solid ${(props) => props.theme.colorText};

  &:disabled {
    cursor: default;

    &:active,
    &:hover {
      background-color: #ccc;
    }
  }
`;

export const AccordionContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: 0.3s;
`;

export const AccordionContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
