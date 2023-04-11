import React from 'react';
import { render, screen } from '@testing-library/react';
import CardUser from './CardUser';

describe('CardUser', () => {
  it('renders CardUser component', () => {
    const user = {
      firstName: 'Alina',
      lastName: 'Tukan',
      phoneNumber: '12345678',
      email: 'alinatukan@gmail.com',
      birthday: '22/12/2000',
      country: 'Switzerland',
      gender: 'female',
    };
    render(<CardUser user={user} />);
    expect(screen.getByText(/Alina$/i)).toBeInTheDocument();
    expect(screen.getByText(/Tukan$/i)).toBeInTheDocument();
    expect(screen.getByText(/12345678$/i)).toBeInTheDocument();
    expect(screen.getByText(/alinatukan@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/22\/12\/2000/i)).toBeInTheDocument();
    expect(screen.getByText(/Switzerland/i)).toBeInTheDocument();
    expect(screen.getByText(/female$/i)).toBeInTheDocument();
    expect(screen.getByText(/First Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Phone number:/i)).toBeInTheDocument();
    expect(screen.getByText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth date:/i)).toBeInTheDocument();
    expect(screen.getByText(/Country/i)).toBeInTheDocument();
    expect(screen.getByText(/Gender:/i)).toBeInTheDocument();
  });
});
