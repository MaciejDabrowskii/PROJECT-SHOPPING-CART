/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";

function GraphicsCards(props)
{
  return (
    <div className="grapics-cards-container">
      {props.data["Graphics Cards"].map((card) => (
        <div className="grapic-card" key={card.id} data-id={card.id}>
          <h3 className="grapic-card-title">{card.name}</h3>
          <img src={card.imgURL} alt={card.name} className="grapic-card-img" />
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
        </div>
      ))}
    </div>
  );
}

export default GraphicsCards;
