import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

:root{
    font-size: 100%;
    @media screen and (max-width: 768px) {
      font-size:13px;
      transition: all 0.4s ease;
  }

  }

  html{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
  }

* {
    box-sizing: border-box;
    -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  }

  body{
    background-color:#ffffff;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    *{
      font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
  
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    -webkit-appearance: none; 

  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
   }
   *:focus {
    outline: none;
  }

  button {
    border: none;
    outline: none;
    color: black;
    text-shadow: none;
    background: none;
    box-shadow: none;
    cursor: pointer;
    -webkit-tap-highlight-color:  rgba(0, 0, 0, 0);

    &:focus {
      box-shadow: none;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;
