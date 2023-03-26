import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends React.Component<object, { path: string }> {
  constructor() {
    super();
    this.state = {
      path: '...',
    };
  }

  onLinkClick = (e) => {
    e.preventDefault();
    this.setState({ path: e.target.pathname.slice(1) ? e.target.pathname.slice(1) : 'home' });
  };

  render() {
    return (
      <header className="header">
        <Link className="header-link" to="/">
          <h1>Shopping mall</h1>
        </Link>
        <h2>{`${this.state.path} page`}</h2>
        <nav className="header-links">
          <Link className="header-link" to="/" onClick={this.onLinkClick}>
            Home
          </Link>
          <Link className="header-link" to="/about" onClick={this.onLinkClick}>
            About
          </Link>
          <Link className="header-link" to="/form" onClick={this.onLinkClick}>
            Form
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
