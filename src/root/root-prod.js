import React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Routes from '../routes';
import configureStore from '../store';

const store = configureStore();

export default function Root() {
  return (
    <AppContainer>
      <Provider store={store}>
        <div>
          <h1>prod</h1>
          <Routes />
        </div>
      </Provider>
    </AppContainer>
  );
}
