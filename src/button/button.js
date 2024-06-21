import styled, { css } from "styled-components";
import { ButtonTag } from "/src/tags/";

const Button = styled(ButtonTag)`
  background-color: ${(props) => props.theme.buttonColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 03s;
  ${(props) => {
    const size = props.theme.button[props.size || "medium"];

    return css`
      height: ${size.height};
      padding-left: ${size.padding};
      padding-right: ${size.padding};
      font-size: ${size.fontSize};
      border-radius: ${size.radius};
    `;
  }}

  &:active,
  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }

  &:active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  }

  &:disabled {
    background-color: #ddd;
    cursor: default;
  }
`;

export default Button;
