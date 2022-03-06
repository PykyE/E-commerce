import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";

import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

import store from "./Redux/store";

import "./Sass/main.scss"

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  rootElement
);
