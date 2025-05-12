import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { carrito } = useCart();

  return (
    <div>
      <h2>Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {carrito.map((item) => (
            <li key={item.id}>
              {item.title} - Cantidad: {item.cantidad}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;