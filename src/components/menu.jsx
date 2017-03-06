import React, { PropTypes } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import './menu.scss';

const Menu = ({ routing }) => {
  const path = routing.locationBeforeTransitions.pathname;
  const handleClick = () => {
    window.location.assign('https://undecided.gnurken.com');
  };

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
          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <NavDropdown id={1} eventKey={'/about'} title="About">
            <LinkContainer to="/about">
              <MenuItem eventKey={'/about'}>Contact</MenuItem>
            </LinkContainer>
            <LinkContainer to="/about/rig">
              <MenuItem eventKey={'/about/rig'}>Gaming Rig</MenuItem>
            </LinkContainer>
          </NavDropdown>

          <NavDropdown id={2} eventKey={'/projects'} title="Projects">
            <LinkContainer to="/projects">
              <MenuItem eventKey={'/projects'}>Recent</MenuItem>
            </LinkContainer>
            <LinkContainer to="/projects/amiga1200">
              <MenuItem eventKey={'/projects/amiga1200'}>Amiga 1200</MenuItem>
            </LinkContainer>
            <MenuItem eventKey={3.2}>Other projects</MenuItem>
          </NavDropdown>

          <NavDropdown id={3} eventKey={3} title="Movies">
            <MenuItem eventKey={3.1}>World of Warcraft</MenuItem>
            <MenuItem eventKey={3.2}>Other movies</MenuItem>
          </NavDropdown>
          <NavItem onClick={handleClick}>The Undecided</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Menu.propTypes = {
  routing: PropTypes.object,
};

export default Menu;
