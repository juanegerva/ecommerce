import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer({greeting}){


  return (
    <div className="itemListContainer">
      <h1>{greeting}</h1>
      <ItemCount initial={1} stock={10} />
    </div>
  );
}

export default ItemListContainer;


