import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
  }
  h1, h2, h3 {
    color: #4a90e2;
  }
  input, button {
    font-size: 1rem;
    margin: 0.5rem;
    padding: 0.5rem;
  }
  button {
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #357abd;
  }
`;

export default GlobalStyles;
