import "./CartWidget.css"
import cartIcon from "./cartIcon.svg";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";



function CartWidget() {
  const { quantity } = useContext(CartContext);

  return (
    <div className="cartWidget">
      {quantity > 0 && (
        <>
          <img style={{ width: 30 }} src={cartIcon} alt="CartIcon" />
          <h4>{quantity}</h4>
        </>
      )}
    </div>
  );
}

export default CartWidget;