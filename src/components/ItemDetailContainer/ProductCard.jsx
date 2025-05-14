import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Boton from '../Button/Botones';

const ProductCard = ({ id, title, price, image, category }) => {
  const { cart, addToCart, incrementarCantidad } = useCart();

  const handleAgregar = () => {
    const existe = cart.find(item => item.id === id);
    if (existe) {
      incrementarCantidad(id);
    } else {
      addToCart({ id, title, price, image, category }, 1);
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Categoría: {category}</p>
      <p>Precio: ${price}</p>
      <div className="button-group">
        <Link to={`/productdetail/${id}`}>
          <Boton text="Ver" className="btn-ver" />
        </Link>
        <Boton text="Agregar al carrito" onClick={handleAgregar} className="btn-agregar" />
      </div>
    </div>
  );
};

export default ProductCard;