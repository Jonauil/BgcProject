/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry
} from 'react-native';
import Home from './App/componments/Home';

class BgcProject extends Component {
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('BgcProject', () => BgcProject);