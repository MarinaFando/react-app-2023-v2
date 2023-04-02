import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [path, setPath] = useState('...');

  const onLinkClick = (e) => {
    setPath(e.target.pathname.slice(1) || 'home');
  };

  return (
    <header className="header">
      <Link className="header-link" to="/">
        <h1>Shopping mall</h1>
      </Link>
      <h2>{`${path} page`}</h2>
      <nav className="header-links">
        <Link className="header-link" to="/" onClick={onLinkClick}>
          Home
        </Link>
        <Link className="header-link" to="/about" onClick={onLinkClick}>
          About
        </Link>
        <Link className="header-link" to="/form" onClick={onLinkClick}>
          Form
        </Link>
      </nav>
    </header>
  );
};

export default Header;
