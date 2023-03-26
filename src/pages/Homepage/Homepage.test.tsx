import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './HomePage';

const localStorageMock = (function () {
  const store: Store = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },
  };
})();

describe('HomePage', () => {
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

  it('save data in local storage', async () => {
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

    const { unmount } = render(<HomePage items={list} />);
    const inputField = screen.getByPlaceholderText(/Search.../i);
    expect(inputField).toBeInTheDocument();
    fireEvent.change(inputField, { target: { value: 'sneaker' } });
    unmount();
    expect(await localStorage.getItem('searchValue')).toBe('sneaker');
  });
});
