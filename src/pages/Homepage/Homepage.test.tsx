import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HomePage from './HomePage';
import fetch from 'node-fetch';
import store from '../../redux/store';
import { Provider } from 'react-redux';

const renderWithRedux = (ui: React.ReactElement) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

describe('HomePage', () => {
  beforeEach(() => {
    global.fetch = fetch;
  });
  it('save data in store', async () => {
    const { unmount } = await renderWithRedux(<HomePage />);
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
    const { container } = await renderWithRedux(<HomePage />);
    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
    const cards = container.getElementsByClassName('card');
    expect(cards.length).toBe(buttons.length);
    expect(await screen.queryByAltText('close window')).not.toBeInTheDocument();
  });

  it('check opening and closing modal window', async () => {
    const { container } = await renderWithRedux(<HomePage />);
    await screen.findAllByRole('button');
    const cards = container.getElementsByClassName('card');
    fireEvent.click(cards[0]);
    const closeButton = await screen.findByAltText('close window');
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(await screen.queryByAltText('close window')).not.toBeInTheDocument();
  });

  it('check opening and closing modal window by clicking outside', async () => {
    const { container } = await renderWithRedux(<HomePage />);
    await screen.findAllByRole('button');
    const cards = container.getElementsByClassName('card');
    fireEvent.click(cards[0]);
    const outsideModal = await container.getElementsByClassName('display__block');
    fireEvent.click(outsideModal[0]);
    expect(await screen.queryByAltText('close window')).not.toBeInTheDocument();
  });
});
