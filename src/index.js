import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';

import Routes from 'routes';

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
