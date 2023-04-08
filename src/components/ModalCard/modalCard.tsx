import React from 'react';
import { Character } from '../../caracterModel';
import '../../styles/ModalCard.css';

interface ModalCardProps {
  character: Character | null;
  isModalVisible: boolean;
  closeModalCard: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ModalCard = ({ character, isModalVisible, closeModalCard }: ModalCardProps) => {
  const { image, name, status, species, type, gender, episode, url } = character;
  return (
    <>
      <div
        className={isModalVisible ? 'modal display__block' : 'modal display__none'}
        onClick={closeModalCard}
      />
      {character && (
        <div className="modal__main">
          <img src={image} />
          <ul className="modal__main-list">
            <li>
              <b>Name: </b>
              {name}
            </li>
            <li>
              <b>Status: </b>
              {status}
            </li>
            <li>
              <b>Species: </b>
              {species}
            </li>
            <li>
              <b>Type: </b>
              {type || '-'}
            </li>
            <li>
              <b>Gender: </b>
              {gender}
            </li>
            <li className="episodes">
              <b>Episodes: </b>
              {episode.map((item, index) => (
                <div className="episode" key={Date.now() + index}>
                  {item.split('/').slice(-1)}
                </div>
              ))}
            </li>
            <li>
              <b>URL: </b>
              {url}
            </li>
          </ul>
          <img src="img/close-icon.svg" onClick={closeModalCard} height="20px" alt="close window" />
        </div>
      )}
    </>
  );
};

export default ModalCard;
