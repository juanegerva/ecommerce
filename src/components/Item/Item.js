import ItemCount from '../ItemCount/ItemCount';

const Item = ({ id, name, image, stock }) => {
  return (
    <div style={{ textAlign: "center" }}>
      
        <div style={{ width: "20rem" }}>
          <img
            variant="top"
            src={image}
            style={{ width: "20rem", height: "15rem" }}
          />
          <div>
            <h3>{name}</h3>
            <h5>{id}</h5>
            <footer>
              <ItemCount initial={1} stock={stock}/>
              <p>{stock}</p>
            </footer>
          </div>
        </div>
      
    </div>
  );
};

export default Item;
