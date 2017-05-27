import React, { PropTypes } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import './menu.scss';

const Menu = ({ routing }) => {
  const path = routing.locationBeforeTransitions.pathname.split('/')[1];

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
        <Nav activeKey={`/${path}`}>
          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <NavDropdown id={1} eventKey={'/about'} title="About">
            <LinkContainer to="/about/about">
              <MenuItem eventKey={'/about/about'}>Contact</MenuItem>
            </LinkContainer>
            <LinkContainer to="/about/rig">
              <MenuItem eventKey={'/about/rig'}>Gaming Rig</MenuItem>
            </LinkContainer>
          </NavDropdown>

          <NavDropdown id={2} eventKey={'/projects'} title="Projects">
            <LinkContainer to="/projects/recent">
              <MenuItem eventKey={'/projects/recent'}>Recent</MenuItem>
            </LinkContainer>
            <LinkContainer to="/projects/amiga1200">
              <MenuItem eventKey={'/projects/amiga1200'}>Amiga 1200 Upgrade</MenuItem>
            </LinkContainer>
            <LinkContainer to="/projects/amiga1200-2">
              <MenuItem eventKey={'/projects/amiga1200-2'}>Amiga 1200 Renovation</MenuItem>
            </LinkContainer>
            <LinkContainer to="/projects/xbox">
              <MenuItem eventKey={'/projects/xbox'}>Original Xbox</MenuItem>
            </LinkContainer>
            <LinkContainer to="/projects/other">
              <MenuItem eventKey={'/projects/other'}>Other projects</MenuItem>
            </LinkContainer>
          </NavDropdown>

          <NavDropdown id={3} eventKey={'/movies'} title="Movies">
            <LinkContainer to="/movies/wow-movies/other/other">
              <MenuItem eventKey={'/movies/wow-movies'}>World of Warcraft</MenuItem>
            </LinkContainer>
            <LinkContainer to="/movies/other-movies">
              <MenuItem eventKey={'/movies/other-movies'}>Other Movies</MenuItem>
            </LinkContainer>
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
