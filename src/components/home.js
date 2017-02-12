import React from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import ReactPlayer from 'react-player';
import wowMovies from '../data/wow-movies';
import './home.scss';

export const Home = () => (
  <div className="mainBody">
    <Grid fluid className="main-grid">
      <Row xs >
        <Col xs>
          <h3 className="entry__text">
            Latest World of Warcraft Movies
          </h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6} className="player__col">
          <div className="player__box">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${wowMovies[0].youTubeId}`} width={'100%'} />
            <h4>{`${wowMovies[0].name} - ${wowMovies[0].date}`}</h4>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="player__col">
          <div className="player__box">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${wowMovies[1].youTubeId}`} width={'100%'} />
            <h4>{`${wowMovies[1].name} - ${wowMovies[1].date}`}</h4>
          </div>
        </Col>
      </Row>
      <Row xs>
        <Col xs={12} sm={12} md={12} lg={6} className="player__col">
          <div className="player__box">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${wowMovies[2].youTubeId}`} width={'100%'} />
            <h4>{`${wowMovies[2].name} - ${wowMovies[2].date}`}</h4>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="player__col">
          <div className="player__box">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${wowMovies[3].youTubeId}`} width={'100%'} />
            <h4>{`${wowMovies[3].name} - ${wowMovies[3].date}`}</h4>
          </div>
        </Col>
      </Row>

      <Row xs className="new-line">
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">


          <h3 className="entry__text entry__text--shorter">
            The gaming rig
          </h3>

          <div className="player__box">
            <img src="../images/overkill/dator-1.JPG" className="cover" alt="computer" />
            <h4>Case-Labs Mercury S8</h4>
          </div>

        </Col>
        <Col xs={12} sm={12} md={12} lg={6} className="entry__col">

          <h3 className="entry__text entry__text--shorter">
            The setup
          </h3>

          <div className="player__box">
            <img src="../images/overkill/setup-1.JPG" className="cover" alt="computer" />
            <h4>Ikea countertop desk</h4>
          </div>

        </Col>
      </Row>
    </Grid>
  </div>
);
