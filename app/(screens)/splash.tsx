// splash.tsx
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function SplashScreenBikeMus() {
  const [appIsReady, setAppIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Logo & Title */}
      <View style={styles.header}>
        <Image source={require("../../assets/images/logoBikeMus.png")} style={styles.logo} resizeMode="contain" />
        <Text style={styles.brand}>BikeMus</Text>
      </View>

      {/* Illustration */}
      <Image source={require("../../assets/images/launch.png")} style={styles.illustration} resizeMode="contain" />

      {/* Welcome Text & Button */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Selamat datang di BikeMus</Text>
        <Text style={styles.subtitle}>
          Temukan & Pakai Sepeda Kampusmu, Kini Lebih Mudah
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.replace("/login")}>
          <Text style={styles.buttonText}>Mulai</Text>
        </TouchableOpacity>
      </View>

      {/* Optional decorative stars */}
      <Image source={require("../../assets/images/star.png")} style={styles.cornerTopLeft} />
      <Image source={require("../../assets/images/star.png")} style={styles.cornerBottomRight} />
    </View>
  );
}

const PRIMARY = "#232265";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 24,
  },
  header: {
    width: "100%",
    alignItems: "center",
    marginTop: 36,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 7,
  },
  brand: {
    fontSize: 22,
    fontWeight: "700",
    color: PRIMARY,
    letterSpacing: 0.5,
    fontFamily: "Poppins-Bold"
  },
  illustration: {
    width: 220,
    height: 220,
    marginTop: 14,
    marginBottom: 12,
  },
  bottomSection: {
    alignItems: "center",
    width: "100%",
    marginBottom: 34,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#131313",
    marginBottom: 8,
    textAlign: "center",
    fontFamily: "Poppins-Bold"
  },
  subtitle: {
    fontSize: 14,
    color: "#5A5A5A",
    textAlign: "center",
    marginBottom: 30,
    maxWidth: 240,
    fontFamily: "Poppins-Regular"
  },
  button: {
    backgroundColor: PRIMARY,
    borderRadius: 22,
    paddingHorizontal: 40,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
    fontFamily: "Poppins-Medium"
  },
  cornerTopLeft: {
    position: "absolute",
    left: 22,
    top: 140,
    width: 18,
    height: 18,
    opacity: 0.9,
  },
  cornerBottomRight: {
    position: "absolute",
    right: 22,
    bottom: 132,
    width: 18,
    height: 18,
    opacity: 0.9,
  },
});
