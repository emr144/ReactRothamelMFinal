import  { useState } from 'react';
import ProductCard from '../ItemDetailContainer/ProductCard';

// Componente ProductList para mostrar una lista de productos con un selector de categorías
const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('todas');

  // Obtener las categorías únicas de los productos
  const categories = ['todas', ...new Set(products.map(product => product.category))];

  // Filtrar los productos según la categoría seleccionada
  const filteredProducts =
    selectedCategory === 'todas'
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-list-container">
      {/* Selector de categorías */}
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
        className="category-selector"
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Lista de productos */}
      <div className="product-list">
        {filteredProducts.map(({ description, ...product }) => (
          <ProductCard key={product.id} {...product} />

          
        ))}
      </div>
    </div>
  );
};

export default ProductList;
