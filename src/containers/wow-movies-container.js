import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WowMovies from '../components/wow-movies';
import { filterWoWMovies } from '../actions';

const mapStateToProps = ({ wowMovies }) => ({
  wowMovies,
});

const mapDispatchToProps = (dispatch) => ({
  filterWoWMovies: bindActionCreators(filterWoWMovies, dispatch),
});

const WowMoviesContainer = connect(mapStateToProps, mapDispatchToProps)(WowMovies);
export default WowMoviesContainer;
