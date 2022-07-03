/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import formatter from "../../utilities/foramtter";

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
                if (!(key.match("id|quantinity|imgURL|price|name")))
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
            {formatter.format(item.price)}
          </div>
          <form className="item-card-form">

            <button
              type="button"
              className="item-card-form-btn"
              data-id={item.id}
              data-group={`${props.group}`}
              onClick={props.incrementQuantinity}
            >
              <FontAwesomeIcon
                className="item-card-btn-icon"
                icon={faPlus}
              />
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
              className="item-card-form-btn"
              data-group={`${props.group}`}
              onClick={props.decrementQuantinity}
            >
              <FontAwesomeIcon
                className="item-card-btn-icon"
                icon={faMinus}
              />
            </button>
            <button
              type="button"
              data-id={item.id}
              className="item-card-form-btn item-card-form-btn-add"
              data-group={`${props.group}`}
              onClick={props.addToCart}
            >
              <FontAwesomeIcon
                className="item-card-btn-icon"
                icon={faCartPlus}
              />
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default DisplayItems;
