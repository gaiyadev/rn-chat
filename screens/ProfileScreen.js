import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { Avatar } from "react-native-elements";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 250,
              width: 230,
              borderRadius: 10,
            }}
            source={{
              uri: "https://avatars.githubusercontent.com/u/49751060?v=4",
            }}
          />
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
              paddingVertical: 15,
            }}
          >
            Danny, 38 M.W
          </Text>
        </View>
        {/* ICONS */}
        <View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              borderRadius: 40,
            }}
          >
            <Avatar
              rounded
              size="medium"
              icon={{
                name: "camera",
                type: "font-awesome",
                color: COLORS.accentColor,
              }}
              onPress={() => console.log("camera!")}
              activeOpacity={0.7}
              containerStyle={{
                backgroundColor: COLORS.white,
              }}
            />
            <Text
              style={{
                ...FONTS.h4,
                color: COLORS.white,
              }}
            >
              Add Photo
            </Text>
          </View>
          {/*  */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
              paddingVertical: 20,
            }}
          >
            <View>
              <Avatar
                rounded
                size="medium"
                icon={{
                  name: "cog",
                  type: "font-awesome",
                  color: COLORS.accentColor,
                }}
                onPress={() => console.log("settings!")}
                activeOpacity={0.7}
                containerStyle={{ backgroundColor: COLORS.white }}
              />
              <Text
                style={{
                  ...FONTS.h4,
                  color: COLORS.white,
                }}
              >
                Settings
              </Text>
            </View>
            <View>
              <Avatar
                rounded
                size="medium"
                icon={{
                  name: "pencil",
                  type: "font-awesome",
                  color: COLORS.accentColor,
                }}
                onPress={() => console.log("edit!")}
                activeOpacity={0.7}
                containerStyle={{ backgroundColor: COLORS.white }}
              />
              <Text
                style={{
                  ...FONTS.h4,
                  color: COLORS.white,
                }}
              >
                Edit
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryColor,
    flex: 1,
  },
  main: {},
});

export default ProfileScreen;
