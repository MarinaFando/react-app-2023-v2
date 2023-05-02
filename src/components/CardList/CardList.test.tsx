import React from 'react';
import { render, act } from '@testing-library/react';
import store from '../../redux/store';
import fetch from 'node-fetch';
import { Provider } from 'react-redux';
import HomePage from '../../pages/Homepage/HomePage';

const renderWithRedux = (ui: React.ReactElement) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

describe('CardList', () => {
  let component;
  beforeEach(() => {
    global.fetch = fetch;
  });
  it('renders HomePage component', async () => {
    await act(async () => {
      component = await renderWithRedux(<HomePage />);
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await act(async () => {
      await component.getAllByText('Add to cart');
    });

    const buttons = component.getAllByText('Add to cart');

    expect(component.getAllByText(/Gender/i)).toHaveLength(buttons.length);
  });
});
