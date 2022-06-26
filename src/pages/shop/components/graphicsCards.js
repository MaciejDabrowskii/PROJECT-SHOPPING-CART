/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";

function GraphicsCards(props)
{
  return (
    <div className="grapics-cards-container">
      {props.data["Graphics Cards"].map((card) => (
        <div
          className="grapic-card"
          key={card.id}
          data-id={card.id}
          data-group="Graphics Cards"
        >
          <h3 className="grapic-card-title">{card.name}</h3>
          <img
            src={card.imgURL}
            alt={card.name}
            className="grapic-card-img"
          />
          <ul className="grapic-card-properties">
            <li>
              Producer:
              {" "}
              {card.gpuProducer}
            </li>
            <li>
              GPU:
              {" "}
              {card.gpu}
            </li>
            <li>
              Brand:
              {" "}
              {card.brand}
            </li>
            <li>
              GPU Clock:
              {" "}
              {card.coreClock}
            </li>
            <li>
              Memory Clock:
              {" "}
              {card.memoryClock}
            </li>
            <li>
              Memory:
              {" "}
              {card.memory}
              {" "}
              Gb
            </li>
            <li>
              Price:
              {" "}
              {card.price}
              {" "}
              $
            </li>
          </ul>
          <form>
            <label htmlFor="item-quantinity-input">
              Quantinity:
              <input
                type="number"
                id="item-quantinity-input"
                value={card.quantinity}
                data-id={card.id}
                data-group="Graphics Cards"
                onChange={props.onChange}
              />
            </label>
            <button
              type="button"
              data-id={card.id}
              data-group="Graphics Cards"
              onClick={props.incrementQuantinity}
            >
              +

            </button>
            <button
              type="button"
              data-id={card.id}
              data-group="Graphics Cards"
              onClick={props.decrementQuantinity}
            >
              -

            </button>
          </form>
          <button
            type="button"
            data-id={card.id}
            data-group="Graphics Cards"
            onClick={props.addToCart}
          >
            add to cart

          </button>
        </div>
      ))}
    </div>
  );
}

export default GraphicsCards;
