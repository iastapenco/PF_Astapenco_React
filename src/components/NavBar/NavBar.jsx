import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import "./navbar.css";
function NavBar() {
  return (
    <nav className="navegacion">
      <ul className="lista_navegacion">
        <Link className="anchor" to="/">
          <Logo />
        </Link>
        <Link className="anchor" to="/">
          Inicio
        </Link>
        <Link className="anchor" to="/products/cafe">
          Café
        </Link>
        <Link className="anchor" to="/products/accesorios">
          Accesorios
        </Link>
        <Link className="anchor" to="/shopping">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
