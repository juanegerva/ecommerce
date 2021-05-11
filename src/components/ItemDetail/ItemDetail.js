import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ products, name, image, description, stock, initial, price }) {
  
 

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <div style={{ width: "20rem" }}>
          <img
            variant="top"
            src={products.thumbnail}
            style={{ width: "20rem", height: "15rem" }}
          />
          <div>
            hola
            <h3>{products}</h3>
            <h5>{description}</h5>
            <h4>{price}</h4>
          </div>
        </div>
      </div>
      <div>
        <ItemCount initial={initial} stock={stock}/>
      </div>
    </div>
  );
}

export default ItemDetail;
