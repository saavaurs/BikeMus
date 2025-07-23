import { Text, View, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { Link, Stack } from 'expo-router';
import { useCameraPermissions } from 'expo-camera';

export default function ScanQR() {

  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "OverView", headerShown: false }} />
      <Text style={styles.title}>QR Code Scanner</Text>
      <View style={{gap: 20}}>
        <Pressable onPress={requestPermission}>
          <Text style={styles.buttonStyle}>Request Camera Permission</Text>
        </Pressable>
        <Link href={"../scanner"} asChild>
          <Pressable disabled={!isPermissionGranted}>
            <Text style={[styles.buttonStyle, { opacity: isPermissionGranted ? 1 : 0.5 }]}>Go to Scanner</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    paddingVertical: 80,
  },
  buttonStyle: {
    backgroundColor: '#007AFF',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 16,
  },
});
