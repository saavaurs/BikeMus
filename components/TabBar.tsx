import { View, TouchableOpacity, StyleSheet, LayoutChangeEvent, Animated } from 'react-native';
import { Text, PlatformPressable, Layout } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import TabBarButton from './TabBarButton';
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  // const icon = {
  //   index: (props: any) => <Feather name='home' size={24} {...props} />,
  //   explore: (props: any) => <Feather name='compass' size={24} {...props} />,
  //   profile: (props: any) => <Feather name='user' size={24} {...props} />,
  // };
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });

  const buttonWidth = dimensions.width / state.routes.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    }
  });

  return (
    <View onLayout={onTabbarLayout} style={styles.tabBar}>
      <Animated.View style={[animatedStyle, {
        position: 'absolute',
        backgroundColor: '#723feb',
        borderRadius: 30,
        marginHorizontal: 12,
        height: dimensions.height - 15,
        width: buttonWidth - 0.8,
      }]} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {
            damping: 15,
            stiffness: 120,
          });

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? '#673ab7' : '#222'}
            label={label}
          />

          // <TouchableOpacity
          //   key={route.name}
          //   accessibilityRole='button'
          //   accessibilityState={isFocused ? { selected: true } : {}}
          //   accessibilityLabel={options.tabBarAccessibilityLabel}
          //   testID={options.tabBarButtonTestID}
          //   onPress={onPress}
          //   onLongPress={onLongPress}
          //   style={styles.tabbarItem}
          // >
          //   {icon[route.name]({
          //     color: isFocused ? '#673ab7' : '#222',
          //   })}
          //   <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          //     {label}
          //   </Text>
          // </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 80,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    elevation: 5,
  },
  // tabbarItem: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 5,
  // },
});
