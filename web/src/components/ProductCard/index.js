import React, { useState, useEffect } from 'react';

import Loading from '../Loading';

import api from '../../services/api';

import './styles.css';

export default function ProductCard({ product, page, listProducts }) {
  const [button, setButton] = useState();

  useEffect(() => {
    if (product.inCart && page == 'cart') {
      setButton(
        <button className="buy remove" onClick={handleRemoveCart}>
          Remover
        </button>
      );
    }

    if (product.inCart && page == 'landing') {
      setButton(<p className="txt-in-cart">Oba!!! Já Está no carrinho</p>);
    }

    if (!product.inCart) {
      setButton(
        <button className="buy" onClick={handleAddCart}>
          Comprar
        </button>
      );
    }
  }, []);

  function handleAddCart() {
    setButton(<Loading />);
    api
      .post(
        'addToCart',
        JSON.stringify({
          id: product._id,
        })
      )
      .then(() => {
        setButton(<p className="txt-in-cart">Oba!!! Já Está no carrinho</p>);
      })
      .catch((err) => console.log(err));
  }

  function handleRemoveCart() {
    api
      .post(
        'removeFromCart',
        JSON.stringify({
          id: product._id,
        })
      )
      .then(() => {
        listProducts();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="card">
      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="content">
        <h3>{product.name}</h3>
        <h2 className="price">R$ {product.price}</h2>
        {button}
      </div>
    </div>
  );
}
