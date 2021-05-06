import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd}) => {
  const [counter, setCounter] = useState(initial);


  const decremento = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const incremento = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const cantidadAgregada = () => {
      counter !== 0 ? onAdd(counter) : console.log("no hay stock");
  }

  return (
    <div style={{ textAlign: "center"}}>
      <button onClick={decremento}>
        -
      </button>
      <button className=""> {counter} </button>
      <button className="" onClick={incremento}>
        +
      </button>
      <div>
        <button className="" onClick={cantidadAgregada}>
          AGREGAR
        </button>
      </div>
    </div>
  );
};

export default ItemCount;