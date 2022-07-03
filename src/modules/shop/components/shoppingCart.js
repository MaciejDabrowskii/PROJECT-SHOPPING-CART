/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft, faAngleRight, faTrash, faPlus, faMinus,
} from "@fortawesome/free-solid-svg-icons";

import formatter from "../../utilities/foramtter";

function ShoppingCart(props)
{
  const onClick = () =>
  {
    props.setShowCart(!props.showCart);
    console.log(props.showCart, "clicked");
  };

  const incrementQuantinity = (e) =>
  {
    const { id } = e.target.dataset;
    props.setShoppingCart(props.shoppingCart.map((item) =>
    {
      if (item.id === id)
      {
        return { ...item, quantinity: item.quantinity + 1 };
      }
      return item;
    }));
  };

  const decrementQuantinity = (e) =>
  {
    const { id } = e.target.dataset;
    props.setShoppingCart(props.shoppingCart.map((item) =>
    {
      if (item.id === id && item.quantinity > 1)
      {
        return { ...item, quantinity: item.quantinity - 1 };
      }
      return item;
    }));
  };

  return (
    <div className="shoppingCart">
      <button
        type="button"
        className="shoppingCart-container-btn-back"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        {" "}
        Shop
      </button>
      <div className="shoppingCart-container">
        <div className="shoppingCart-items-container">
          <h3>Your Shopping Cart:</h3>
          <div className="shoppingCart-items">
            {props.shoppingCart.map((item) => (
              <div
                className="shoppingCart-item-card"
                key={item.id}
                data-id={item.id}
              >
                <img
                  src={item.imgURL}
                  alt={item.name}
                  className="shoppingCart-item-img"
                />

                <div className="shoppingCart-item-info">
                  {" "}
                  <p className="shoppingCart-item-title">{item.name}</p>
                  <form>
                    <div className="shoppingCart-item-price">
                      {formatter.format(item.price)}
                    </div>
                    <button
                      type="button"
                      className="shoppingCart-item-info-btn"
                      data-id={item.id}
                      onClick={incrementQuantinity}
                    >
                      <FontAwesomeIcon icon={faPlus} className="shoppingCart-item-info-btn-icon" />
                    </button>
                    <div className="shoppingCart-quantinity-indicator">{item.quantinity}</div>
                    <button
                      type="button"
                      className="shoppingCart-item-info-btn"
                      data-id={item.id}
                      onClick={decrementQuantinity}
                    >
                      <FontAwesomeIcon icon={faMinus} className="shoppingCart-item-info-btn-icon" />
                    </button>
                    <button
                      type="button"
                      className="shoppingCart-item-info-btn"
                      data-id={item.id}
                      onClick={props.removeFromCart}
                    >
                      <FontAwesomeIcon icon={faTrash} className="shoppingCart-item-info-btn-icon" />
                    </button>
                  </form>
                </div>
              </div>
            ))}
            <div className="shoppingCart-total">
              Total:
              {" "}
              {formatter.format(props.cartValue)}
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="shoppingCart-container-btn-back">
        Checkout
        {" "}
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default ShoppingCart;
