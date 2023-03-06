import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkMain from "./pages/WorkMain";
import Error from "./pages/Error";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/work/:name" element={<WorkMain></WorkMain>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </Router>
  );
}
