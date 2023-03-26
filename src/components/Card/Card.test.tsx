import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const sneaker = {
    id: '7',
    parentId: '6',
    title: 'Sneaker Black Edition',
    price: 118,
    imageUrl: 'img/sneakers/6.svg',
  };
  it('renders Card component', () => {
    render(<Card item={sneaker} />);
    expect(screen.getByText(/Sneaker Black Edition/i)).toBeInTheDocument();
    expect(screen.getByText(/Price:/i)).toBeInTheDocument();
    expect(screen.getByText(/118/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Add to cart/i)).toBeInTheDocument();
  });
});
