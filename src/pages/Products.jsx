import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ItemDetailContainer/ProductCard'; // Importa ProductCard
import productosData from '../data/productos'; 
import "../Styles/components/products.css";

const Products = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos carga asincrónica
    const fetchProductos = () => {
      setTimeout(() => {
        setProductos(productosData);
        setLoading(false);
      }, 500); // pequeño retraso para simular carga
    };

    fetchProductos();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="products-page">
      <h1>Productos disponibles</h1>
      <div className="product-list">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image}
            category={producto.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
