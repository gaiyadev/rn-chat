import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../constants/colors";
import { FONTS } from "../constants/fonts";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { Input } from "react-native-elements";

const ChatScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            height: 200,
            backgroundColor: COLORS.bgColor,
            borderRadius: 7,
            margin: 23,
            elevation: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.black,
            }}
          >
            Video call request from Jack
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Button title="Decline" type="outline" onPress={() => {}} />
            <Text> &nbsp; &nbsp; &nbsp;&nbsp;</Text>
            <Button title="Accept" type="outline" onPress={() => {}} />
          </View>
          {/* chat */}
        </View>
        <View>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              textAlign: "center",
            }}
          >
            Today
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-start",
            backgroundColor: COLORS.white,
            margin: 23,
            // height: 100,
            borderBottomRightRadius: 23,
            borderTopLeftRadius: 23,
            borderTopRightRadius: 23,

            padding: 13,
          }}
        >
          <Text style={{ fontSize: 12, color: COLORS.black }}>
            Hello, nice to meet you
          </Text>
          <Text style={{ fontSize: 12, color: COLORS.black }}>How are you</Text>
        </View>
        {/* retp */}
        <View
          style={{
            alignItems: "flex-start",
            backgroundColor: COLORS.white,
            margin: 23,
            // height: 100,
            borderBottomRightRadius: 23,
            borderTopLeftRadius: 23,
            borderBottomRightRadius: 1,

            padding: 13,
          }}
        >
          <Text style={{ fontSize: 12, color: COLORS.black }}>
            Hello, nice to meet you
          </Text>
          <Text style={{ fontSize: 12, color: COLORS.black }}>How are you</Text>
        </View>
        {/*  */}
        <View>
          <Input
            style={{
              borderBottomColor: COLORS.white,
            }}
            placeholder="Type here your message"
            placeholderTextColor={COLORS.white}
            leftIcon={
              <Icon
                name="chatbubble-ellipses-outline"
                size={24}
                color={COLORS.white}
              />
            }
            rightIcon={
              <Icon name="mic-outline" size={24} color={COLORS.white} />
            }
            onChangeText={() => {}}
          />
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
});

export default ChatScreen;
