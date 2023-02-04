import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.mainBackground};
    #root {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .errorMessage {
      .Toastify__toast {
        background-color: ${(props) => props.theme.colors.primaryKeyColor};
        color: ${(props) => props.theme.colors.primaryTextColor};
        button {
          color: ${(props) => props.theme.colors.primaryTextColor};
        }
      }
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
  }
`;
