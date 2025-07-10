import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Stack } from 'expo-router';

const bikeLocations = [
  { latitude: -6.9725, longitude: 110.4282 },
  { latitude: -6.9727, longitude: 110.4290 },
  { latitude: -6.9729, longitude: 110.4285 },
  { latitude: -6.9731, longitude: 110.4292 },
  { latitude: -6.9733, longitude: 110.4287 },
  { latitude: -6.9735, longitude: 110.4294 },
  { latitude: -6.9737, longitude: 110.4289 },
  { latitude: -6.9739, longitude: 110.4296 },
];

export default function MapsScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -6.9730, // UNIMUS center
          longitude: 110.4290,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        }}
        showsUserLocation={true}
      >
        {bikeLocations.map((loc, idx) => (
          <Marker
            key={idx}
            coordinate={loc}
            title={`Sepeda ${idx + 1}`}
            description="Lokasi Sepeda"
          >
            <Image
              source={require('../../assets/images/bike_marker.png')}
              style={{ width: 36, height: 36 }}
              resizeMode="contain"
            />
          </Marker>
        ))}
      </MapView>
      <View style={styles.overlay}>
        <Text style={styles.title}>Peta Sepeda Kampus</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: '100%', height: '100%' },
  overlay: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#232265',
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
  },
});