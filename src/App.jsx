import React from "react";
import { Routes, Route } from "react-router-dom";

// Componentes principales
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

// Páginas
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import OrdenDeCompra from "./pages/OrdenDeCompra";


function App() {
  return (
    <ErrorBoundary>
      <Navbar />     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/orden" element={<OrdenDeCompra />} />
      </Routes>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;