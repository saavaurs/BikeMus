import React from 'react'
import { Tabs } from 'expo-router';
import { MyTabBar } from '@/components/TabBar'; // Adjust the import path as necessary


const TabLayout = () => {
  return (
    <Tabs tabBar={props => <MyTabBar {...props}/>}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  )
}

export default TabLayout;