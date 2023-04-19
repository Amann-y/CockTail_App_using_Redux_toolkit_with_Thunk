import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComp from "./components/HeaderComp";
import HomePage from "./pages/HomePage";
import SingleProductDetail from "./pages/SingleProductDetail";
import Cart from "./pages/Cart";
import SearchPage from "./pages/SearchPage";
// import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <HeaderComp />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route path="/products/:id" element={<SingleProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default App;
