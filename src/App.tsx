import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import getActiveTheme from "./functions/getActiveTheme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeAppContext } from "./contexts/ThemeAppContext";
import Container from "./styles/Container";
import Header from "./components/Header";

function App() {
  const { theme } = useContext(ThemeAppContext);
  return (
    <ThemeProvider theme={getActiveTheme(theme)}>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
