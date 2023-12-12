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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.color.secondary};
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    color: ${props => props.theme.color.primary};
  }

  path {
    stroke: ${props => props.theme.color.primary};
  }
`;

export default GlobalStyle;
