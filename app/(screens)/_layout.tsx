import { Stack, useRouter } from "expo-router";
import React, { useEffect } from "react";

export default function RootLayout() {
  // Optional: bisa redirect otomatis ke splash jika ingin
  // const router = useRouter();
  // useEffect(() => { router.replace("/splash"); }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="login" />
      <Stack.Screen name="tabs" />
    </Stack>
  );
}