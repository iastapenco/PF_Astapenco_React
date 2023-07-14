import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ListItemContainer from "./components/ListItemContainer/ListItemContainer";
import InicioPage from "./Pages/InicioPage/InicioPage";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import ShopPage from "./Pages/ShopPage/ShopPage";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/products/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<DetailPage />} />
          <Route path="/shopping" element={<ShopPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
