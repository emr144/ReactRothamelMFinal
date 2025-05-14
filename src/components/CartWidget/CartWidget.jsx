import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../../context/CartContext";
import "../../Styles/components/cartwidget.css";

function CartWidget() {
  const { cart } = useCart(); // Usa 'cart' si así se llama en tu contexto

  // Asegúrate de que cart siempre sea un array antes de usar reduce
  const totalProductos = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + (item.quantity || 0), 0)
    : 0;

  return (
    <Link to="/carrito" className="cart-widget">
      🛒 <span className="cart-count">{totalProductos}</span>
    </Link>
  );
}

export default CartWidget;