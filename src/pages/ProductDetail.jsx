import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../data/configFirebase";
import "../Styles/components/productdetail.css";
import Boton from "../components/Button/Botones";
import { useCart } from "../context/CartContext";
import Swal from 'sweetalert2';

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { cart, addToCart, incrementarCantidad } = useCart();

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
    const existe = cart.find(item => item.id === producto.id);
    if (existe) {
      incrementarCantidad(producto.id);
    } else {
      addToCart({
        id: producto.id,
        title: producto.title,
        price: producto.price,
        image: producto.image,
        category: producto.category
      }, 1);
    }
    Swal.fire({
      icon: 'success',
      title: '¡Producto agregado al carrito!',
      showConfirmButton: false,
      timer: 1200
    });
  
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