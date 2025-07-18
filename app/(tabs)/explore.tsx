import { StyleSheet, Text, View } from "react-native";

export default function BerandaScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Beranda</Text>
      </View>

      {/* Konten utama */}
      <View style={styles.content}>
        <Text>Selamat datang di BikeMus!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 20 },
  title: { fontSize: 20, fontFamily: "Poppins-Bold" },
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
});
