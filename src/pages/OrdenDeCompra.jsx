import React from "react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import "../Styles/components/cart.css";
import { db } from "../data/configFirebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const OrdenDeCompra = () => {
  const { cart } = useCart(); // Cambiado de 'carrito' a 'cart'
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  // Asegúrate de que cart siempre sea un array
  const total = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0)
    : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear el objeto de la orden
    const orden = {
      nombre,
      email,
      items: cart.map(item => ({
        id: item.id,
        title: item.title,
        cantidad: item.quantity,
        price: item.price
      })),
      total,
      fecha: Timestamp.now()
    };

    // Guardar en Firestore
    await addDoc(collection(db, "ordenes"), orden);

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
        {Array.isArray(cart) && cart.map((item) => (
          <li key={item.id}>
            {item.title} x {item.quantity} = ${item.price * item.quantity}
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