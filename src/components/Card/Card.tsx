import React from 'react';
import { Sneaker } from '../../App';
import '../../styles/Card.css';

class Card extends React.Component<{ item: Sneaker }> {
  render() {
    return (
      <div className="card">
        <div className="card__favorite">
          <img src="img/liked.svg" alt="Liked item" />
        </div>
        <img width="133" height="112" src={this.props.item.imageUrl} alt="Sneakers" />
        <h4>{this.props.item.title}</h4>
        <div className="card__bottom">
          <div className="card__bottom-price">
            <span>Price:</span>
            <b>{this.props.item.price}$</b>
          </div>
          <button className="card__bottom-button" type="button">
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
