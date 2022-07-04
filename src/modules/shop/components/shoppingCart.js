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
  faAngleLeft, faAngleRight, faTrash, faPlus, faMinus, faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";
import formatter from "../../utilities/foramtter";

function ShoppingCart(props)
{
  const incrementQuantinity = (element) =>
  {
    const { id } = element;
    props.setShoppingCart(props.shoppingCart.map((item) =>
    {
      if (item.id === id)
      {
        return { ...item, quantinity: item.quantinity + 1 };
      }
      return item;
    }));
  };

  const decrementQuantinity = (element) =>
  {
    const { id } = element;
    props.setShoppingCart(props.shoppingCart.map((item) =>
    {
      if (item.id === id && item.quantinity > 1)
      {
        return { ...item, quantinity: item.quantinity - 1 };
      }
      return item;
    }));
  };

  const removeFromCart = (element) =>
  {
    const { id } = element;
    props.setShoppingCart([...props.shoppingCart]
      .filter((cartItem) => cartItem.id !== id));
  };

  return (
    <div className="shoppingCart">
      <button
        type="button"
        className="shoppingCart-container-btn-back"
        onClick={() =>
        {
          props.setShowCart(!props.showCart);
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
        {" "}
        Shop
      </button>
      <div className="shoppingCart-container">
        <div className="shoppingCart-items-container">
          <h3>YOUR SHOPPING CART:</h3>
          <div className="shoppingCart-items">
            {props.shoppingCart.map((item) => (
              <div
                className="shoppingCart-item-card"
                key={item.id}
              >
                <img
                  src={item.imgURL}
                  alt={item.name}
                  className="shoppingCart-item-img"
                />

                <div className="shoppingCart-item-info">
                  {" "}
                  <p className="shoppingCart-item-title">{item.Name}</p>
                  <form>
                    <div className="shoppingCart-item-price">
                      {formatter.format(item.price)}
                    </div>
                    <button
                      type="button"
                      className="shoppingCart-item-info-btn"
                      onClick={() =>
                      {
                        incrementQuantinity(item);
                      }}
                    >
                      <FontAwesomeIcon icon={faPlus} className="shoppingCart-item-info-btn-icon" />
                    </button>
                    <div className="shoppingCart-quantinity-indicator">{item.quantinity}</div>
                    <button
                      type="button"
                      className="shoppingCart-item-info-btn"
                      onClick={() =>
                      {
                        decrementQuantinity(item);
                      }}
                    >
                      <FontAwesomeIcon icon={faMinus} className="shoppingCart-item-info-btn-icon" />
                    </button>
                    <button
                      type="button"
                      className="shoppingCart-item-info-btn"
                      onClick={() =>
                      {
                        removeFromCart(item);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} className="shoppingCart-item-info-btn-icon" />
                    </button>
                  </form>
                </div>
              </div>
            ))}
            {props.cartValue !== 0 && (
            <div className="shoppingCart-total">
              Total:
              {" "}
              {formatter.format(props.cartValue)}
            </div>
            )}
            {props.cartValue === 0 && (
            <h3
              className="shoppingCart-items-container-empty"
            >
              CART EMPTY
              {" "}
              <FontAwesomeIcon
                icon={faHeartCrack}
                style={{
                  color: "#28cc9e",
                  marginLeft: 10,
                  fontSize: 30,

                }}
              />
            </h3>
            )}
          </div>
          <div className="shoppingCart-container-footer" />
        </div>
      </div>
      <button type="button" className="shoppingCart-container-btn-checkout">
        Checkout
        {" "}
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default ShoppingCart;
