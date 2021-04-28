import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({greeting}){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const url = "https://api.mercadolibre.com/sites/MLA/search?q=tornillo";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setItems(response.results);
        setLoading(false);
        console.log(response);
      });
  }, []);

 

  return (
    <div className="itemListContainer">
      <h2>{greeting}</h2>
      {loading ? <h2>Cargando...</h2> : <ItemList products={items} />}
    </div>
  );





}

export default ItemListContainer;


