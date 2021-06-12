import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  :root {
    ${colors}

    font-family: 'Segoe UI', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${({ theme }) => theme.fonts.text};
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    max-height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: var(--colors-darkGrey) var(--colors-white);

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: var(--colors-white);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--colors-darkGrey);
      border-radius: 20px;
      border: 7px solid var(--colors-white);
    }
  }

  body {
    color: var(--colors-text);
    background-color: var(--colors-white);
    letter-spacing: 0.05em;
    line-height: 1.5;
    height: 100%;

    & div#root {
      height: 100%;
    }
  }
`;
