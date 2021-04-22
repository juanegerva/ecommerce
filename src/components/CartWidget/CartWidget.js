import "./CartWidget.css"
import cartIcon from "./cartIcon.svg";

export const CartWidget = () => {
  
  return (
    <div className="cartWidget">
      
          <div>
              <img style={{width:30}} src={cartIcon} alt="CartIcon"/>
              <p>{}</p>
          </div>
    </div>
  );
}