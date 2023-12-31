import { createGlobalStyle } from 'styled-components';

import { variables } from './variables';

export const GlobalStyles = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: 'Montserrat', sans-serif;  
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
    
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
  }

  input[type=number] {
    -moz-appearance:textfield; 
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #454545;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  // component styles
  .Toastify__toast-theme--light {
    background: #454545;
    color: #fff;
    opacity: 0.9;
  }

  .Toastify__close-button--light {
    color: #fff;
    opacity: 0.6;

    &:is(:hover, :focus, :active) {
      opacity: 1;
    }
  }
`;
