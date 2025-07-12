import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Stack } from 'expo-router';

const bikeLocations = [
  { latitude: -7.0217861, longitude: 110.4619155 }, // titik pusat UNIMUS
  { latitude: -7.0217000, longitude: 110.4618000 }, // dekat gedung A
  { latitude: -7.0218500, longitude: 110.4620000 }, // dekat parkiran utama
  { latitude: -7.0219200, longitude: 110.4617000 }, // belakang rektorat
  { latitude: -7.0217400, longitude: 110.4621000 }, // depan perpustakaan
  { latitude: -7.0216600, longitude: 110.4619000 }, // area mushola
  { latitude: -7.0218100, longitude: 110.4616000 }, // taman tengah
  { latitude: -7.0218800, longitude: 110.4622000 }, // samping lab komputer
];

export default function MapsScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -7.0217861, // UNIMUS center
          longitude:110.4619155,
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