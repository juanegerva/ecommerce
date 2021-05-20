import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase/firebase";

/*
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
];*/

function ItemDetailContainer() {
  // const [ item, setItem ] = useState()
  
  const [fireItem, setFireItem] = useState();

  const { id } = useParams();

  /*useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(function () {
        const i = products.find((product) => product.id === parseInt(id));
        resolve(i);
      }, 2000);
    });
    promesa.then((result) => setItem(result));
    promesa.catch((err) => console.log("Algo salio mal"));
  }, [id]);*/

  useEffect(() => {
    const db = firestore;
    const collection = db.collection("items");
    const item = collection.doc(id);

    item.get().then((i) => {
      setFireItem({ id: i.id, ...i.data() });
    });
  }, [id, fireItem]);

  return (
    <div className="itemDetailContainer">
      {fireItem ? (
        <ItemDetail
          item={fireItem.item}
          id={fireItem.id}
          name={fireItem.name}
          price={fireItem.price}
          image={fireItem.image}
          description={fireItem.description}
          stock={fireItem.stock}
          initial={fireItem.initial}
        />
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}     

export default ItemDetailContainer;
