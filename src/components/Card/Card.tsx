import React from 'react';
import { Sneaker } from '../../App';
import '../../styles/Card.css';

const Card = ({ title, price, imageUrl }: Sneaker) => {
  return (
    <div className="card">
      <div className="card__favorite">
        <img src="img/liked.svg" alt="Liked item" />
      </div>
      <img width="133" height="112" src={imageUrl} alt="Sneakers" />
      <h4>{title}</h4>
      <div className="card__bottom">
        <div className="card__bottom-price">
          <span>Price:</span>
          <b>{price}$</b>
        </div>
        <button className="card__bottom-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
