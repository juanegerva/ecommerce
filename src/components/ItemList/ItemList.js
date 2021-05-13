import React from "react";
import Item from "../Item/Item";


function ItemList({ products }) {
  return (
    <div className="itemList">

      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ItemList;
