/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ShoppingCartIndicator(props)
{
  const onClick = () =>
  {
    props.setShowCart(!props.showCart);
  };
  return (
    <div className="shopCart-container" onClick={onClick}>
      <div className="shopCart-icon"><FontAwesomeIcon icon={faCartShopping} className="shopping-cart-indicator-icon" /></div>
      <div className="shopCart-number-indicator">{props.cartItemsNumber}</div>
      <div className="shopCart-value-indicator">
        {props.cartValue}
        $
      </div>
    </div>

  );
}

export default ShoppingCartIndicator;
  <div className="shop-header-logo-container" />;
