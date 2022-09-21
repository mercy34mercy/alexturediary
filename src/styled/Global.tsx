import { createGlobalStyle } from 'styled-components';

const isDarkMode = false

export const GlobalStyle = createGlobalStyle`
  :root {
  --color-primary: #fff;
  --color-text: #f7f7f7;
  --color-bg: rgb(20, 20, 20);
  --color-hover: rgba(230, 230, 230, 0.15);
  }
`