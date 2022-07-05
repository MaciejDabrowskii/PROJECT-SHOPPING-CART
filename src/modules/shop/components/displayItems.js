/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus, faPlus, faMinus, faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import formatter from "../../utilities/foramtter";

function DisplayItems(props)
{
  return (
    <div className="items-container">
      {props.data[props.group].map((item) => (
        <div
          className="item-card card"
          key={item.id}
        >
          <h3 className="item-title">{item.Name}</h3>
          <img
            src={item.imgURL}
            alt={item.name}
            className="item-img"
          />
          <ul className="item-properties fa-ul">
            {Object.keys(item)
              .map((key) =>
              {
                if (!(key.match("id|quantinity|imgURL|price|Name")))
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
          <div className="item-price">
            {formatter.format(item.price)}
          </div>
          <form className="item-card-form">

            <button
              type="button"
              className="item-card-form-btn"
              data-testid="button-increment"
              onClick={() =>
              {
                props.incrementQuantinity(item, props.group);
              }}
            >
              <FontAwesomeIcon
                className="item-card-btn-icon"
                icon={faPlus}
              />
            </button>
            <input
              type="number"
              min={1}
              step={1}
              id="item-quantinity-input"
              data-testid="item-quantinity-input"
              value={item.quantinity}
              onClick={(e) =>
              {
                e.target.value = "";
              }}
              onChange={(e) =>
              {
                props.onQuantinityInput(e, item, props.group);
              }}
            />
            <button
              type="button"
              className="item-card-form-btn"
              data-testid="button-decrement"
              onClick={() =>
              {
                props.decrementQuantinity(item, props.group);
              }}
            >
              <FontAwesomeIcon
                className="item-card-btn-icon"
                icon={faMinus}
              />
            </button>
            <button
              type="button"
              className="item-card-form-btn item-card-form-btn-add"
              data-testid="button-add-item"
              onClick={() =>
              {
                props.addToCart(item, props.group);
              }}
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
