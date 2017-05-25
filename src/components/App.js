import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MenuContainer from '../containers/menu-container';
import { StickyContainer, Sticky } from 'react-sticky';
import 'react-bem-grid/dist/Grid.css';
import './app.scss';
import './common.scss';

const App = ({ children, location: { pathname } }) => {
  // Only take the first-level part of the path as key, instead of the whole path.
  const key = pathname.split('/')[1] || 'root';
  return (
    <div className="wrapper">
      <header className="header">
      </header>
      <article className="main">
        <StickyContainer className="app">

          <div className="logo">
            <a href="https://www.gnurken.com">
              <img src="../images/gnurken_logo.png" alt="Gnurken" />
            </a>
            <div>The real Gnurken, not that other dude that took my name</div>

            <div
              className="fb-like"
              data-href="https://www.facebook.com/Gnurken/"
              data-layout="button_count"
              data-action="like"
              data-show-faces="false"
              data-share="true"
            >
            </div>

          </div>

          <Sticky className="mini-gnurken" stickyClassName={'mini-gnurken__visible'}>
            <div className="menu__container">
              <MenuContainer />
              <div className="menu__container--border" />
            </div>
          </Sticky>

          <div id="mainBody">
            <ReactCSSTransitionGroup
              component="div" transitionName="mainBody"
              transitionEnterTimeout={300} transitionLeaveTimeout={300}
            >
              {React.cloneElement(children || <div />, { key })}
            </ReactCSSTransitionGroup>
          </div>
        </StickyContainer>
        <footer className="footer">
          <div className="footer--border" />
            &#169;2017 - Winne Productions
        </footer>
      </article>

      <aside className="aside aside-1"> </aside>
      <aside className="aside aside-2"> </aside>

    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node,
  location: React.PropTypes.object,
};

export default App;
