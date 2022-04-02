import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./Game";
import "./index.css";

ReactDOM.render(
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/:_:" element={<Game />}></Route>
      </Routes>
    </Router>
  </div>,
  document.getElementById("root")
);
