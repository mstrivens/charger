import React, { useState, useEffect, Component } from 'react'
import MapView from 'react-native-maps';
import { Image, TouchableHighlight, Alert, StyleSheet, Text, Dimensions, View, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return(
        <MapView
          showsMyLocationButton={true}
          showsUserLocation={true}
          style={styles.map}
          initialRegion={{
            latitude: 51.518688999999995,
            longitude: -0.215449,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008
           }}
        />
      )
}

let {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
   map: {
     ...StyleSheet.absoluteFillObject,
   },
});
