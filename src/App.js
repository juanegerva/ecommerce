<<<<<<< HEAD
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
  

=======
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import Home from './pages/Home'
import ItemDetailContainer from './pages/ItemDetailContainer'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

function App() {
>>>>>>> d3e067e6dc0f639a8982894b7277f02c4b40f372
  return (
    <div>
      <CartContext>
        <BrowserRouter>
<<<<<<< HEAD
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
=======
          <Navbar logo={'./logo.svg'}/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/category/:categoryID">
                <Home/>
              </Route>
              <Route path="/item/:productId">
                <ItemDetailContainer/>
              </Route>
              <Route path="/cart">
                <Cart/>
              </Route>
            </Switch>
          </div>
>>>>>>> d3e067e6dc0f639a8982894b7277f02c4b40f372
        </BrowserRouter>
      </CartContext>
    </div>
  )
}

export default App
