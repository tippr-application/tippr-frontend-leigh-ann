import { css } from "styled-components";

export const Global = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  input {
    -webkit-appearance: none;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Raleway", sans-serif;
  }
  h1 {
    font-size: 3.8rem;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 200;
  }
  p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 3rem;
  }
  a {
    font-size: 2rem;
    font-family: "Source Sans Pro", sans-serif;
    color: #000000;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
