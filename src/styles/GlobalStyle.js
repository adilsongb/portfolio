import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.color.secondary};
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme.color.secondary};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.color.primary};
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    color: ${(props) => props.theme.color.primary};
  }

  path {
    stroke: ${(props) => props.theme.color.primary};
  }
`;

export default GlobalStyle;
