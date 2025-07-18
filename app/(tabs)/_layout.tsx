import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#8B1C3F',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/home.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#8B1C3F' : '#666',
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="scanqr"
        options={{
          title: 'Scan QR',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/qr.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#8B1C3F' : '#666',
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="riwayat"
        options={{
          title: 'Riwayat',
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../assets/images/riwayat.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#8B1C3F' : '#666',
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
