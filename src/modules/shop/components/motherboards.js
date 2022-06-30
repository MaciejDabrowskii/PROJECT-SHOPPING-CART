/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";

function Motherboards(props)
{
  return (
    <div className="motherboards-container">
      {props.data.Motherboards.map((motherboard) => (
        <div
          className="motherboard-card card"
          key={motherboard.id}
          data-id={motherboard.id}
          data-group="Motherboards"
        >
          <h3 className="motherboard-title">{motherboard.name}</h3>
          <img
            src={motherboard.imgURL}
            alt={motherboard.name}
            className="motherboard-img"
          />
          <ul className="motherboard-properties">
            <li>
              Producer:
              {" "}
              {motherboard.gpuProducer}
            </li>
            <li>
              GPU:
              {" "}
              {motherboard.gpu}
            </li>
            <li>
              Brand:
              {" "}
              {motherboard.brand}
            </li>
            <li>
              GPU Clock:
              {" "}
              {motherboard.coreClock}
            </li>
            <li>
              Memory Clock:
              {" "}
              {motherboard.memoryClock}
            </li>
            <li>
              Memory:
              {" "}
              {motherboard.memory}
              {" "}
              Gb
            </li>
            <li>
              Price:
              {" "}
              {motherboard.price}
              {" "}
              $
            </li>
          </ul>
          <form>
            <input
              type="number"
              id="item-quantinity-input"
              value={motherboard.quantinity}
              data-id={motherboard.id}
              data-group="Motherboards"
              onChange={props.onChange}
            />

            <button
              type="button"
              data-id={motherboard.id}
              data-group="Motherboards"
              onClick={props.incrementQuantinity}
            >
              +
            </button>
            <button
              type="button"
              data-id={motherboard.id}
              data-group="Motherboards"
              onClick={props.decrementQuantinity}
            >
              -
            </button>
            <button
              type="button"
              data-id={motherboard.id}
              data-group="Motherboards"
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

export default Motherboards;
