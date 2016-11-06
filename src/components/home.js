import React from 'react';
import { Row, Col } from 'react-bem-grid';
import ReactPlayer from 'react-player';
import wowMovies from '../data/wow-movies';
import './home.scss';

export const Home = () => (
  <div className="mainBody">
    <Row xsAround className="latest-movies">
      <Col xs={12}>
        <Row xs>
          <h3 className="latest-movies__text">
            Latest World of Warcraft Movies
          </h3>
        </Row>
        <Row xsAround>
          <Col xsCenter className="player__col">
            <div className="player__box">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${wowMovies[0].youTubeId}`} />
              <h4>{`${wowMovies[0].name}`}</h4>
            </div>
          </Col>
          <Col xsCenter className="player__col">
            <div className="player__box">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${wowMovies[1].youTubeId}`} />
              <h4>{`${wowMovies[1].name}`}</h4>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
