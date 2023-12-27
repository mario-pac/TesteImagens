import React from "react";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import Main from "./pages/Main";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
