/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState, useRef } from "react";
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

  const shopContainer = useRef(null);
  const mainShopContainer = useRef(null);

  // quantinity
  const incrementQuantinity = (e) =>
  {
    const { id, group } = e.target.dataset;
    setDataItems(
      {
        ...dataItems,
        [group]: dataItems[group].map((el) => (el.id === id ? { ...el, quantinity: el.quantinity + 1 } : el)),
      },
    );
  };

  const decrementQuantinity = (e) =>
  {
    const { id, group } = e.target.dataset;
    setDataItems(
      {
        ...dataItems,
        [group]: dataItems[group].map((el) => ((el.id === id && el.quantinity > 1) ? { ...el, quantinity: el.quantinity - 1 } : el)),
      },
    );
  };

  const onQuantinityInput = (e) =>
  {
    const { id, group } = e.target.dataset;
    const inputValue = e.target.value.replace(/[^\d]/, "");
    (inputValue > 0) ? setDataItems(
      {
        ...dataItems,
        [group]: dataItems[group].map((el) => (el.id === id ? { ...el, quantinity: Number(inputValue) } : el)),
      },
    ) : e.target.value = 1;
  };

  //   cart functions
  const addToCart = (e) =>
  {
    const { id, group } = e.target.dataset;

    const item = dataItems[group].find((el) => el.id === id);
    shoppingCart.some((el) => el.id === id)
      ? setShoppingCart(shoppingCart.map((el) => (el.id === id ? { ...el, quantinity: el.quantinity + item.quantinity } : el)))
      : setShoppingCart([...shoppingCart, item]);
    setDataItems({
      ...dataItems,
      [group]: dataItems[group].map((el) => ((el.id === id) ? { ...el, quantinity: 1 } : el)),
    });
    console.log(shoppingCart);
  };

  const removeFromCart = (e) =>
  {
    setShoppingCart([...shoppingCart]
      .filter((cartItem) => cartItem.id !== e.target.dataset.id));
  };

  const updateCart = (e) =>
  {
    setTotalPrice(shoppingCart.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantinity), 0));
    setCartItemsNumber(shoppingCart.reduce((sum, cartItem) => sum + cartItem.quantinity, 0));
  };

  useEffect(() =>
  {
    updateCart();
  }, [shoppingCart]);

  //   router

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
        removeFromCart={removeFromCart}
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
            onChange={onQuantinityInput}
            addToCart={addToCart}
          />
          <DisplayItems
            data={dataItems}
            group="Graphics Cards"
            incrementQuantinity={incrementQuantinity}
            decrementQuantinity={decrementQuantinity}
            onChange={onQuantinityInput}
            addToCart={addToCart}
          />
          <DisplayItems
            data={dataItems}
            group="Motherboards"
            incrementQuantinity={incrementQuantinity}
            decrementQuantinity={decrementQuantinity}
            onChange={onQuantinityInput}
            addToCart={addToCart}
          />
        </div>
      )}
    </div>
  );
}
export default Shop;
