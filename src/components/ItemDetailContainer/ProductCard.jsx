import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import Boton from '../Button/Botones';


const ProductCard = ({ id, title, price, image, category }) => {
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCart(); // Obtener la función para agregar productos

  const handleVer = () => {
    navigate(`/producto/${id}`);
  };

  const handleAgregar = () => {
    const producto = { id, title, price, image, category, cantidad: 1 }; // Estructura del producto
    agregarAlCarrito(producto); // Agregar al carrito global
    alert(`Producto agregado al carrito: ${title}`);
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p className="product-category">{category}</p>
      <p><strong>${price}</strong></p>

      <div className="button-group">
        <Boton text="Ver" onClick={handleVer} className="btn-ver" />
        <Boton text="Agregar al carrito" onClick={handleAgregar} className="btn-agregar" />
      </div>
    </div>
  );
};

export default ProductCard;