/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigation from './navigation/Navigation';
import Colors from './constants/Colors';

import store from './redux/store';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    // primary: Colors.primaryLight,
    // accent: Colors.primaryLight,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
      <Navigation />
      </PaperProvider>
    </Provider>
  );
};

export default App;
