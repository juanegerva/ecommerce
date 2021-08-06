import React from "react";
import "./Navbar.css";
import logo from "./NavBarLogo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

// Preparo las categorías para mapearlas en el navbar. El categoryId me va a permitir la navegación
// por parámetros. El nombre lo voy a usar para mostrarlo en pantalla
const categories = [
  {
    categoryId: "BULONES",
    name: "BULON",
  },
  {
    categoryId: "TUERCA",
    name: "TUERCA",
  },
  {
    categoryId: "ARANDELA",
    name: "ARANDELA",
  },
  {
    categoryId: "AUTOPERFORANTE",
    name: "HEXAGONAL MECHA",
  },
];

function Navbar() {
  return (
    <div className="navBar">
      <div className="topNav">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            width={100}
          />
        </Link>
      </div>
      <div className="link">
       
        {categories.map((category) => (
          <Link to={`/category/${category.categoryId}`}>
            <p>{category.name}</p>
          </Link>
        ))}
        <p>NOSOTROS</p>
        <p>CONTACTO</p>

        <div className="navbar__cart">
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
