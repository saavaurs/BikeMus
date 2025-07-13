import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DrawerMenu from '../../components/DrawerMenu';

export default function Home() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setDrawerVisible(true)}>
          <Image
            source={require('../../assets/images/sidebar.png')}
            style={styles.sidebarIcon}
          />
        </TouchableOpacity>

        <Image
          source={require('../../assets/images/logoBikeMus.png')}
          style={styles.logo}
        />
      </View>

      {/* Konten Utama */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Halaman Beranda</Text>
      </View>

      {/* Drawer Menu */}
      <DrawerMenu visible={drawerVisible} onClose={() => setDrawerVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 14,
    backgroundColor: '#f4f4f4',
  },
  sidebarIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  logo: {
    width: 110,
    height: 26,
    resizeMode: 'contain',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
});
