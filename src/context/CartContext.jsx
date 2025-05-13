import React from 'react';
import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = useCallback((producto) => {
    setCarrito((prevCarrito) => {
      const existeProducto = prevCarrito.find((item) => item.id === producto.id);
      return existeProducto
        ? prevCarrito.map((item) =>
            item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
          )
        : [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  }, []);

  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.reduce((nuevoCarrito, item) => {
        if (item.id === id) {
          if (item.cantidad > 1) {
            nuevoCarrito.push({ ...item, cantidad: item.cantidad - 1 });
          }
        } else {
          nuevoCarrito.push(item);
        }
        return nuevoCarrito;
      }, [])
    );
  };

  return (
    <CartContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, eliminarProducto }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);