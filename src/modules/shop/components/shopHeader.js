/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/logos/logo_transparent.png";

function ShopHeader(props)
{
  return (
    <div className="shop-header-container">
      <div className="shop-header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="shop-header-shopCart-container">
        <div className="shop-header-shopCart-icon"><FontAwesomeIcon icon={faCartShopping} className="shopping-cart-indicator-icon" /></div>
        <div className="shop-header-shopCart-number-indicator">{props.cartItemsNumber}</div>
        <div className="shop-header-shopCart-value-indicator">
          {props.cartValue}
          $
        </div>
      </div>
    </div>
  );
}

export default ShopHeader;
  <div className="shop-header-logo-container" />;
