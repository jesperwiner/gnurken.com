import React, { PropTypes } from 'react';
import wowMovies from '../data/wow-movies';

const WowMovies = ({ filterWoWMovies }) => {
  const kalle = filterWoWMovies();

  return (
    <ul>
      {wowMovies.map((item) =>
        (<h1>{item.name}</h1>)
      )}
      {filterWoWMovies}
    </ul>
  );
};

WowMovies.propTypes = {
  filterWoWMovies: PropTypes.func,
};

export default WowMovies;
