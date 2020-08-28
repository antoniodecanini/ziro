import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import './styles.css';

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <p>
          Desenvolvido por Antonio Decanini &copy; Todos os direitos reservados
        </p>

        <div className="social">
          <FaInstagram className="social-icons" />
          <FaFacebook className="social-icons" />
        </div>
      </div>
    </footer>
  );
}
