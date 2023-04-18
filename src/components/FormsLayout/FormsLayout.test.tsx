import React from 'react';
import { render, screen } from '@testing-library/react';
import FormsLayout from './FormsLayout';
import store from '../../redux/store';
import { Provider } from 'react-redux';

const renderWithRedux = (ui: React.ReactElement) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

describe('FormsLayout', () => {
  it('renders FormsLayout component', () => {
    renderWithRedux(<FormsLayout />);
    expect(screen.getByText(/First Name:/i)).toBeInTheDocument();
    expect(screen.getByTestId('firstName').value).toBe('');
    expect(screen.getByText(/Last Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number:/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth date:/i)).toBeInTheDocument();
    expect(screen.getByText(/Country:/i)).toBeInTheDocument();
    expect(screen.getByTestId('country').value).toBe('');
    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
    expect(screen.getByText(/female/i)).toBeInTheDocument();
    expect(screen.getByText(/Photo:/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });
});
