import React, { useState } from 'react';
import { Character } from '../../caracterModel';
import Card from '../Card/Card';
import ModalCard from '../ModalCard/modalCard';
import '../../styles/CardList.css';
import { useAppSelector } from '../../redux/hooks';

const CardList = () => {
  const characters: Character[] = useAppSelector((state) => state.searchResults.searchResults);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModalCard = () => {
    setIsModalVisible(true);
  };

  const closeModalCard = () => {
    setIsModalVisible(false);
  };

  const setCharacter = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <section>
      <div className="cardlist__block">
        {characters &&
          characters.map((character: Character) => {
            return (
              <div key={character.id}>
                <Card
                  character={character}
                  openModalCard={openModalCard}
                  setCharacter={setCharacter}
                />
              </div>
            );
          })}
        {isModalVisible && (
          <ModalCard
            closeModalCard={closeModalCard}
            character={selectedCharacter}
            isModalVisible={isModalVisible}
          />
        )}
      </div>
    </section>
  );
};

export default CardList;
