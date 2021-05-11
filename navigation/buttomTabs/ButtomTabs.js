import * as React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import ChatScreen from "../../screens/ChatScreen";
import PeopleScreen from "../../screens/PeopleScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { COLORS } from "../../constants/colors";

const Tab = createMaterialBottomTabNavigator();

// const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      activeColor={COLORS.accentColor}
      inactiveColor="#3e2465"
      barStyle={{
        backgroundColor: COLORS.bgColor,
        height: 70,
      }}
    >
      <Tab.Screen
        name="People"
        component={PeopleScreen}
        options={{
          title: "People",
          tabBarIcon: ({ focused }) => (
            <Icon
              style={styles.iconStyle}
              style={{
                paddingVertical: -5,
              }}
              name={
                Platform.OS === "android" ? "people-outline" : "people-outline"
              }
              size={focused ? 26 : 25}
              color={focused ? COLORS.accentColor : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: "Chat",
          tabBarIcon: ({ focused }) => (
            <Icon
              style={styles.iconStyle}
              name={
                Platform.OS === "android"
                  ? "chatbubble-ellipses-outline"
                  : "chatbubble-ellipses-outline"
              }
              size={focused ? 26 : 25}
              color={focused ? COLORS.accentColor : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Icon
              style={styles.iconStyle}
              name={
                Platform.OS === "android" ? "person-outline" : "person-outline"
              }
              size={focused ? 26 : 25}
              color={focused ? COLORS.accentColor : COLORS.gray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  iconStyle: {
    paddingVertical: -5,
    paddingHorizontal: -4,
  },
});
export default BottomTabs;
