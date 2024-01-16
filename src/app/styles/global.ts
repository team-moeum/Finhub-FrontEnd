import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
      box-sizing: border-box;
      user-select: none;
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color:rgba(255,255,255,0);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html, body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }

  body {
    background-color: #FFF;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button {
    white-space: nowrap;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;

    margin: 0;
    padding: 0;

    outline: 0;
    border: 0 solid transparent;
    background: transparent;
    cursor: pointer;

    font-family: inherit;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;

    &:hover,
    &:focus {
      text-decoration: none;
    }

    &:focus {
      outline: none;
    }
  }

  ol,
  ul {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    padding-left: 0;
    list-style: none;
  }

  input[type='search'] {
    &::-ms-clear,
    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }
`;
