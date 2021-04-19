import "./Navbar.css"
import React from 'react'


export const NavBar = () => {
  return (
    <div className="navBar">
      <header className="topNav">
        <img src={""} alt={"logo"} />
        <p className="titleNav">Tornillos & Fijaciones</p>
        <nav className="navigation">
          <ul className="links">
            <li className="link">
              <a href="">Home</a>
            </li>
            <li className="link">
              <a href="">Productos</a>
            </li>
            <li className="link">
              <a href="">Nosotros</a>
            </li>
            <li className="link">
              <a href="">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

