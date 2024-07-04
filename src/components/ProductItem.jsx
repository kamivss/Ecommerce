import React from 'react';
import './ProductItem.css';

const ProductItem = ({ img, titulo, avaliaçao, comentarios, Preco }) => {
  return (
    <div className="product-item">
      <img src={img} alt={titulo} />
      <h2>{titulo}</h2>
      <div className="rating">
        {avaliaçao}
        {comentarios}
      </div>
      <p className="price">R$ {Preco}</p>
    </div>
  );
};

export default ProductItem;
