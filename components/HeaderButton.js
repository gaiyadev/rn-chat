import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const CustomHeaderBtn = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={Platform.OS === "android" ? COLORS.white : COLORS.white}
    />
  );
};

export default CustomHeaderBtn;
