import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

function ItemCount({ item, id, add, substract, counter,price, image}) {
  
  const [open, setOpen] = useState(false);
  const { addToCart } = useContext(CartContext);

  // Uno las funciones de agregar al carrito con la de mostrar el "Terminar compra"
  function addAndOpen(item, counter, id,price,image) {
   
    addToCart(item, counter, id,price, image);
    setOpen(true);
  }
  return (
    <div className="itemCount">
      <div className="itemCount__counter">
        <button onClick={substract}>
          -
        </button>
        <h3>{counter}</h3>
        <button  onClick={add}>
          +
        </button>
      </div>
      {/* Si open es false, que se muestre Agregar al Carrito, pero si es true, Terminar la compra*/}
      {!open ? (
        <div className="itemCount__agregar">
          <button
            onClick={() => addAndOpen(item, counter, id,price, image)}
          >
            <h3>
              Agregar al carrito{" "} 
            </h3>
          </button>
        </div>
      ) : (
        <div>
          <Link to="/cart">
            <button>
              <h3>Terminar la compra</h3>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ItemCount;
