/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, Dimensions,
  StyleSheet, View
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { appSettings } from './src/config/AppSettings';
import store from './src/core/redux/store/configStore';
import AppRouter from './src/navigation/index';
const App = ()  => {
   useEffect(() => {
    appSettings.checkAppSettings();
    appSettings.showStorage();
  }, []);
  return (
  <SafeAreaProvider>
      <Provider store={store}>
    <View style={{flex:1}}>
   < AppRouter/>
    </View>
  </Provider>
  </SafeAreaProvider>


  );
};

export default App;
