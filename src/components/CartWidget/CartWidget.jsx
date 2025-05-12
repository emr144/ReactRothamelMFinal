import { Link } from 'react-router-dom';
import React from 'react';

function CartWidget() {
  return (
    <Link to="/carrito" className="cart-widget">
      🛒
    </Link>
  );
}

export default CartWidget;
