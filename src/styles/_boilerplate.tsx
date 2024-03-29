import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  input,
  button,
  select,
  textarea,
  optgroup,
  option {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    color: inherit;
  }

  body {
    font-family: "Arial Rounded MT Bold", sans-serif;
    line-height: var(--line-height-m);
    color: var(--color-light-100);

    background-color: #1d1b31;
  }

`
