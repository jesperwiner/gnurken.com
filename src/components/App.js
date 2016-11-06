import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MenuContainer from '../containers/menu-container';
import { StickyContainer, Sticky } from 'react-sticky';
import { Row, Col } from 'react-bem-grid';
import 'react-bem-grid/dist/Grid.css';
import './app.scss';

const App = ({ children, location: { pathname } }) => {
  // Only take the first-level part of the path as key, instead of the whole path.
  const key = pathname.split('/')[1] || 'root';
  return (
    <StickyContainer className="app">
      <Row>
        <Col xs className="sides" />

        <Col className="main">
          <div className="logo">
            <img src="../images/gnurken_logo.png" alt="Gnurken" />
            <div>The real Gnurken, not that other dude that took my name</div>
          </div>

          <Sticky className="mini-gnurken" stickyClassName={'mini-gnurken__visible'}>
            <div className="menu__container">
              <Row xsAround>
                <Col xs={0} sm={0} lg={0} />
                <Col xs={3} sm={2} lg={2} className="">
                  <img src="../images/gnurken_logo.png" alt="Gnurken" />
                </Col>

                <Col xs={9} sm={8} lg={8} className="menu__container--adjust">
                  <MenuContainer />
                </Col>
                <Col xs={0} sm={2} lg={2} />
              </Row>
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
          <div className="footer">
            <div className="footer--border" />
            &#169;2016 - Winne Productions
          </div>
        </Col>

        <Col xs className="sides">
          <div className="primary-header">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/Gnurken/"
              data-height="70"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="false"
            >
            </div>
          </div>
        </Col>
      </Row>
    </StickyContainer>
  );
};

export default App;
