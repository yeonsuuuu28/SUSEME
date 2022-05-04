import React from "react";
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./components/intro";
import Result from "./components/result";
import Test from "./components/test";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element = {<Intro />} />
      <Route path="/result" element = {<Result />} />
      <Route path="/test" element = {<Test />} />
    </Routes>
  </BrowserRouter>
);

render(<App />, document.getElementById('root')); 