import styled from "styled-components";
import Button from "/src/button/button";

export const PopupWrapper = styled.section`
  min-width: 500px;
  padding: ${(props) => props.theme.indent};
  background-color: #fff;
  border: 2px solid ${(props) => props.theme.textColor};
`;

export const PopupHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${(props) => props.theme.textColor};
`;

export const PopupClose = styled(Button)`
  width: 25px;
  height: 25px;
  padding: 3px;
  border-radius: 50%;
  line-height: 1;
`;
