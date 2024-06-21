import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    max-width: 720px;
    font-family: ${(props) => props.theme.font};
    font-size: 16px;
    color: ${(props) => props.theme.textColor};
    line-height: 1.5;
  }
`;
