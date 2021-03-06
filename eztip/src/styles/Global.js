import { css, keyframes } from "styled-components";

const hoverBtn = keyframes`
0% {
  color: black;
  background: #43d9b8;
  border: 1px solid #43d9b8;
}
100% {
  color: #43d9b8;
  background: white;
  border: 1px solid #43d9b8;
}
`;

export const Global = css`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    background: #f8f8f8;
  }
  input {
    -webkit-appearance: none;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
  h1 {
    font-size: 3.8rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h4 {
    font-size: 1.6rem;
    font-weight: 300;
  }
  p, input {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
    font-size: 1.6rem;
    font-family: "Source Sans Pro", sans-serif;
    color: #43d9b8;

    &:hover {
      text-decoration: underline;
    }
  }
  img {
    width: 100%;
    height: auto;
  }
  input {
    padding: 5px;
    font-size: 1.6rem;
    background: #f8f8f8;
    border: 1px solid #b5b5b5;
    color: black;
    margin-bottom: 10px;
    height: 40px;
    outline: none;

    &:placeholder {
      color: grey;
    }
  }

  button {
    color: black;
    background: #43d9b8;
    font-size: 1.6rem;
    padding: 12px 16px;
    border: 1px solid #43d9b8;;
    border-radius: 3px;
    text-transform: capitalize;
    font-family: "Raleway", sans-serif;
    outline: none;
    cursor: pointer;

    &:hover {
      animation: ${hoverBtn} 0.15s forwards;
    }
  }
  .App {
    width: 100%;
  }
`;
