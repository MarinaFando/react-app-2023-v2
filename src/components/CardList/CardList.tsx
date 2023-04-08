import React from 'react';
import { Character } from '../../caracterModel';
import Card from '../Card/Card';
import '../../styles/CardList.css';

const CardList = ({characters}: Character[]) => {
  return (
    <section>
      <div className="cardlist__block">
        {characters.map((character: Character) => {
          return <Card key={character.id} {...character} />;
        })}
      </div>
    </section>
  );
};

export default CardList;
