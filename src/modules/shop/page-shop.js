/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import GraphicsCards from "./components/graphicsCards";
import Motherboards from "./components/motherboards";
import Processors from "./components/processors";
import ShopHeader from "./components/shopHeader";
import NavBar from "../navigation/navbar";

function Shop()
{
  const [dataItems, setDataItems] = useState(data);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemsNumber, setCartItemsNumber] = useState(0);

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
    <div className="shop-container">
      <ShopHeader
        cartItemsNumber={cartItemsNumber}
        cartValue={totalPrice}
      />
      <NavBar />
      <div className="shop-items-container">
        <GraphicsCards
          data={dataItems}
          incrementQuantinity={incrementQuantinity}
          decrementQuantinity={decrementQuantinity}
          onChange={onQuantinityInput}
          addToCart={addToCart}
        />
        <Motherboards
          data={dataItems}
          incrementQuantinity={incrementQuantinity}
          decrementQuantinity={decrementQuantinity}
          onChange={onQuantinityInput}
          addToCart={addToCart}
        />
        <Processors
          data={dataItems}
          incrementQuantinity={incrementQuantinity}
          decrementQuantinity={decrementQuantinity}
          onChange={onQuantinityInput}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
}
export default Shop;
