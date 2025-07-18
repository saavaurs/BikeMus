// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import { useState } from 'react';
// import {
//   Image,
//   LayoutChangeEvent,
//   Pressable,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// // Ikon lokal
// const icons = {
//   index: require('../assets/imagels/home.png'),
//   scanqr: require('../assets/images/qr.png'),
//   riwayat: require('../assets/images/riwayat.png'),
// };

// // Label tab
// const labelMap = {
//   index: 'Beranda',
//   scanqr: 'ScanQR',
//   riwayat: 'Riwayat',
// };

// export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
//   const [dimensions, setDimensions] = useState({ height: 20, width: 100 });

//   const onTabbarLayout = (e: LayoutChangeEvent) => {
//     setDimensions({
//       height: e.nativeEvent.layout.height,
//       width: e.nativeEvent.layout.width,
//     });
//   };

//   return (
//     <View onLayout={onTabbarLayout} style={styles.tabBar}>
//       {state.routes.map((route, index) => {
//         const isFocused = state.index === index;
//         const label = labelMap[route.name as keyof typeof labelMap];

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <Pressable
//             key={route.name}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={styles.tabItem}
//           >
//             <Image
//               source={icons[route.name as keyof typeof icons]}
//               style={[
//                 styles.icon,
//                 { tintColor: isFocused ? '#201E67' : '#999' },
//               ]}
//               resizeMode="contain"
//             />
//             <Text
//               style={[
//                 styles.label,
//                 { color: isFocused ? '#201E67' : '#999' },
//               ]}
//             >
//               {label}
//             </Text>
//           </Pressable>
//         );
//       })}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     position: 'absolute',
//     bottom: 30,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 30,
//     width: 240, // Lebar pas
//     height: 72, // ✅ Naikkan sedikit supaya muat ikon+teks
//     alignSelf: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.05,
//     shadowRadius: 5,
//     elevation: 5,
//     overflow: 'hidden', // ✅ Ini penting biar anak-anaknya gak keluar
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: 4,
//   },
//   icon: {
//     width: 30, // ikon besar
//     height: 30,
//   },
//   label: {
//     fontSize: 12,
//     fontFamily: 'Poppins-Regular',
//     textAlign: 'center',
//   },
// });
