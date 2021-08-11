import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import firebase from "firebase/app";

function Cart() {
  // Traigo las funciones de Cart y de ClearCart del contexto
  const { cart, clearCart, total } = useContext(CartContext);
  // Uso este estado para mostrar el formulario
  const [openPay, setOpenPay] = useState(false);
  // Estos estados me van a servir para guardar la información del formulario
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function submitOrder(e) {
    e.preventDefault();
    console.log(name);
    const db = firestore;
    const orders = db.collection("orders");

    const order = {
      buyer: { name: name, phone: phone, email: email },
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: total,
    };

    orders
      .add(order)
      .then(({ id }) => alert(`Anotá el id de tu compra ${id}`))
      .then(clearCart)
      .then(setOpenPay(false))
      .catch((error) => alert(`no funciona ${error}`));
  }

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
          cart.map((items) => (
            <CartItem
              key={items.id}
              id={items.id}
              name={items.name}
              image={items.image}
              price={items.price}
              amount={items.amount}
            />
          ))}
      </div>

      {cart.length > 0 && (
        <>
          <h2>Total ${total}</h2>
          <div className="cartItems__buttons">
            <button onClick={clearCart}>Vaciar carrito</button>
            <button
              onClick={() => {
                setOpenPay(true);
              }}
            >
              PAGAR
            </button>
          </div>
        </>
      )}

      {openPay && (
        <form noValidate autoComplete="off">
          <input
            id="standard-basic"
            label="Name"
            placeholder="Ingrese su nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="standard-basic"
            label="Telephone"
            placeholder="Ingrese su telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            id="standard-basic"
            label="Email"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={submitOrder}>completar orden</button>
        </form>
      )}
    </div>
  );
}

export default Cart;
