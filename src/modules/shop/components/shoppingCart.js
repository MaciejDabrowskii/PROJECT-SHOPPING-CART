/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { setState, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft, faAngleRight, faTrash, faPlus, faMinus, faHeartCrack, faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import uniqid from "uniqid";
import formatter from "../../utilities/foramtter";

function ShoppingCart(props)
{
  const active = {
    maxHeigth: "max-heigth",
    transition: "max-height 0.25s ease-in",
  };

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
                className={item.expand ? "shoppingCart-item-card expanded" : "shoppingCart-item-card"}
                key={item.id}
                onClick={(e) =>
                {
                  props.setExpand(e, item);
                }}
              >
                <img
                  src={item.imgURL}
                  alt={item.name}
                  className="shoppingCart-item-img"
                />

                <div className="shoppingCart-item-info">
                  {" "}
                  <div className="shoppingCart-item-title">{item.Name}</div>
                  <ul
                    className={item.expand ? "shoppingCart-item-card-additional-info fa-ul expanded" : "shoppingCart-item-card-additional-info fa-ul"}
                  >
                    {Object.keys(item)
                      .map((key) =>
                      {
                        if (!(key.match("id|quantinity|imgURL|price|Name|expand")))
                        {
                          return (
                            <li
                              key={uniqid()}
                              className="item-properties-li"
                            >
                              <span className="fa-li list-marker">
                                <FontAwesomeIcon
                                  icon={faCheckSquare}
                                  className="fa-regular fa-square"
                                />
                              </span>

                              {key}
                              :
                              {" "}
                              {item[key]}
                            </li>
                          );
                        }
                      })}
                  </ul>
                  <form
                    className="shoppingCart-item-form"
                  >
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
