import React, { useState, useEffect, Component } from 'react'
import MapView from 'react-native-maps';
import { Image, TouchableHighlight, Alert, StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import Map from './components/Map.js'

export default function App() {
  return(
      <View style={styles.container}>
        <Map/>
        <View style={styles.bar}>
          <TouchableHighlight style={styles.bottomButtons}>
          <Text style={styles.footerText}>A</Text>
          </TouchableHighlight>
          <Image style={styles.image} source={require('./assets/1.png')} />
          <TouchableHighlight style={styles.bottomButtons}>
          <Text style={styles.footerText}>B</Text>
          </TouchableHighlight>
        </View>
      </View>
      )
}

let {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
   container: {
     height: height,
     width: width,
     justifyContent: 'center',
     alignItems: 'center',
   },
   map: {
     ...StyleSheet.absoluteFillObject,
   },
   bar : {
     position: 'absolute',
     flex:0.1,
     left: 0,
     right: 0,
     bottom: -10,
     backgroundColor:'grey',
     opacity: 0.8,
     flexDirection:'row',
     height:100,
     alignItems:'center',
   },
  bottomButtons: {
    alignItems:'center',
    justifyContent: 'center',
    flex:1,
  },
  footerText: {
    color:'white',
    fontWeight:'bold',
    alignItems:'center',
    fontSize:18,
  },
  image: {
    height: 80,
    width: 80,
    bottom: 10
  }
});
