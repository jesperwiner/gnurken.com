import React from 'react';
import { render } from 'react-dom';
import Root from './root';

require('es6-promise').polyfill();

render(
  <Root />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
