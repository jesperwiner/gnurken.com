import React from 'react';
import { Row, Col } from 'react-bem-grid';
import ReactPlayer from 'react-player';
import wowMovies from '../data/wow-movies';
import './home.scss';

export const Home = () => (
  <div className="mainBody">
    <Row xsAround className="entry">
      <Col xs={12}>
        <Row xs>
          <Col xs>
            <h3 className="entry__text">
              Latest World of Warcraft Movies
            </h3>
          </Col>
        </Row>
        <Row xsAround>
          <Col xsCenter className="player__col">
            <div className="player__box">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${wowMovies[0].youTubeId}`} width={'100%'} height={'100%'} />
              <h4>{`${wowMovies[0].name}`}</h4>
            </div>
          </Col>
          <Col xsCenter className="player__col">
            <div className="player__box">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${wowMovies[1].youTubeId}`} width={'100%'} height={'100%'} />
              <h4>{`${wowMovies[1].name}`}</h4>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row xsAround className="entry">
      <Col xs={12}>
        <Row xs>
          <Col xs>
            <h3 className="entry__text entry__text--shorter">
              The gaming rig
            </h3>
          </Col>
          <Col xsEnd className="col--right">
            <h3 className="entry__text entry__text--shorter">
              The setup
            </h3>
          </Col>
        </Row>
        <Row xsAround>
          <Col xsCenter className="player__col">
            <div className="player__box">
              <img src="../images/overkill/dator-1.JPG" className="cover" alt="computer" />
              <h4>Case-Labs Mercury S8</h4>
            </div>
          </Col>
          <Col xsCenter className="player__col">
            <div className="player__box">
              <img src="../images/overkill/setup-1.JPG" className="cover" alt="computer" />
              <h4>Ikea countertop desk</h4>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
