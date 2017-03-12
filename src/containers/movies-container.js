import { connect } from 'react-redux';
import Movies from '../components/movies/wow-movies';

const mapStateToProps = ({ routing }) => ({
  routing,
});

const MoviesContainer = connect(mapStateToProps)(Movies);
export default MoviesContainer;
