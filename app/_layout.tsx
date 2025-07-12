import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';


export default function RootLayout() {
  //const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return ( 
      <Stack>
        {/* <Stack.Screen name="(screens)" options={{ headerShown: false }} /> */}
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
  );
}
