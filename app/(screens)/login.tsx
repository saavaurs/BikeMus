import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView
} from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const router = useRouter();

  const handleLogin = () => {
    // TODO: Implementasi login logic
    alert(`NIM: ${nim}\nPassword: ${password}\nIngat saya: ${rememberMe}`);
    // router.replace("/home"); // Setelah login sukses, arahkan ke halaman berikutnya
     router.replace("/maps");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoRow}>
          <Image
            source={require("../../assets/images/logoBikeMus.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.brand}>BikeMus</Text>
        </View>
        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.title}>Masuk</Text>
          <Text style={styles.subtitle}>
            Login ke akunmu dan temukan sepeda terdekat.
          </Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>NIM</Text>
            <TextInput
              style={styles.input}
              value={nim}
              onChangeText={setNim}
              placeholder="Masukkan NIM"
              placeholderTextColor="#888"
              autoCapitalize="none"
              keyboardType="default"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordWrap}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={password}
                onChangeText={setPassword}
                placeholder="Masukkan Password"
                placeholderTextColor="#888"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShowPassword((prev) => !prev)}
                style={styles.eyeButton}
                accessibilityLabel={showPassword ? "Sembunyikan password" : "Tampilkan password"}
              >
                <Image
                  source={
                    showPassword
                      ? require("../../assets/images/eye_open.png")
                      : require("../../assets/images/eye_closed.png")
                  }
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Remember Me */}
          <TouchableOpacity
            style={styles.rememberRow}
            onPress={() => setRememberMe((prev) => !prev)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe && (
                <Image
                  source={require("../../assets/images/check.png")}
                  style={styles.checkIcon}
                />
              )}
            </View>
            <Text style={styles.rememberText}>Ingat saya</Text>
          </TouchableOpacity>
          {/* Login Button */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = "#232265";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingHorizontal: 24
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 36,
    marginBottom: 18
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 6
  },
  brand: {
    fontSize: 22,
    fontWeight: "700",
    color: PRIMARY
  },
  form: {
    width: "100%",
    marginTop: 14,
    alignItems: "flex-start"
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#131313",
    marginBottom: 4
  },
  subtitle: {
    fontSize: 13,
    color: "#5A5A5A",
    marginBottom: 18
  },
  inputGroup: {
    width: "100%",
    marginBottom: 12
  },
  label: {
    fontSize: 13,
    color: PRIMARY,
    fontWeight: "600",
    marginBottom: 4
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    borderRadius: 8,
    fontSize: 15,
    backgroundColor: "#fafafa"
  },
  passwordWrap: {
    flexDirection: "row",
    alignItems: "center"
  },
  eyeButton: {
    padding: 8
  },
  eyeIcon: {
    width: 22,
    height: 22,
    tintColor: "#888"
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: "#232265",
    borderRadius: 5,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  checkboxChecked: {
    backgroundColor: "#fff",
    borderColor: "#232265"
  },
  checkIcon: {
    width: 16,
    height: 16,
    tintColor: "#232265"
  },
  rememberText: {
    fontSize: 14,
    color: "#232265"
  },
  button: {
    width: "100%",
    backgroundColor: PRIMARY,
    borderRadius: 22,
    alignItems: "center",
    paddingVertical: 13,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5
  }
});