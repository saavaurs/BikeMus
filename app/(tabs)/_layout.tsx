import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import TabBarIcon from "../../components/TabBarIcon";

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#fff" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#232265",
          tabBarInactiveTintColor: "#a1a1aa",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            height: 68,
            paddingBottom: 12,
            paddingTop: 8,
            shadowColor: "#000",
            shadowOpacity: 0.07,
            shadowRadius: 6,
            elevation: 3,
          },
          tabBarLabelStyle: { fontSize: 13, fontWeight: "600", marginBottom: 4 },
        }}
      >
        <Tabs.Screen
          name="beranda"
          options={{
            tabBarLabel: "Beranda",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="home" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="scanqr"
          options={{
            tabBarLabel: "Scan QR",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="qrcode" color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="aktivitas"
          options={{
            tabBarLabel: "Aktivitas",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name="clock" color={color} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}