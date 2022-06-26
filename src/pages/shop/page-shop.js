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

function Shop()
{
  const [dataItems, setDataItems] = useState(data);
  const [shoppingCart, setShoppingCart] = useState([]);

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

    console.log(shoppingCart);
  };

  // cart item data structure:
  // {
  //     price:,
  //     quantinity:,
  //     data: {}
  // }

  const removeFromCart = (e) =>
  {
    setShoppingCart([...shoppingCart]
      .filter((cartItem) => cartItem.id !== e.target.parentElement.dataset.id));
  };

  //   router

  return (
    <div className="shop-container">
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
    </div>
  );
}
export default Shop;
