import React, { useMemo } from "react";
import { useCart } from "../context/CartContext";
import "../Styles/components/cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, incrementarCantidad, decrementarCantidad, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calcular el total general del carrito evitando NaN
  const totalCarrito = useMemo(() => {
    return cart.reduce((total, item) => total + (item.price || 0) * (item.quantity || 0), 0);
  }, [cart]);

  return (
    <div className="cart-page">
      <h2>Carrito de compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  <button onClick={() => decrementarCantidad(item.id)}>-</button>
                  <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                  <button onClick={() => incrementarCantidad(item.id)}>+</button>
                </td>
                <td>${item.price || 0}</td>
                <td>${(item.quantity || 0) * (item.price || 0)}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cart.length > 0 && (
        <>
          <h3>Total: ${totalCarrito}</h3>
          <button
            className="pago-btn"
            onClick={() => navigate("/orden")}
          >
            Ordenar pedido
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;