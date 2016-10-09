import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import WowMoviesContainer from '../containers/wow-movies-container';

const App = () => (
  <div>
    <WowMoviesContainer />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
