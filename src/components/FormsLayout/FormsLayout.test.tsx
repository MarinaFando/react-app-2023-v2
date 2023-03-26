import React from 'react';
import { render, screen } from '@testing-library/react';
import FormsLayout from './FormsLayout';

describe('FormsLayout', () => {
  it('renders FormsLayout component', () => {
    render(<FormsLayout />);
    expect(screen.getByText(/First Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number:/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth date:/i)).toBeInTheDocument();
    expect(screen.getByText(/Country:/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Switzerland/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/female/i)).toBeInTheDocument();
    expect(screen.getByText(/Photo:/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Submit/i)).toBeInTheDocument();
  });
});
