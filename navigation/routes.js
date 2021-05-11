import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ButtomTabs from "../navigation/buttomTabs/ButtomTabs";
// import Icon from "react-native-vector-icons/Ionicons";
import { Image, Text, View } from "react-native";

import { COLORS } from "../constants/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { FONTS } from "../constants/fonts";

function LogoTitle() {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 50, height: 50, borderRadius: 23, marginLeft: -25 }}
        source={{
          uri:
            "https://images.unsplash.com/photo-1566843457184-655eedf6f1ef?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.white,
          paddingLeft: 5,
        }}
      >
        Danny
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();
const chatRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ButtomTabs}
          options={({ route, navigation }) => ({
            title: "",
            headerStyle: {
              elevation: 0,
              backgroundColor: COLORS.primaryColor,
            },

            headerTintColor: "#fff",
            headerTitleStyle: {},
            headerTitle: (props) => <LogoTitle {...props} />,
            headerShown: true,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Drawer"
                  iconName="call-outline"
                  onPress={() => {
                    console.log("call");
                    // navigation.toggleDrawer();
                  }}
                ></Item>
                <Item
                  title="Drawer"
                  iconName="videocam-outline"
                  onPress={() => {
                    console.log("videos");
                    // navigation.toggleDrawer();
                  }}
                ></Item>

                <Item
                  title="Drawer"
                  iconName="ellipsis-vertical-outline"
                  onPress={() => {
                    console.log("yea");
                    // navigation.toggleDrawer();
                  }}
                ></Item>
              </HeaderButtons>
            ),
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Drawer"
                  iconName="chevron-back-outline"
                  onPress={() => {
                    console.log("call");
                    // navigation.toggleDrawer();
                  }}
                ></Item>
              </HeaderButtons>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default chatRoutes;
