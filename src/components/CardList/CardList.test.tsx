import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('CardList', () => {
  it('renders CardList component', () => {
    const list = [
      {
        id: '10',
        parentId: 3,
        title: 'Sneaker Nike Blazer Mid Suede',
        price: 164,
        imageUrl: 'img/sneakers/3.svg',
      },
      {
        id: '11',
        parentId: 4,
        title: 'Sneaker Puma X Aka Boku Future Rider',
        price: 123,
        imageUrl: 'img/sneakers/4.svg',
      },
      {
        id: '12',
        parentId: 1,
        title: 'Sneaker Nike Blazer Mid Suede',
        price: 100,
        imageUrl: 'img/sneakers/1.svg',
      },
    ];
    render(<CardList items={list} searchValue="" />);
    expect(screen.getAllByText(/Add to cart/i)).toHaveLength(list.length);
    expect(screen.getAllByText(/Sneaker/i)).toHaveLength(list.length);
  });
});
