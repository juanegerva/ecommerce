import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    nombre: "Infantería",
    precio: "10",
    imagen: "https://picsum.photos/seed/picsum/200/300",
    description: "Alto soldado",
    stock: 3,
    initial: 1,
    categoryId: "infanteria",
  },
  {
    id: 2,
    nombre: "Arquero",
    precio: "20",
    imagen: "https://picsum.photos/seed/picsum/200/300",
    description: "Alto Arquero",
    stock: 5,
    initial: 2,
    categoryId: "arqueria",
  },
  {
    id: 3,
    nombre: "Caballería",
    precio: "30",
    imagen: "https://picsum.photos/seed/picsum/200/300",
    description: "Alto Caballero",
    stock: 6,
    initial: 1,
    categoryId: "caballeria",
  },
];




function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { id } = useParams();

  
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(function () {
        const i = products.find((products) => products.id == id);
        resolve(i);
      }, 3000);
    });
    promesa.then((result) => setItem(result));
    promesa.catch((err) => console.log("Algo salio mal"));
  }, [id]);

  return (
    <div className="itemDetailContainer">
      {item ? (
        <ItemDetail
          id={item.id}
          name={item.nombre}
          price={item.precio}
          image={item.imagen}
          description={item.description}
          stock={item.stock}
          initial={item.initial}
        />
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}

export default ItemDetailContainer;
