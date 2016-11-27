import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes';
import configureStore from '../store';

const store = configureStore();

export default function Root() {
  return (
    <Provider store={store}>
      <div>
        <h1>prod</h1>
        <Routes />
      </div>
    </Provider>
  );
}
