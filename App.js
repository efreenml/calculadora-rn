import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
import OutputNumber from './components/OutputNumber/OutputNumber';
import PanelNumber from './components/PanelNumber/PanelNumber';
var { height } = Dimensions.get('window');
 

export default function App() {
  return (
    <View style={styles.container}>
    <View style={[ styles.box1, styles.layout]}>
      <OutputNumber />
    </View>
    <View style={[styles.box2, styles.layout]}>
      <PanelNumber />
    </View>
</View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },


  box1: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  box2: {
    flex: 2,
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  },
  layout: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});