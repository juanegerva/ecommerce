import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

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

function ItemDetailContainer() {
    const [ item, setItem ] = useState()

    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
            const i = products.find(product => product.id === parseInt(id))
            resolve(i); 
        }, 2000);
        }
        )
        promesa.then(result => setItem(result)) 
        promesa.catch(err => console.log("Algo salio mal")) 

    },  [id]);

    return (
        <div className="itemDetailContainer">
           
            { item ?
            <ItemDetail
             item={item}
             id={item.id}
             name={item.name}     
             price={item.price}
             image={item.image}
             description={item.description}
             stock={item.stock}
             initial={item.initial}
             />
             :
             <h2>Loading</h2>}
        </div>
    )
}     

export default ItemDetailContainer;
