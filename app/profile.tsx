// app/(tabs)/profile.tsx
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Sidebar from "../components/Sidebar";

const PRIMARY = "#232265";

export default function ProfileScreen() {
  const router = useRouter();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Addina Zahra Maharani Yumiawan",
    nim: "C2C023043",
    email: "addina.zahra@student.unsoed.ac.id",
    phone: "081234567890",
    faculty: "Fakultas Teknik",
    major: "Teknik Informatika",
  });

  const [editData, setEditData] = useState(profileData);

  const handleMenuPress = () => {
    setSidebarVisible(true);
  };

  const handleCloseSidebar = () => {
    setSidebarVisible(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profileData);
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    Alert.alert("Berhasil", "Profil berhasil diperbarui");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(profileData);
  };

  const updateEditData = (field: string, value: string) => {
    setEditData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleMenuPress} style={styles.menuButton}>
          <View style={styles.menuIcon}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        {!isEditing ? (
          <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.editActions}>
            <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Simpan</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Profile Content */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Profile Image Section */}
        <View style={styles.profileImageSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../assets/images/profilee.png")}
              style={styles.profileImage}
              resizeMode="cover"
            />
            {isEditing && (
              <TouchableOpacity style={styles.changePhotoButton}>
                <Text style={styles.changePhotoText}>📷</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.profileName}>
            {isEditing ? editData.name : profileData.name}
          </Text>
          <Text style={styles.profileNim}>
            {isEditing ? editData.nim : profileData.nim}
          </Text>
        </View>

        {/* Profile Information */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Informasi Personal</Text>
          
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Nama Lengkap</Text>
            {isEditing ? (
              <TextInput
                style={styles.infoInput}
                value={editData.name}
                onChangeText={(text) => updateEditData('name', text)}
                placeholder="Masukkan nama lengkap"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.name}</Text>
            )}
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>NIM</Text>
            {isEditing ? (
              <TextInput
                style={styles.infoInput}
                value={editData.nim}
                onChangeText={(text) => updateEditData('nim', text)}
                placeholder="Masukkan NIM"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.nim}</Text>
            )}
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Email</Text>
            {isEditing ? (
              <TextInput
                style={styles.infoInput}
                value={editData.email}
                onChangeText={(text) => updateEditData('email', text)}
                placeholder="Masukkan email"
                keyboardType="email-address"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.email}</Text>
            )}
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>No. Telepon</Text>
            {isEditing ? (
              <TextInput
                style={styles.infoInput}
                value={editData.phone}
                onChangeText={(text) => updateEditData('phone', text)}
                placeholder="Masukkan no. telepon"
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.phone}</Text>
            )}
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Fakultas</Text>
            {isEditing ? (
              <TextInput
                style={styles.infoInput}
                value={editData.faculty}
                onChangeText={(text) => updateEditData('faculty', text)}
                placeholder="Masukkan fakultas"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.faculty}</Text>
            )}
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Jurusan</Text>
            {isEditing ? (
              <TextInput
                style={styles.infoInput}
                value={editData.major}
                onChangeText={(text) => updateEditData('major', text)}
                placeholder="Masukkan jurusan"
              />
            ) : (
              <Text style={styles.infoValue}>{profileData.major}</Text>
            )}
          </View>
        </View>

        {/* Statistics Section */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Statistik Penggunaan</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Total Peminjaman</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>8.5</Text>
              <Text style={styles.statLabel}>Jam Berkendara</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Denda</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Sidebar */}
      <Sidebar visible={sidebarVisible} onClose={handleCloseSidebar} />
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
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    justifyContent: "space-between",
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    width: 20,
    height: 14,
    justifyContent: "space-between",
  },
  menuLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#333",
    borderRadius: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: PRIMARY,
    fontFamily: "Poppins-SemiBold",
    flex: 1,
    marginLeft: 15,
  },
  editButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: PRIMARY,
    borderRadius: 20,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  editActions: {
    flexDirection: "row",
    gap: 10,
  },
  cancelButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  cancelButtonText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  saveButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: PRIMARY,
    borderRadius: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileImageSection: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#f8f9fa",
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: PRIMARY,
  },
  changePhotoButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: PRIMARY,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  changePhotoText: {
    fontSize: 14,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    fontFamily: "Poppins-SemiBold",
    marginBottom: 5,
  },
  profileNim: {
    fontSize: 16,
    color: "#666",
    fontFamily: "Poppins-Regular",
  },
  infoSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    fontFamily: "Poppins-SemiBold",
    marginBottom: 20,
  },
  infoItem: {
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
    fontFamily: "Poppins-Medium",
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 16,
    color: "#333",
    fontFamily: "Poppins-Regular",
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
  },
  infoInput: {
    fontSize: 16,
    color: "#333",
    fontFamily: "Poppins-Regular",
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  statsSection: {
    padding: 20,
    backgroundColor: "#f8f9fa",
    marginTop: 20,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "700",
    color: PRIMARY,
    fontFamily: "Poppins-Bold",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
});