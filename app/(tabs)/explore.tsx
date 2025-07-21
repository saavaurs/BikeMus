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
  View,
} from "react-native";
import Sidebar from "../../components/Sidebar";

export default function HomeScreen() {
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleViewFullMap = () => {
    router.push('/maps');
  };

  const handleMenuPress = () => {
    setSidebarVisible(true);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Sidebar Component */}
      <Sidebar visible={sidebarVisible} onClose={closeSidebar} />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
            <Image
              source={require("../../assets/images/menu.png")}
              style={styles.sidebarIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/logoBikeMus.png")}
              style={styles.logoHeader}
              resizeMode="contain"
            />
            <Text style={styles.brandHeader}>BikeMus</Text>
          </View>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileInfo}>
            <Image
              source={require("../../assets/images/profilee.png")}
              style={styles.profileImage}
              resizeMode="cover"
            />
            <View style={styles.profileText}>
              <Text style={styles.greeting}>Assalammuualaikum</Text>
              <Text style={styles.userName}>Addina Zahra Maharani Yumiawan</Text>
            </View>
          </View>
        </View>

        {/* Promo Card */}
<View style={styles.promoCard}>
  <View style={styles.promoContent}>
    <Text style={styles.promoBigText}>
      Yuk pakai <Text style={styles.promoHighlight}>BikeMus</Text>
    </Text>
    <Text style={styles.promoSubText}>
      Cari, pinjam, kayuh! Semua bisa lewat BikeMus 🚴
    </Text>
  </View>
  <View style={styles.promoImageContainer}>
    <Image
      source={require("../../assets/images/ilustrasiorangsepeda.png")}
      style={styles.promoImage}
      resizeMode="contain"
    />
  
            {/* Decorative stars */}
            <View style={[styles.star, styles.star1]}>
              <Text style={styles.starText}>★</Text>
            </View>
            <View style={[styles.star, styles.star2]}>
              <Text style={styles.starText}>★</Text>
            </View>
            <View style={[styles.star, styles.star3]}>
              <Text style={styles.starText}>★</Text>
            </View>
          </View>
        </View>

        {/* Map Section */}
        <View style={styles.mapSection}>
          <View style={styles.mapHeader}>
            <View style={styles.mapTitleContainer}>
              <Text style={styles.mapTitle}>Peta Kampus</Text>
              <View style={styles.mapIconContainer}>
                <Text style={styles.mapIcon}>📍</Text>
              </View>
            </View>
            <Text style={styles.bikeCount}>9 Sepeda</Text>
          </View>
          
          {/* Map Container */}
          <View style={styles.mapContainer}>
            {/* Map Content */}
            <View style={styles.mapContent}>
              <View style={styles.mapBackground}>
                {/* Semarang label */}
                <View style={styles.semarangLabel}>
                  <Text style={styles.semarangText}>Semarang</Text>
                </View>
                
                {/* Location labels positioned like in design */}
                <Text style={[styles.locationLabel, styles.ntralJava]}>NTRAL JAVA</Text>
                <Text style={[styles.locationLabel, styles.ungaran]}>Ungaran</Text>
                <Text style={[styles.locationLabel, styles.bawen]}>Bawen</Text>
                <Text style={[styles.locationLabel, styles.temanggung]}>Temanggung</Text>
                <Text style={[styles.locationLabel, styles.salatiga]}>Salatiga</Text>
                <Text style={[styles.locationLabel, styles.magelang]}>Magelang</Text>
                <Text style={[styles.locationLabel, styles.mungkid]}>Mungkid</Text>
                <Text style={[styles.locationLabel, styles.muntilan]}>Muntilan</Text>
                <Text style={[styles.locationLabel, styles.boyolali]}>Boyolali</Text>
                <Text style={[styles.locationLabel, styles.surakarta]}>Surakarta</Text>
                
                {/* Blue dot for Salatiga */}
                <View style={styles.salatrigaDot} />
                
                {/* Google logo */}
                <View style={styles.googleLogo}>
                  <Text style={styles.googleText}>Google</Text>
                </View>
                
                {/* Map data */}
                <Text style={styles.mapDataText}>Map data ©2025</Text>
              </View>
            </View>
            
            {/* Full Map Button */}
            <TouchableOpacity style={styles.fullMapButton} onPress={handleViewFullMap}>
              <Text style={styles.fullMapButtonText}>Lihat Peta Lengkap</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNav}>
          <View style={styles.navItem}>
            <View style={styles.navIconActive}>
              <Text style={styles.navIconText}>🏠</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const PRIMARY = "#232265";
const PROMO_BLUE = "#B8E6FF";
const MAP_BLUE = "#E8F4FD";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  menuButton: {
    padding: 10,
    marginRight: 8,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginTop: 10,
  },
  logoHeader: {
    width: 28,
    height: 28,
    marginRight: 1,
  },
  brandHeader: {
    fontSize: 20,
    fontWeight: "700",
    color: PRIMARY,
    fontFamily: "Poppins-Bold",
    lineHeight: 24,
  },
  sidebarIcon: {
    width: 26,
    height: 26,
    tintColor: "#232265",
    marginTop: 6, // tambahkan ini untuk menurunkan posisi
  },
  profileSection: {
    paddingHorizontal: 20,
    paddingVertical: 4,
    marginBottom: 10,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profileText: {
    flex: 1,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    fontFamily: "Poppins-Bold",
    marginBottom: 0,
   
  },
  userName: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Poppins-Medium",
    marginTop: -4,
  },
  promoCard: {
  backgroundColor: PROMO_BLUE,
  marginHorizontal: 20,
  marginBottom: 20,
  borderRadius: 12,
  paddingVertical: 20,
  paddingHorizontal: 16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
},

promoContent: {
  flex: 1,
  paddingRight: 10,
},


  promoBigText: {
  fontSize: 18,
  fontFamily: "Poppins-Bold",
  color: "#000",
  marginBottom: 6,
},

promoSubText: {
  fontSize: 14,
  color: "#333",
  fontFamily: "Poppins-Italic",
  lineHeight: 18,
},

promoHighlight: {
  color: PRIMARY,
  fontFamily: "Poppins-Bold",
},

promoImageContainer: {
  width: 100,
  height: 100,
  justifyContent: "center",
  alignItems: "center",
},

promoImage: {
  width: "100%",
  height: "100%",
},

  // promoActionContainer: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginTop: 5,
  // },
  // promoAction: {
  //   fontSize: 15,
  //   fontWeight: "600",
  //   color: "#333",
  //   fontFamily: "Poppins-SemiBold",
  // },
  
  
  star: {
    position: "absolute",
  },
  star1: {
    top: 0,
    right: 15,
  },
  star2: {
    top: 15,
    right: 35,
  },
  star3: {
    bottom: 5,
    right: 5,
  },
  starText: {
    fontSize: 14,
    color: "#4A90E2",
  },
  mapSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  mapHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  mapTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mapTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    fontFamily: "Poppins-Bold",
    marginRight: 5,
  },
  mapIconContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  mapIcon: {
    fontSize: 14,
  },
  bikeCount: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Poppins-Regular",
  },
  mapContainer: {
    backgroundColor: MAP_BLUE,
    borderRadius: 12,
    overflow: "hidden",
  },
  mapContent: {
    height: 240,
  },
  mapBackground: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    position: "relative",
  },
  semarangLabel: {
    position: "absolute",
    top: 40,
    left: "50%",
    transform: [{ translateX: -35 }],
    backgroundColor: "rgba(255,255,255,0.8)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  semarangText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    fontFamily: "Poppins-SemiBold",
  },
  locationLabel: {
    position: "absolute",
    fontSize: 11,
    color: "#666",
    fontFamily: "Poppins-Regular",
  },
  ntralJava: {
    top: 80,
    left: 40,
  },
  ungaran: {
    top: 60,
    right: 50,
  },
  bawen: {
    top: 90,
    right: 60,
  },
  temanggung: {
    bottom: 80,
    left: 30,
  },
  salatiga: {
    bottom: 100,
    left: "50%",
    transform: [{ translateX: -20 }],
  },
  magelang: {
    bottom: 60,
    left: 50,
  },
  mungkid: {
    bottom: 40,
    left: 60,
  },
  muntilan: {
    bottom: 25,
    left: 80,
  },
  boyolali: {
    bottom: 90,
    right: 40,
  },
  surakarta: {
    bottom: 50,
    right: 20,
  },
  salatrigaDot: {
    position: "absolute",
    bottom: 105,
    left: "50%",
    transform: [{ translateX: -4 }],
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4A90E2",
  },
  googleLogo: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 2,
  },
  googleText: {
    fontSize: 10,
    color: "#333",
    fontFamily: "Poppins-Regular",
  },
  mapDataText: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontSize: 9,
    color: "#666",
    fontFamily: "Poppins-Regular",
  },
  fullMapButton: {
    backgroundColor: PRIMARY,
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 30,
    paddingVertical: 12,
    alignItems: "center",
    fontFamily : "Poppins-Medium",
  },
  fullMapButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Poppins-Medium",
  },
  bottomNav: {
    height: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    marginTop: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navIconActive: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
  navIconText: {
    fontSize: 16,
  },
});