import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './sub-menu.scss';

const AboutSubMenu = ({ children, routing }) => {
  const path = routing.locationBeforeTransitions.pathname;
  return (
    <div >
      <nav className="sub-menu">
        <Link className={path === '/about' ? 'link link-current' : 'link'} to="/about">About</Link>
        <Link className={path === '/about/rig' ? 'link-current' : 'link'} to="/about/rig">Gaming rig</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
};

AboutSubMenu.propTypes = {
  routing: PropTypes.object,
  children: React.PropTypes.node,
};

export default AboutSubMenu;
