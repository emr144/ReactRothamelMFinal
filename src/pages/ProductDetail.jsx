import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/configFirebase";
import "../Styles/components/productdetail.css"; 
import Boton from "../components/Button/Botones"; 
import { useCart } from "../context/CartContext"; // 🔹 Cambio importante

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { agregarUnidad } = useCart(); // 🔹 Obtén la función del contexto

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          setProducto(null);
        }
      } catch (error) {
        console.error("Error obteniendo producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Cargando producto...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const handleAgregar = () => {
    const productoAgregado = { 
      id: producto.id, 
      title: producto.title, 
      price: producto.price, 
      image: producto.image, 
      category: producto.category, 
      cantidad: 1 
    };

    agregarUnidad(productoAgregado);
    alert(`Producto agregado al carrito: ${producto.title}`);
  };

  return (
    <div className="product-detail">
      <h1>{producto.title}</h1>
      <img src={producto.image} alt={producto.title} />
      <p>{producto.description}</p>
      <p><strong>Categoría:</strong> {producto.category}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
      
      <div className="button-group">
        <Boton text="Volver" onClick={() => navigate("/productos")} className="btn-volver" />
        <Boton text="Agregar al carrito" onClick={handleAgregar} className="btn-agregar" />
      </div>
    </div>
  );
};

export default ProductDetail;