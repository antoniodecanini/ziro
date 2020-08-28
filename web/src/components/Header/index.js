import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';

import './styles.css';
import CartNotification from '../CartNotification';

export default function Header(props) {
  const [filter, setFilter] = useState('');

  function searchProduct() {
    props.filter(filter);
  }

  return (
    <header className="page-header">
      <div className="header-content">
        <Link to="/" className="logo" onClick={props.index}>
          <strong>ZIRO</strong>
        </Link>

        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar produtos"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button onClick={searchProduct} to="/">
            <p className="search-txt">Procurar</p>
            <AiOutlineSearch className="search-icon" />
          </button>
        </div>

        <Link to="/cart" className="cart-container">
          <GiShoppingCart className="cart-icon" />
          {props.notification ? <CartNotification /> : null}
        </Link>
      </div>
    </header>
  );
}
