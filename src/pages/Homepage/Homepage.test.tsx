import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from './HomePage';
import fetch from 'node-fetch';

const localStorageMock = (function () {
  let store: Store = {};

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },
    clear() {
      store = {};
    },
  };
})();

beforeEach(async () => {
  await localStorage.clear();
});

describe('HomePage', () => {
  beforeEach(() => {
    global.fetch = fetch;
  });
  it('save data in local storage', async () => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    const { unmount } = render(<HomePage />);
    const inputField = screen.getByPlaceholderText(/Search.../i);
    expect(inputField).toBeInTheDocument();
    fireEvent.change(inputField, { target: { value: 'Naruto' } });
    fireEvent.keyPress(inputField, { key: 'enter', keyCode: 13 });
    unmount();
    waitFor(() => {
      expect(localStorage.getItem('searchValue')).toBe('Naruto');
    });
  });

  it('check all cards render', async () => {
    const { container } = await render(<HomePage />);
    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
    const cards = container.getElementsByClassName('card');
    expect(cards.length).toBe(buttons.length);
    expect(await screen.queryByAltText('close window')).not.toBeInTheDocument();
  });

  it('check opening and closing modal window', async () => {
    const { container } = await render(<HomePage />);
    await screen.findAllByRole('button');
    const cards = container.getElementsByClassName('card');
    fireEvent.click(cards[0]);
    const closeButton = await screen.findByAltText('close window');
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(await screen.queryByAltText('close window')).not.toBeInTheDocument();
  });

  it('check opening and closing modal window by clicking outside', async () => {
    const { container } = await render(<HomePage />);
    await screen.findAllByRole('button');
    const cards = container.getElementsByClassName('card');
    fireEvent.click(cards[0]);
    const outsideModal = await container.getElementsByClassName('display__block');
    fireEvent.click(outsideModal[0]);
    expect(await screen.queryByAltText('close window')).not.toBeInTheDocument();
  });
});
