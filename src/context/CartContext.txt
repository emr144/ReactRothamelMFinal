import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // 🔹 Agregar producto al carrito (+1 unidad o agregar nuevo)
  const agregarUnidad = (producto) => {
    if (!producto || !producto.id) {
      console.error("Error: Producto inválido en agregarUnidad", producto);
      return;
    }

    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((item) => item.id === producto.id);

      return productoExistente
        ? prevCarrito.map((item) =>
            item.id === producto.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          )
        : [...prevCarrito, { ...producto, cantidad: 1 }];
    });
  };

  // 🔹 Reducir cantidad (-1 unidad, pero sin eliminar completamente)
  const reducirUnidad = (id) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id && item.cantidad > 1 ? { ...item, cantidad: item.cantidad - 1 } : item
      )
    );
  };

  // 🔹 Eliminar producto completamente (botón "X")
  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ carrito, agregarUnidad, reducirUnidad, eliminarProducto }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
