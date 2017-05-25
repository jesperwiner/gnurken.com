import { connect } from 'react-redux';
import Movies from '../components/movies/wow-movies';
import { bindActionCreators } from 'redux';
import { showMovie } from '../actions/movieActions';

const mapStateToProps = ({ routing, movie = {} }) => ({
  routing,
  movie,
});

function mapDispatchToProps(dispatch) {
  console.log(showMovie);
  return bindActionCreators({
    showMovie
  }, dispatch);
}

const MoviesContainer = connect(mapStateToProps ,mapDispatchToProps)(Movies);
export default MoviesContainer;
