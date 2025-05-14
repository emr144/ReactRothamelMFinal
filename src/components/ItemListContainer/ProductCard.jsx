import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import Boton from "../Button/Botones";

// Componente ProductCard que representa una tarjeta de producto
const ProductCard = ({ id, title, price, image, category, description }) => {
  const navigate = useNavigate();
  const { agregarUnidad } = useCart();

  // Función para redirigir al detalle del producto
  const handleVer = () => {
    navigate(`/producto/${id}`);
  };

  // Función para agregar el producto al carrito
  const handleAgregar = () => {
    agregarUnidad({ id, title, price, image, category, description });
  };

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