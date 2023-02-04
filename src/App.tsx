import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import getActiveTheme from "./functions/getActiveTheme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeAppContext } from "./contexts/ThemeAppContext";
import Container from "./styles/Container";
import Header from "./components/Header";
import ResultBox from "./components/ResultBox";
import NumbersProvider from "./contexts/NumbersContext";
import KeysBox from "./components/KeysBox";
import { ToastContainer } from "react-toastify";

function App() {
  const { theme } = useContext(ThemeAppContext);
  return (
    <ThemeProvider theme={getActiveTheme(theme)}>
      <GlobalStyle />
      <Container>
        <Header />
        <NumbersProvider>
          <ResultBox />
          <KeysBox />
        </NumbersProvider>
        <ToastContainer className={"errorMessage"} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
