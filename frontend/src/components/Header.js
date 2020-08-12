import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  const [menuSelected, setMenuSelected] = useState(0);

  return (
    <header>
      <h1>
        <Link id="link" value="inicio" to="/">
          Painel de controle
        </Link>
      </h1>
      <nav className="menu-top">
        <ul>
          <li>
            <Link id="link" value="inicio" to="/">
              Início
            </Link>
          </li>
          <li>
            <Link id="link" value="contadores" to="/contadores">
              Contadores
            </Link>
          </li>
          <li>
            <Link id="link" value="relatorios" to="/relatorios">
              Relatórios
            </Link>
          </li>
          <li>
            <Link id="link" value="clima" to="/clima">
              Clima
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
