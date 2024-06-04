import React from "react";
import HomePage from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ProductSection from "./components/Product/Product";
import SingleProduct from "./components/Product/SingleProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AllProduct from "./components/Product/AllProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<AllProduct/>} />
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
