import React from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from '../components/app';
import configureStore from '../store';

let store = configureStore();

export default function Root() {
  return (
    <AppContainer>
      <Provider store={store}>
        <div>
          <App />
        </div>
      </Provider>
    </AppContainer>
  );
}
