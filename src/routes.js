import React, { PropTypes } from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/app';
import { Home } from './components/home';
import { About } from './components/about/about';
import { Rig } from './components/about/rig';
import { Games } from './components/games';
import { NotFound } from './components/not-found';

export default function Routes({ store }) {
  const history = syncHistoryWithStore(hashHistory, store);
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/about/rig" component={Rig} />
        <Route path="/games" component={Games} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  );
}

Routes.propTypes = {
  store: PropTypes.object,
};
