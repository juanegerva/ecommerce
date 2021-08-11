import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";


function CartItem({ id, name, image, price, amount }) {
  const { eliminateFromCart } = useContext(CartContext);
  

  return (
    <div className="cartItem">
      <div className="cartItem__title">
        <h3>{name}</h3>
      </div>
      <div className="cartItem__image">
        <img src={image} alt={name} />
      </div>
      <div className="price">
        <h3>${price}</h3>
      </div>
      <div className="amount">
        <h3>{amount}</h3>
      </div>
      <div className="parcial">
        <h3>${amount * price}</h3>
      </div>
      <button
        onClick={() => eliminateFromCart(id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default CartItem;
