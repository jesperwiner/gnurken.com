import React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import DevTools from '../dev-tools';
import configureStore from '../store';
import Routes from '../routes';

const store = configureStore();

export default function Root() {
  return (
    <AppContainer>
      <Provider store={store}>
        <div>
          <Routes />
          <DevTools />
        </div>
      </Provider>
    </AppContainer>
  );
}
