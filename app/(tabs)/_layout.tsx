import { TabBar } from '@/components/TabBar'; // pastikan path benar
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs tabBar={props => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="scanqr" />
      <Tabs.Screen name="riwayat" />
    </Tabs>
  );
}
