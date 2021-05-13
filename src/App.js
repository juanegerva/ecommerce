import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from "./components/CartContext/CartContext";
import Cart from "./components/Cart/Cart";

//Esto lo podría tener en un archivo aparte también.
const products = [
  {
    id: 1,
    name: "bULON",
    price: "10",
    image: "https://picsum.photos/id/237/200/300",
    description: "ZINCADO",
    stock: 10,
    initial: 1,
    categoryId: "BULONES",
  },
  {
    id: 2,
    name: "TUERCA",
    price: "20",
    image: "https://picsum.photos/seed/picsum/200/300",
    description: "PASO WHITWORTH",
    stock: 20,
    initial: 1,
    categoryId: "TUERCA",
  },
  {
    id: 3,
    name: "ARANDELA",
    price: "30",
    image: "https://picsum.photos/200/300?grayscale",
    description: "ARANDELA PLANA",
    stock: 15,
    initial: 1,
    categoryId: "ARANDELA",
  },
];

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
  
    const promesa = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(products);
      }, 2000);
    });
   
    promesa.then((result) => setItems(result));
    promesa.catch((err) => console.log("Algo salio mal"));
  }, []);

  return (
    <div className="app">
      {/* Envuelvo toda mi app en mi provider para poder tomar los datos en cualquier componente */}
      <CartProvider>
        {/* Toda la app la envuelvo en BrowserRouter */}
        <BrowserRouter>
          {/* Navbar la dejo fuera del Switch porque quiero que siempre esté, sin importar la ruta */}
          <NavBar />

          <Switch>

            <Route exact path="/">
              <ItemListContainer greeting="Tornillos & fijaciones" products={items} />
            </Route>


            <Route exact path="/category/:id">
              <ItemListContainer greeting="Tornillos & fijaciones" products={items} />
            </Route>

            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
