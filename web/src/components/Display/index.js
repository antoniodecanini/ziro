import React from 'react';

import ProductCard from '../ProductCard';

import './styles.css';

export default function Display({ products, page, listProducts }) {
  return (
    <div className="display">
      <div className="cards">
        {products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              page={page}
              listProducts={listProducts}
            />
          );
        })}
      </div>
    </div>
  );
}
