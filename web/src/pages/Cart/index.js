import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Display from '../../components/Display';
import Loading from '../../components/Loading';

import useInCartItems from '../../hooks/useInCartItems';

import './styles.css';
import api from '../../services/api';

export default function Cart() {
  const page = 'cart';
  const [productsInCart, setProductsInCart] = useState([]);
  const haveItems = useInCartItems();

  useEffect(() => {
    document.title = 'Ziro - Seu Carrinho';
    listProducts();
  }, []);

  function listProducts() {
    api
      .get('cartProducts')
      .then((res) => {
        const { products } = res.data;

        setProductsInCart(products);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container" id="page-cart">
      <Header notification={haveItems} />

      <div className="content">
        <div className="cart">
          <h1>Seu carrinho</h1>

          {productsInCart.length == 0 ? (
            <div className="loading-container">
              <Loading />
            </div>
          ) : (
            <Display
              products={productsInCart}
              page={page}
              listProducts={listProducts}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
