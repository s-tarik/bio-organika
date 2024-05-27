import React from 'react';
import './Produits.css'

const Produits = ({ products }) => {
  return (
   <div>
      <h2>Produits</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.name} className="product-item">
            {/* <img src={product.image} alt={product.name} /> */}
            <img src="https://via.placeholder.com/150" alt="" />
            <p>{product.name}</p>
            <p>{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Produits;