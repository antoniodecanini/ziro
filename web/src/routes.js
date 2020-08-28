import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/cart" component={Cart} />
    </BrowserRouter>
  );
}
