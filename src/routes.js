import React from 'react';
import { browserHistory, Router, Route } from 'react-router';
import App from './components/app';
import { About } from './components/about';
import { Games } from './components/games';

export default function Routes() {
  console.log('rotues');
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="games" component={Games} />
      </Route>
    </Router>
  );
}
