import Header from "./components/Header";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import TopRated from "./components/pages/TopRated";
import NovPLaying from "./components/pages/NovPLeying";
import Popular from "./components/pages/Popular";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} /> {}
        <Route path="/top_rated" element={<TopRated />} />
        <Route path="/now_playing" element={<NovPLaying />} /> {}
      </Routes>
    </div>
  );
}

export default App;
