// import {
//     Modal,
//     Pressable,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
// } from 'react-native';

// type DrawerMenuProps = {
//   visible: boolean;
//   onClose: () => void;
// };

// export default function DrawerMenu({ visible, onClose }: DrawerMenuProps) {
//   return (
//     <Modal visible={visible} transparent animationType="slide">
//       {/* Overlay */}
//       <Pressable style={styles.overlay} onPress={onClose} />

//       {/* Drawer Content */}
//       <View style={styles.drawer}>
//         <Text style={styles.drawerTitle}>Menu</Text>
//         <TouchableOpacity onPress={() => alert('Profil')}>
//           <Text style={styles.drawerItem}>Profil</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => alert('Pengaturan')}>
//           <Text style={styles.drawerItem}>Pengaturan</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => alert('Keluar')}>
//           <Text style={styles.drawerItem}>Keluar</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: '#00000050',
//   },
//   drawer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 240,
//     height: '100%',
//     backgroundColor: '#fff',
//     paddingTop: 60,
//     paddingHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 4, height: 0 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 8,
//   },
//   drawerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   drawerItem: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
// });
