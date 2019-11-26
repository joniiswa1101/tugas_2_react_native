/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native';
import NamaBarang from "./Component/NamaBarang";

export default class App extends Component<Props> {
  render() {
    return (
      <View >
        <StatusBar backgroundColor="blue" />
        <Text>Tugas 2 React Native</Text>
        <NamaBarang/>
      </View>
      );
  }
}

// export default App;
