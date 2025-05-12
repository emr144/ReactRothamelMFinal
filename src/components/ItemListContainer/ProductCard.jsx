import React from 'react';
import { useNavigate } from 'react-router-dom';
import Boton from '../Button/Botones';
import { useCart } from '../context/CartContext'; 


// Componente ProductCard que representa una tarjeta de producto
const ProductCard = ({ id, title, price, image, category, description }) => {
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCart();
    console.log("¿Existe agregarAlCarrito?", agregarAlCarrito);

  const handleVer = () => {
    navigate(`/producto/${id}`);
  };

  // Función para agregar el producto al carrito
  const handleAgregar = () => {
    console.log("¡Click detectado en Agregar!");
    agregarAlCarrito({ id, title, price, image, category, description });
  };
  console.log("handleAgregar definido:", handleAgregar);

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p><strong>${price}</strong></p>
      <div className="button-group">
        <Boton text="Ver" onClick={handleVer} className="btn-ver" />
        <Boton text="Agregar al carrito" onClick={handleAgregar} className="btn-agregar" />
      </div>
    </div>
  );
};

export default ProductCard;


   

