import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  const [menuSelected, setMenuSelected] = useState(0);

  // function handleClick() {
  //   var get = document.URL;
  //   if(get.match(/)){

  //   }
  // }

  return (
    <header>
      <h1>
        <Link
          id="link"
          value="inicio"
          to="/"
          // onClick={(e) => handleClick(e.target)}
        >
          Painel de controle
        </Link>
      </h1>
      <nav className="menu-top">
        <ul>
          <li>
            <Link
              id="link"
              value="inicio"
              to="/"
              // onClick={(e) => handleClick(e.target)}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              id="link"
              value="contadores"
              to="/contadores"
              // onClick={(e) => handleClick(e.target)}
            >
              Contadores
            </Link>
          </li>
          <li>
            <Link
              id="link"
              value="relatorios"
              to="/relatorios"
              // onClick={(e) => handleClick(e.target)}
            >
              Relatórios
            </Link>
          </li>
          <li>
            <Link
              id="link"
              value="clima"
              to="/clima"
              // onClick={(e) => handleClick(e.target)}
            >
              Clima
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
