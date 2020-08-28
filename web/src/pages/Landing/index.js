import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Display from '../../components/Display';
import Loading from '../../components/Loading';

import useInCartItems from '../../hooks/useInCartItems';
import api from '../../services/api';

import './styles.css';

function Landing() {
  const page = 'landing';
  const [productsList, setProductsList] = useState([]);
  const haveItems = useInCartItems();

  useEffect(() => {
    document.title = 'Ziro - Nossos produtos';
    indexProducts();
  }, []);

  function indexProducts() {
    api
      .get('indexProducts')
      .then((res) => {
        const { products } = res.data;

        setProductsList(products);
      })
      .catch((err) => console.log(err));
  }

  function productsFilter(value) {
    api
      .get(`searchProducts?name=${value}`)
      .then((res) => {
        const { products } = res.data;
        setProductsList(products);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id="page-landing">
      <Header
        filter={productsFilter}
        index={indexProducts}
        notification={haveItems}
      />

      <div className="content">
        <div className="products">
          <h1>Nossos produtos</h1>

          {productsList.length == 0 ? (
            <div className="loading-container">
              <Loading />
            </div>
          ) : (
            <Display products={productsList} page={page} />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Landing;
