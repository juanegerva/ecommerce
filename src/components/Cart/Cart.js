import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  // Traigo las funciones de Cart y de ClearCart del contexto
  const { cart, clearCart, total } = useContext(CartContext);

  // Rendereo condicional para mostrar los productos o que vaya a comprar
  return (
    <div className="cart">
      {cart.length > 0 ? (
        <h1>Dale, compra!</h1>
      ) : (
        <>
          <h1>Aún no elegiste tus productos</h1>
          <Link to={"/"}>
            <button onClick={clearCart} variant="contained" color="primary">
              Llevame a los productos
            </button>
          </Link>
        </>
      )}

      <div className="cartItems">
        {cart.length > 0 &&
          cart.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              amount={product.amount}
            />
          ))}
      </div>

      {cart.length > 0 && (
        <>
          <h2>${total}</h2>
          <div className="cartItems__buttons">
            <button onClick={clearCart}>
              Vaciar carrito
            </button>
            <button
              onClick={() => {
                console.log(cart);
              }}
             
            >
              PAGAR
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
