import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/productos';
import "../Styles/components/productdetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="product-detail">
      <h1>{producto.title}</h1>
      <img src={producto.image} alt={producto.title} />
      <p>{producto.description}</p>
      <p><strong>Categoría:</strong> {producto.category}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
    </div>
  );
};

export default ProductDetail;
