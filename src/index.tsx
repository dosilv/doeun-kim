import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <BrowserRouter>
  //   <ThemeProvider theme={theme}>
  //     <GlobalStyle />
  //     <Routes>
  //       <Route path="/" element={<Main />} />
  //     </Routes>
  //   </ThemeProvider>
  // </BrowserRouter>

  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Main />
  </ThemeProvider>
);

reportWebVitals();
