import React from 'react';
import { Sneaker } from '../../App';
import Card from '../Card/Card';
import '../../styles/CardList.css';

interface CardListProps {
  items: Sneaker[];
  searchValue: string;
}

const CardList = ({ items, searchValue }: CardListProps) => {
  return (
    <section>
      <div className="cardlist__block">
        {items.map((item) => {
          return (
            item.title.toLowerCase().includes(searchValue.toLowerCase()) && (
              <Card key={item.id} item={item} />
            )
          );
        })}
      </div>
    </section>
  );
};

export default CardList;
