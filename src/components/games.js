import React from 'react';
import { Row, Col } from 'react-bem-grid';
import ReactPlayer from 'react-player';
import wowMovies from '../data/wow-movies';
import './games.scss';

export const Games = () => (
  <div className="mainBody">
    <Row xsAround className="latest-movies">
      <Col xs={12}>
        <Row xs>
          <h3 className="latest-movies__text">
            Currently playing
          </h3>
        </Row>
        <Row xsAround>
          <Col xsCenter className="player__col">
          </Col>
          <Col xsCenter className="player__col">
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
