import { useState, useEffect } from 'react';

import api from '../services/api';

export default function useInCartItems() {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    api
      .get('cartProducts')
      .then((res) => {
        const { products } = res.data;

        if (products.length > 0) {
          setInCart(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return inCart;
}
