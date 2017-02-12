import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './menu.scss';

const Menu = ({ routing }) => {
  const path = routing.locationBeforeTransitions.pathname;
  return (
    <Navbar inverse collapseOnSelect className="menu">
      <Navbar.Header>
        <Navbar.Brand className="mini-gnurken">
          <img src="../images/gnurken_logo.png" alt="Gnurken" />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav activeKey={path}>
          <NavItem eventKey={'/'}><Link to="/">Home</Link></NavItem>

          <NavDropdown eventKey={3} title="About">
            <MenuItem eventKey={3.1}><Link to="/about">Contact</Link></MenuItem>
            <MenuItem eventKey={3.2}><Link to="/about/rig">Gaming Rig</Link></MenuItem>
          </NavDropdown>

          <NavDropdown eventKey={3} title="Projects">
            <MenuItem eventKey={3.1}>Recent</MenuItem>
            <MenuItem eventKey={3.2}>Other projects</MenuItem>
          </NavDropdown>

          <NavDropdown eventKey={3} title="Movies">
            <MenuItem eventKey={3.1}>World of Warcraft</MenuItem>
            <MenuItem eventKey={3.2}>Other movies</MenuItem>
          </NavDropdown>

          <NavItem href="https://undecided.gnurken.com">The Undecided</NavItem>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <nav className="menu">
    //   <li className={path === '/' ? 'current' : ''}><Link to="/">Home</Link></li>
    //   <li className={path.startsWith('/about') ? 'current' : ''}><Link to="/about">About</Link></li>
    //   <li className={path === '/games' ? 'current' : ''}><Link to="/games">Games</Link></li>
    //   <li className={path === '/wow' ? 'current' : ''}><Link to="/wow">WoW Movies</Link></li>
    //   <li className={path === '/undecided' ? 'current' : ''}><a href="http://undecided.gnurken.com">The Undecided Forum</a></li>
    //   <li className={path === '/contact' ? 'current' : ''}><Link to="/contact">Contact</Link></li>
    // </nav>
  );
};

Menu.propTypes = {
  routing: PropTypes.object,
};

export default Menu;
