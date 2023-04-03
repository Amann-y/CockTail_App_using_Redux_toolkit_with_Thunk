import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import HomePage from "./pages/HomePage";
import SingleProductDetail from "./pages/SingleProductDetail";

const App = () => {
  return (
    <>
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<SingleProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
