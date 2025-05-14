import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../../context/CartContext"; // 🔹 Importamos el contexto del carrito
import "../../Styles/components/cartwidget.css";

function CartWidget() {
  const { carrito } = useCart(); // 🔹 Obtenemos el estado del carrito

  // 🔹 Calculamos el total de productos en el carrito
  const totalProductos = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Link to="/carrito" className="cart-widget">
      🛒 <span className="cart-count">{totalProductos}</span>
    </Link>
  );
}

export default CartWidget;