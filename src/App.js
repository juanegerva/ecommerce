import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartProvider from "./components/CartContext/CartContext";
import Cart from "./components/Cart/Cart";
import { firestore } from "./firebase/firebase";


function App() {
  const [ fireItems, setFireItems ] = useState([])

 useEffect(() => {
   const db = firestore;
   
   const collection = db.collection("items");
   const query = collection.get();
   query
     .then((result) => {
       setFireItems(result.docs.map((p) => ({ id: p.id, ...p.data() })));
     })
     .catch((error) => {
       console.log(error);
     });
 }, []);
  

  return (
    <div className="app">
      {/* Envuelvo toda mi app en mi provider para poder tomar los datos en cualquier componente */}
      <CartProvider>
        {/* Toda la app la envuelvo en BrowserRouter */}
        <BrowserRouter>
          {/* Navbar la dejo fuera del Switch porque quiero que siempre esté, sin importar la ruta */}
          <NavBar/>

          <Switch>
            <Route exact path="/">
              <ItemListContainer
                greeting="Tornillos & fijaciones"
                products={fireItems}
              />
            </Route>

            <Route exact path="/category/:id">
              <ItemListContainer
                greeting="Tornillos & fijaciones"
                products={fireItems}
              />
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
