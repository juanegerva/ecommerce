import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 

  
  useEffect(() => {
    const url = "https://api.mercadolibre.com/sites/MLA/search?q=tornillo";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setItem(response.results);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (id) {
      const category = item.filter((product) => product.categoryId == id);
      setItem(category);
    } else {
      setItem(item);
    }
  }, [id, item]);

  

  return (
     <div className="itemListContainer">
      <h2>Hola</h2>
      {loading ? <h2>Cargando...</h2> : <ItemDetail products={item}  />}
    </div>
   
  );
}

export default ItemDetailContainer;
