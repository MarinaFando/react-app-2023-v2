import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('renders AboutPage component', () => {
    render(<AboutPage />);
    expect(screen.getByText(/Nice to see you here!/i)).toBeInTheDocument();
  });
});
