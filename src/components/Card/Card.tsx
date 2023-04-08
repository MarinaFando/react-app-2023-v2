import React from 'react';
import { Character } from '../../caracterModel';
import '../../styles/Card.css';

interface CardProps {
  character: Character;
  openModalCard: () => void;
  setCharacter: (character: Character) => void;
}

const Card = ({ character, openModalCard, setCharacter }: CardProps) => {
  const { image, name, species, status, gender } = character;

  const onSetCard = () => {
    setCharacter(character);
    openModalCard();
  };

  return (
    <div className="card" onClick={onSetCard}>
      <img width="200" src={image} alt="Character" />
      <h2>{name}</h2>
      <div className="card__bottom">
        <div>
          <ul className="card__bottom-info">
            <li>Species: {species}</li>
            <li>Status: {status}</li>
            <li>Gender: {gender}</li>
          </ul>
        </div>
        <button className="card__bottom-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
