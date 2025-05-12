import React from 'react';
import { useNavigate } from 'react-router-dom';
import Boton from '../Button/Botones';

const ProductCard = ({ id, title, price, image, category }) => {
  const navigate = useNavigate();

  // Validar props para evitar errores
  if (!id || !title || !price || !image || !category) {
    return <div>Información del producto no disponible</div>;
  }

  const handleVer = () => {
    navigate(`/producto/${id}`);
  };

  const handleAgregar = () => {
    alert(`Producto agregado al carrito: ${title}`);
    // Aquí luego puedes integrar lógica real de carrito
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