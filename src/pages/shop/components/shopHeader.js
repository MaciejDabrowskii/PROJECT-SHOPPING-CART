/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
function ShopHeader(props)
{
  return (
    <div className="shop-header-container">
      <div className="shop-header-logo">Super Shop</div>
      <div className="shop-header-shopCart-container">
        <div className="shop-header-shopCart-icon">ICON</div>
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
