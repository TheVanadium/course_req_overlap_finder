// react component
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <ul className="navbar">
        <li className="navbar-item">
          <p>UC Merced Badge Finder</p>
        </li>
        <li className="navbar-item">
          <p><a href="#" className="navbar-link">GitHub</a></p>
        </li>
        <li className="navbar-item">
          <p><a href="https://thevanadium.github.io/portfolio/" className="navbar-link">by Garret Castro</a></p>
        </li>
      </ul>
    </header>
  );
}

export default Header;
