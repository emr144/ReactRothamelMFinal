import React from "react";
import { useCart } from "../context/CartContext";
import '../Styles/components/cart.css';
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { carrito, setCarrito } = useCart();
  const navigate = useNavigate();

  // 🗑️ Función para eliminar productos del carrito
  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  // 📦 Calcular el total general del carrito
  const totalCarrito = useMemo(() => {
    return carrito.reduce((total, item) => total + item.price * item.cantidad, 0);
  }, [carrito]);

  // Navegar a la página de medios de pago
  const irAMediosDePago = () => {
    navigate("/medios-de-pago");
  };

  return (
    <div className="cart-page">
      <h2>Carrito de compras</h2>

      {carrito.length === 0 ? (
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
            {carrito.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.cantidad}</td>
                <td>${item.price}</td>
                <td>${item.cantidad * item.price}</td>
                <td>
                  <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {carrito.length > 0 && (
        <>
          <h3>Total: ${totalCarrito}</h3>
          <button className="pago-btn" onClick={irAMediosDePago}>
            Ir a medios de pago
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;