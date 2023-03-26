import React from 'react';
import { Sneaker } from '../../App';
import Card from '../Card/Card';
import '../../styles/CardList.css';

interface CardListProps {
  items: Sneaker[];
  searchValue: string;
}

class CardList extends React.Component<CardListProps> {
  render() {
    return (
      <section>
        <div className="cardlist__block">
          {this.props.items.map((item) => {
            return (
              item.title.toLowerCase().includes(this.props.searchValue.toLowerCase()) && (
                <Card key={item.id} item={item} />
              )
            );
          })}
        </div>
      </section>
    );
  }
}

export default CardList;
