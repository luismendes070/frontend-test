/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './components/MyComponent';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {

  return (
      <View id='root'>
          <Text>Personagens Star Wars</Text>
          <MyComponent />
      </View>
  );
};

ReactDOM.render(
    App,
    document.getElementById('root')

);

export default App;
