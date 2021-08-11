import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";



function ItemDetail({
  item,
  id,
  name,
  image,
  description,
  stock,
  initial,
  price,
}) {

  // Este estado lo voy a usar para ir chequeando la cantidad de productos
  const [count, setCount] = useState(0);
  //count = initial
  
  // Si el contador es menor que el stock, cuando el usuario hace click agrego 1
  function add() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  
  // Si el contador es mayor que el inicial, cuando el usuario hace click le resto 1
  function substract() {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  return (
    <div className="itemDetail">
      <div>
        <div>
          <img
            component="img"
            alt={name}
            height="300"
            src={image}
            title={name}
          />
          <div>
            <h3>{name}</h3>
            <h5>
              {description} por tan solo ${price}
            </h5>
          </div>
        </div>
      </div>
      <div>
        <ItemCount
          initial={initial}
          stock={stock}
          add={add}
          substract={substract}
          item={name}
          counter={count}
          id={id}
          price={price}
          image={image}
        />
      </div>
    </div>
  );
}

export default ItemDetail;
