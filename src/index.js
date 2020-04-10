import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";

//import products from "./data/products.json";
import App from "./App";
import "./assets/scss/style.scss";
import * as serviceWorker from "./serviceWorker";

import AuthContextProvider from "./auth/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
