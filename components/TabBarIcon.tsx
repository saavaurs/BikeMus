import React from "react";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

type Props = { name: "home" | "qrcode" | "clock"; color: string; focused: boolean; };

export default function TabBarIcon({ name, color, focused }: Props) {
  let IconComponent;
  let iconName: string = name;

  if (name === "qrcode") {
    IconComponent = MaterialCommunityIcons;
    iconName = "qrcode-scan";
  } else {
    IconComponent = Feather;
  }

  return <IconComponent name={iconName as any} size={26} color={color} style={{ opacity: focused ? 1 : 0.5 }} />;
}