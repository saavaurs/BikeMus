import { CameraView } from 'expo-camera';
import { Stack } from 'expo-router';
import { useEffect, useRef } from 'react';
import {Linking, Platform, SafeAreaView, StyleSheet, StatusBar, AppState} from 'react-native';

export default function Index() {

  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (
        appState.current.match(/inactive|background/) && 
        nextAppState === 'active'
      ) {
        qrLock
      }
      appState.current = nextAppState;  
    });

    return () => {
      subscription.remove();
    };
  })

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Stack.Screen options={{title : "Overview", headerShown: false}}/>
      {Platform.OS === 'android'? <StatusBar hidden /> : null}
      <CameraView 
        style={StyleSheet.absoluteFillObject}
        facing="back"
        onBarcodeScanned={({ data }) => {
          if (data && !qrLock.current) {
            qrLock.current = true;
            setTimeout(async() => {
            await Linking.openURL(data);
          }, 500);
          }   
        }}
      />
    </SafeAreaView>
  );
}