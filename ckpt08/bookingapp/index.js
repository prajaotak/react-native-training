/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';

import App from './src/App';
import UserContextProvider from './src/context/UserContext';
import {name as appName} from './app.json';

const Main = () => {
  return (
    <UserContextProvider>
      <App />
    </UserContextProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
