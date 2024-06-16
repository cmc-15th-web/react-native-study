import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NaverMap from "./screens/NaverMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/naverMap" element={<NaverMap />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
