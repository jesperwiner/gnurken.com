import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bem-grid';
import wowMovies from '../data/wow-movies';
import ReactPlayer from 'react-player';
import 'react-bem-grid/dist/Grid.css';

function isEven(n) {
  return n % 2 === 0;
}

function renderVideo(item) {
  return (
    <div>
      <h4>{item.name}</h4>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${item.youTubeId}`} />
    </div>
  );
}

const WowMovies = ({ filterWoWMovies }) => {
  const kalle = filterWoWMovies();

  return (
    <Grid fluid className="">
      <button onClick={filterWoWMovies}>testa</button>
      <Row>
        <Col xs={12} sm={6} lg={4}>
          {wowMovies.map((item, index) => (
            (isEven(index) === true) ? renderVideo(item) : null
          ))}
        </Col>
        <Col xs={12} sm={6} lg={4}>
          {wowMovies.map((item, index) => (
            (isEven(index) === false) ? renderVideo(item) : null
          ))}
        </Col>
      </Row>
    </Grid>
  );
};

WowMovies.propTypes = {
  filterWoWMovies: PropTypes.func,
};

export default WowMovies;
