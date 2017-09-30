import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import ListScreen from './screen/place';

class App extends Component{
	render() {
    return (
      <View style={styles.container}>
        <ListScreen />
      </View>
    );
  }
}

AppRegistry.registerComponent('WebDevAlfaAvaliacao', () => App);
