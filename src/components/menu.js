import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './menu.scss';

const Menu = ({ routing }) => {
  const path = routing.locationBeforeTransitions.pathname;
  return (
    <ul className="menu">
      <li className={path === '/' ? 'current' : ''}><Link to="/">Home</Link></li>
      <li className={path === '/about' ? 'current' : ''}><Link to="/about">About</Link></li>
      <li className={path === '/games' ? 'current' : ''}><Link to="/games">Games</Link></li>
      <li className={path === '/wow' ? 'current' : ''}><Link to="/wow">World of Warcraft Movies</Link></li>
      <li className={path === '/undecided' ? 'current' : ''}><a href="http://undecided.gnurken.com">The Undecided Forum</a></li>
      <li className={path === '/contact' ? 'current' : ''}><Link to="/contact">Contact</Link></li>
    </ul>
  );
};

Menu.propTypes = {
  routing: PropTypes.object,
};

export default Menu;
