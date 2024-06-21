import { createRoot } from "react-dom/client";
import App from "/src/app/app";
import { ThemeProvider } from "styled-components";
import { theme } from "/src/themes/defaultTheme";
import { GlobalStyles } from "./styled";

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
