import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "../Styles/components/cart.css";

const OrdenDeCompra = () => {
  const { carrito } = useCart();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const total = carrito.reduce(
    (acc, item) => acc + (item.price || 0) * (item.cantidad || 0),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías enviar la orden a Firebase o mostrar un mensaje de éxito
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="cart-page">
        <h2>¡Gracias por tu compra!</h2>
        <p>Te enviaremos un correo a <strong>{email}</strong> con los detalles.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Orden de Compra</h2>
      <h3>Resumen del carrito:</h3>
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            {item.title} x {item.cantidad} = ${item.price * item.cantidad}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>
      <form onSubmit={handleSubmit} style={{ marginTop: "2rem", width: "100%", maxWidth: 400 }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", borderRadius: 6, border: "1px solid #ccc" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem", borderRadius: 6, border: "1px solid #ccc" }}
          />
        </div>
        <button type="submit" className="pago-btn">
          Confirmar compra
        </button>
      </form>
    </div>
  );
};

export default OrdenDeCompra;