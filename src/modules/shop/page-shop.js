/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import data from "../../data/data.json";
import ShoppingCartIndicator from "./components/shopCartIndicator";
import NavBar from "../navigation/navbar";
import DisplayItems from "./components/displayItems";
import ShoppingCart from "./components/shoppingCart";
import logo from "../../assets/logos/logo_transparent.png";

function Shop()
{
  const [dataItems, setDataItems] = useState(data);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const [showCart, setShowCart] = useState(false);

  // quantinity
  const incrementQuantinity = (item, group) =>
  {
    const { id } = item;
    setDataItems(
      {
        ...dataItems,
        [group]: dataItems[group].map((el) => (el.id === id ? { ...el, quantinity: el.quantinity + 1 } : el)),
      },
    );
  };

  const decrementQuantinity = (item, group) =>
  {
    const { id } = item;
    setDataItems(
      {
        ...dataItems,
        [group]: dataItems[group].map((el) => ((el.id === id && el.quantinity > 1) ? { ...el, quantinity: el.quantinity - 1 } : el)),
      },
    );
  };

  const onQuantinityInput = (e, item, group) =>
  {
    const { id } = item;

    const inputValue = e.target.value;
    setDataItems(
      {
        ...dataItems,
        [group]: dataItems[group].map((el) => (el.id === id ? { ...el, quantinity: Math.round(Number(inputValue)) } : el)),
      },
    );
  };

  // cart functions
  const addToCart = (element, group) =>
  {
    const { id } = element;

    const item = dataItems[group].find((el) => el.id === id);
    shoppingCart.some((el) => el.id === id)
      ? setShoppingCart(shoppingCart.map((el) => (el.id === id ? { ...el, quantinity: el.quantinity + item.quantinity } : el)))
      : setShoppingCart([...shoppingCart, item]);
    setDataItems({
      ...dataItems,
      [group]: dataItems[group].map((el) => ((el.id === id) ? { ...el, quantinity: 1 } : el)),
    });
  };

  const updateCart = () =>
  {
    setTotalPrice(shoppingCart.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantinity), 0));
    setCartItemsNumber(shoppingCart.reduce((sum, cartItem) => sum + cartItem.quantinity, 0));
  };

  useEffect(() =>
  {
    updateCart();
  }, [shoppingCart]);

  // other

  const onClickGit = () =>
  {
    window
      .open("https://github.com/MaciejDabrowskii?tab=repositories", "_blank")
      .focus();
  };

  return (
    <div
      className="shop-container"
    >
      <div className="shop-header">

        <div className="shop-header-logo-container">
          <img src={logo} alt="logo" className="shop-header-logo" />
        </div>
        <ShoppingCartIndicator
          cartItemsNumber={cartItemsNumber}
          cartValue={totalPrice}
          setShowCart={setShowCart}
          showCart={showCart}
        />
        <NavBar />
      </div>
      {showCart
      && (
      <ShoppingCart
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        cartValue={totalPrice}
        setShowCart={setShowCart}
        showCart={showCart}
      />
      )}
      {!showCart
      && (

        <div
          className="shop-items-container"

        >
          <DisplayItems
            data={dataItems}
            group="Processors"
            incrementQuantinity={incrementQuantinity}
            decrementQuantinity={decrementQuantinity}
            onQuantinityInput={onQuantinityInput}
            addToCart={addToCart}
          />
          <DisplayItems
            data={dataItems}
            group="Graphics Cards"
            incrementQuantinity={incrementQuantinity}
            decrementQuantinity={decrementQuantinity}
            onQuantinityInput={onQuantinityInput}
            addToCart={addToCart}
          />
          <DisplayItems
            data={dataItems}
            group="Motherboards"
            incrementQuantinity={incrementQuantinity}
            decrementQuantinity={decrementQuantinity}
            onQuantinityInput={onQuantinityInput}
            addToCart={addToCart}
          />
        </div>
      )}
      <FontAwesomeIcon
        icon={faGithub}
        className="fa-solid git-icon"
        onClick={onClickGit}
      />
    </div>
  );
}
export default Shop;
