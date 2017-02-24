import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './menu.scss';

const Menu = ({ routing }) => {
  const path = `/${routing.locationBeforeTransitions.pathname.split('/')[1]}`;

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

          <NavDropdown id={1} eventKey={'/about'} title="About">
            <MenuItem eventKey={3.1}><Link to="/about">Contact</Link></MenuItem>
            <MenuItem eventKey={3.2}><Link to="/about/rig">Gaming Rig</Link></MenuItem>
          </NavDropdown>

          <NavDropdown id={2} eventKey={3} title="Projects">
            <MenuItem eventKey={3.1}>Recent</MenuItem>
            <MenuItem eventKey={3.2}>Other projects</MenuItem>
          </NavDropdown>

          <NavDropdown id={3} eventKey={3} title="Movies">
            <MenuItem eventKey={3.1}>World of Warcraft</MenuItem>
            <MenuItem eventKey={3.2}>Other movies</MenuItem>
          </NavDropdown>

          <NavItem href="https://undecided.gnurken.com">The Undecided</NavItem>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Menu.propTypes = {
  routing: PropTypes.object,
};

export default Menu;
