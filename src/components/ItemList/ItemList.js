import Item from '../Item/Item';



function ItemList( { products }) {

    return (
      <div className="itemList">
        {products.map((product) => (
          <Item id={product.id} name={product.title} image={product.thumbnail} stock={product.sold_quantity}/>
        ))}
       
      </div>
    );
}

export default ItemList