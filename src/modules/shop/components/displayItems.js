/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";

function DisplayItems(props)
{
  return (
    <div className="items-container">
      {props.data[props.group].map((item) => (
        <div
          className="item-card card"
          key={item.id}
          data-id={item.id}
          data-group={`${props.group}`}
        >
          <h3 className="item-title">{item.name}</h3>
          <img
            src={item.imgURL}
            alt={item.name}
            className="item-img"
          />
          <ul className="item-properties">
            {Object.keys(item)
              .map((key) =>
              {
                if (!(key.match("id|quantinity|imgURL|price")))
                {
                  return (
                    <li key={uniqid()}>
                      {key}
                      :
                      {" "}
                      {item[key]}
                    </li>
                  );
                }
              })}
          </ul>
          <div className="item-price">
            {item.price}
            {" "}
            $
          </div>
          <form>

            <button
              type="button"
              data-id={item.id}
              data-group={`${props.group}`}
              onClick={props.incrementQuantinity}
            >
              +
            </button>
            <input
              type="number"
              id="item-quantinity-input"
              value={item.quantinity}
              data-id={item.id}
              data-group={`${props.group}`}
              onChange={props.onChange}
            />
            <button
              type="button"
              data-id={item.id}
              data-group={`${props.group}`}
              onClick={props.decrementQuantinity}
            >
              -
            </button>
            <button
              type="button"
              data-id={item.id}
              data-group={`${props.group}`}
              onClick={props.addToCart}
            >
              add to cart
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default DisplayItems;
