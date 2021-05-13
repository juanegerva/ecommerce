import React from "react";
import { Link } from "react-router-dom";


function Item({ id, name, image }) {
 

  // Con los datos que me envía ItemList voy a mostrar el item.
  return (
    <div className="item">
      <div>
        <div>
          <img
            component="img"
            height="300"
            src={image}
            title={name}
          />
          <div>
            <h3 >
              {name}
            </h3>
          </div>
        </div>
        <div>
          <button >
            <Link to={"/item/" + id}> Conocer Mas</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
