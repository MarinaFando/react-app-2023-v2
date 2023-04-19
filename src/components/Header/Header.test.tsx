import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
  test('renders the header component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
    expect(screen.getByText(/^Shopping mall$/i)).toBeInTheDocument();
  });
});
