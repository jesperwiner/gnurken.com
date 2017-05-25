import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movieReducer from './movieReducer';

const reducers = combineReducers({
  routing: routerReducer,
  movie: movieReducer,
});

export default reducers;
