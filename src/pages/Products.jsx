import React, { useEffect, useState } from "react";
import ProductCard from "../components/ItemDetailContainer/ProductCard";
import "../Styles/components/products.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/configFirebase";

const Products = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(productList);
        setLoading(false);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="products-page">
      <h1>Productos disponibles</h1>
      <div className="product-list">
        {productos.map(producto => (
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