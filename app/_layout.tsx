import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Ini menyembunyikan header untuk semua halaman
      }}
    />
  );
}
