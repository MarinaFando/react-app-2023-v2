import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [path, setPath] = useState('...');
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <header className="header">
      <Link className="header-link" to="/">
        <h1>Shopping mall</h1>
      </Link>
      <h2>{`${path} page`}</h2>
      <nav className="header-links">
        <Link className="header-link" to="/">
          Home
        </Link>
        <Link className="header-link" to="/about">
          About
        </Link>
        <Link className="header-link" to="/form">
          Form
        </Link>
      </nav>
    </header>
  );
};

export default Header;
