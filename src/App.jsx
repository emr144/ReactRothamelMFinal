import React from "react";
import { Routes, Route } from "react-router-dom";
import {createFirebaseApp} from "./data/configFirebase";
// Componentes principales

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import ProductList from "./components/ItemListContainer/ProductList";
// Páginas
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  createFirebaseApp()
  // Inicializa Firebase
  return (
    <ErrorBoundary>
      <Navbar />     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
