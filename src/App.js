import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Posts from "./Posts";
import Detail from './Detail'
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/read/:id" element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;
