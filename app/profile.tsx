// app/(tabs)/profile.tsx
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const PRIMARY = "#232265";

export default function ProfileScreen() {
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [profileData] = useState({
    name: "Addina Zahra Maharani Yurniawan",
    nim: "C2C023043",
    faculty: "Fakultas Teknik dan Ilmu Komputer",
    major: "Informatika",
    university: "University California",
  });

  const handleMenuPress = () => {
    setSidebarVisible(true);
  };

  const menuItems = [
    { 
      icon: require("../assets/images/setting.png"), 
      title: "Pengaturan", 
      color: "#4CAF50" 
    },
    { 
      icon: require("../assets/images/bantuan.png"), 
      title: "Pusat Bantuan", 
      color: "#2196F3" 
    },
    { 
      icon: require("../assets/images/logout.png"), 
      title: "Keluar", 
      color: "#FF9800" 
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={PRIMARY} />

      {/* Profile Content */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Profile Image Section */}
        <View style={styles.profileImageSection}>


          {/* Tombol Back */}
<TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
  <Image
    source={require("../assets/images/back.png")}
    style={styles.backIcon}
    resizeMode="contain"
  />
</TouchableOpacity>

{/* Tulisan Detail */}
<Text style={styles.detailTitle}>Profil</Text>


          <View style={styles.profileImageContainer}>
            <Image
              source={require("../assets/images/ritsukichannn.jpg")}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>
          
          <View style={styles.profileNameSection}>
            <Text style={styles.profileName}>{profileData.name}</Text>
            <Text style={styles.profileSubtitle}>{profileData.nim}</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuItemLeft}>
                <View style={[styles.menuIconContainer, { backgroundColor: item.color + '20' }]}>
                  <Image source={item.icon} style={styles.menuItemIcon} resizeMode="contain" />
                </View>
                <Text style={styles.menuItemTitle}>{item.title}</Text>
              </View>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: PRIMARY,
    justifyContent: "space-between",
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    width: 30,
    height: 30,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileImageSection: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 30,
    backgroundColor: PRIMARY,
    position: "relative",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  //style back button
  backButton: {
  position: 'absolute',
  top: 55, // dinaikkan agar tidak nabrak status bar
  left: 20,
  zIndex: 10,
  padding: 6,
  borderRadius: 20,
},

//style detail title
detailTitle: {
  color: '#fff',
  fontSize: 20,
  fontWeight: '600',
  fontFamily: 'Poppins-Medium',
  marginTop: 25, // kasih jarak setelah tombol back
  marginBottom: 30,
},

//ukuran icon back
  backIcon: {
    width: 34,
    height: 34,
    tintColor: '#fff', // Ubah atau hapus jika ikonmu sudah berwarna
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 20,
    zIndex: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
  },
  profileNameSection: {
    alignItems: "center",
    zIndex: 2,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    fontFamily: "Poppins-Bold",
    marginBottom: 5,
  },
  profileSubtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    fontFamily: "Poppins-Regular",
  },
  menuSection: {
    padding: 20,
    paddingTop: 30,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  menuItemIcon: {
    width: 20,
    height: 20,
    tintColor: "#222",
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    fontFamily: "Poppins-Medium",
  },
  menuArrow: {
    fontSize: 20,
    color: "#ccc",
    fontWeight: "300",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    gap: 8,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
});
