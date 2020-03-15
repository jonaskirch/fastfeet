import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

import './config/ReactototronConfig';
import { store, persistor } from './store';
import App from './App';
import colors from '~/styles/colors';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar backgroundColor={colors.primary} />
        <App />
      </PersistGate>
    </Provider>
  );
}
