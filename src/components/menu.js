import React from 'react';
import './menu.scss';

export default class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li className="current"><a href="#">Home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">Games</a></li>
        <li><a href="#">World of Warcraft Movies</a></li>
        <li><a href="#">The Undecided Forum</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    );
  }
}
