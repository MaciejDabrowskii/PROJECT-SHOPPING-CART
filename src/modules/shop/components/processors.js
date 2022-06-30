/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";

function Processors(props)
{
  return (
    <div className="processors-container">
      {props.data.Processors.map((processor) => (
        <div
          className="processor-card card"
          key={processor.id}
          data-id={processor.id}
          data-group="Processors"
        >
          <h3 className="processor-title">{processor.name}</h3>
          <img
            src={processor.imgURL}
            alt={processor.name}
            className="processor-img"
          />
          <ul className="processor-properties">
            <li>
              Family:
              {" "}
              {processor.family}
            </li>
            <li>
              Brand:
              {" "}
              {processor.brand}
            </li>
            <li>
              Clock:
              {" "}
              {processor.frequency}
            </li>
            <li>
              Cores:
              {" "}
              {processor.cores}
            </li>
            <li>
              Price:
              {" "}
              {processor.price}
              {" "}
              $
            </li>
          </ul>
          <form>
            <input
              type="number"
              id="item-quantinity-input"
              value={processor.quantinity}
              data-id={processor.id}
              data-group="Processors"
              onChange={props.onChange}
            />
            <button
              type="button"
              data-id={processor.id}
              data-group="Processors"
              onClick={props.incrementQuantinity}
            >
              +
            </button>
            <button
              type="button"
              data-id={processor.id}
              data-group="Processors"
              onClick={props.decrementQuantinity}
            >
              -
            </button>
          </form>
          <button
            type="button"
            data-id={processor.id}
            data-group="Processors"
            onClick={props.addToCart}
          >
            add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Processors;
