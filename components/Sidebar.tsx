// components/Sidebar.tsx
import { usePathname, useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Alert,
  Animated,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PRIMARY = "#232265";

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
}

export default function Sidebar({ visible, onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const slideAnim = useRef(new Animated.Value(-300)).current;

  // Function to check if current page is active
  const isActivePage = (page: string): boolean => {
    console.log('Current pathname:', pathname); // Debug log
    switch(page) {
      case 'Beranda':
        return pathname === '/' || pathname === '/index' || pathname === '/(tabs)' || pathname === '/(tabs)/';
      case 'FAQ':
        return pathname === '/faq' || pathname.includes('/faq');
      case 'Profile':
        return pathname === '/profile' || pathname.includes('/profile');
      default:
        return false;
    }
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const handleLogout = (): void => {
    Alert.alert(
      "Konfirmasi Logout",
      "Apakah Anda yakin ingin keluar?",
      [
        {
          text: "Batal",
          style: "cancel"
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: () => {
            // Tutup sidebar dulu
            onClose();
            
            // Clear any stored authentication data if you have any
            // For example, if you're using AsyncStorage:
            // AsyncStorage.removeItem('userToken');
            // AsyncStorage.removeItem('userData');
            
            // Navigate to login screen and reset navigation stack
            router.replace('/login'); // Gunakan replace agar user tidak bisa back ke halaman sebelumnya
            
            console.log('User logged out successfully');
          }
        }
      ]
    );
  };

  const handleSidebarItemPress = (item: string): void => {
    console.log(`${item} pressed`);
    onClose();
    
    // Navigate based on item
    switch(item) {
      case 'Beranda':
        router.push('/');
        break;
      case 'FAQ':
        router.push('/faq');
        break;
      case 'Profile':
        router.push('/profile');
        break;
      case 'Logout':
        // Panggil fungsi logout terpisah
        handleLogout();
        break;
    }
  };

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        {/* Overlay untuk menutup sidebar - menutupi seluruh layar */}
        <TouchableOpacity 
          style={styles.overlay} 
          onPress={onClose}
          activeOpacity={1}
        />
        
        {/* Sidebar dengan posisi absolute */}
        <Animated.View 
          style={[
            styles.sidebar,
            {
              transform: [{ translateX: slideAnim }]
            }
          ]}
        >
          {/* Profile Section in Sidebar */}
          <View style={styles.sidebarProfile}>
            <Image
              source={require("../assets/images/profilee.png")}
              style={styles.sidebarProfileImage}
              resizeMode="cover"
            />
            <View style={styles.sidebarProfileInfo}>
              <Text style={styles.sidebarProfileName}>Addina Zahra Maharani</Text>
              <Text style={styles.sidebarProfileId}>C2C023043</Text>
            </View>
          </View>

          {/* Menu Items */}
          <View style={styles.sidebarMenu}>
            <TouchableOpacity 
              style={[styles.sidebarMenuItem, styles.sidebarMenuItemActive]}
              onPress={() => handleSidebarItemPress('Beranda')}
            >
              <Image 
                source={require("../assets/images/homew.png")} 
                style={styles.sidebarMenuIcon}
                resizeMode="contain"
              />
              <Text style={[styles.sidebarMenuText, styles.sidebarMenuTextActive]}>Beranda</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.sidebarMenuItem}
              onPress={() => handleSidebarItemPress('FAQ')}
            >
              <Image 
                source={require("../assets/images/user.png")} 
                style={styles.sidebarMenuIcon}
                resizeMode="contain"
              />
              <Text style={styles.sidebarMenuText}>FAQ</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.sidebarMenuItem}
              onPress={() => handleSidebarItemPress('Profile')}
            >
              <Image 
                source={require("../assets/images/user.png")} 
                style={styles.sidebarMenuIcon}
                resizeMode="contain"
              />
              <Text style={styles.sidebarMenuText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.sidebarMenuItem}
              onPress={() => handleSidebarItemPress('Logout')}
            >
              <Image 
                source={require("../assets/images/logout.png")} 
                style={styles.sidebarMenuIcon}
                resizeMode="contain"
              />
              <Text style={styles.sidebarMenuText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

// ❗ Style yang sudah diperbarui untuk mengakomodasi icon gambar
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: '#F9F9F9',
    paddingTop: 0,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    zIndex: 1000,
  },
  sidebarProfile: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRIMARY,
  },
  sidebarProfileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  sidebarProfileInfo: {
    flex: 1,
  },
  sidebarProfileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 3,
  },
  sidebarProfileId: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: 'Poppins-Regular',
  },
  sidebarMenu: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  sidebarMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 15,
    marginBottom: 12,
    borderRadius: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sidebarMenuItemActive: {
    backgroundColor: PRIMARY,
  },
  sidebarMenuIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  sidebarMenuIconActive: {
    tintColor: '#ffffff', // Putih untuk icon aktif
    opacity: 1,
  },
  sidebarMenuIconDefault: {
    tintColor: '#00000', // Hitam untuk icon tidak aktif (bukan abu-abu)
    opacity: 0.8,
  },
  sidebarMenuText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  sidebarMenuTextActive: {
    color: '#fff',
  },
});