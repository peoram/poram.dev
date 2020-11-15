import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Normalize } from 'styled-normalize';
import App from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Cormorant Garamond", serif;
    font-size: 20px;
  }
`;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Normalize />
      <GlobalStyle />
      <Route path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
