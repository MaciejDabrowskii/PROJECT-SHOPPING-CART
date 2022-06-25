/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import GraphicsCards from "./components/graphicsCards";

function Shop()
{
  const [dataItems, setDataItems] = useState(data);
  const [shoppingCart, setShoppingCart] = useState([]);

  //   cart functions
  const addToCart = (item) =>
  {
    setShoppingCart([...shoppingCart].push(item));
  };

  // cart item data structure:
  // {
  //     price:,
  //     quantinity:,
  //     data: {}
  // }

  const removeFromCart = (item) =>
  {
    setShoppingCart([...shoppingCart].map((cartItem) =>
    {
      if (cartItem.data.id !== item.id)
      {
        return cartItem;
      }
    }));
  };

  //   router

  return (
    <div className="shop-container">
      <GraphicsCards data={dataItems} />
    </div>
  );
}
export default Shop;
