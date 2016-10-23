import React from 'react';
import Menu from './menu';
import Footer from './footer';
import WowMoviesContainer from '../containers/wow-movies-container';
import './app.scss';



export const About = ({ children, location: { pathname } }) => (
  <div className="Image">
    <h1>About</h1>
  </div>
);

const aApp = (props) => (
  <div id="root2">
    <div className="app">
      <header className="primary-header">
        <div className="logo">
          <img src="../images/gnurken_logo.png" alt="Gnurken"></img>
          <div>The real Gnurken, not that other dude that took my name</div>
        </div>
        <Menu />
      </header>
      <aside className="primary-aside"></aside>
      <main>
        <WowMoviesContainer />
        <Footer />
        <div className="search">
          <header className="search-header"></header>
          <div className="results">
            {props.children}
          </div>
          <div className="search-footer pagination"></div>
        </div>
      </main>
    </div>
  </div>
);
