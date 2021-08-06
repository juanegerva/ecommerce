import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase/firebase";



function ItemDetailContainer() {
 
  
  const [fireItem, setFireItem] = useState([]);

  const { id } = useParams();
 
  

  useEffect(() => {
    const db = firestore;

    const collection = db.collection("items");
    const query = collection.get();
    query
      .then((result) => {
        setFireItem(result.docs.map((p) => ({ id: p.id, ...p.data()})));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);



let resultado = []
fireItem.forEach(function (items) {
  if (items.id == id) {
  console.log(items);
  resultado = items;
} 
  console.log(items.id);
});



  return (
    <div className="itemDetailContainer">
      {fireItem ? (
        <ItemDetail
          item={resultado.item}
          id={resultado.id} 
          name={resultado.name}
          price={resultado.price}
          image={resultado.image}
          description={resultado.description}
          stock={resultado.stock}
          initial={resultado.initial}
        />
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}     

export default ItemDetailContainer;
